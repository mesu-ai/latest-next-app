import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectMongoDB from '@/libs/mongoDB';
import User from '@/models/users';
import { singJwtToken } from '@/libs/jwt';
import bcrypt from 'bcrypt';


const myMongoDBUri= process.env.MONGODB_URI;

export const authOptions = {
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" }

      },
      async authorize(credentials, req) {
        
        const { email, password } = credentials;

        await connectMongoDB(myMongoDBUri);
        const user = await User.findOne({ email });

        
        if (!user) {
          throw new Error('User not found');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
          throw new Error('Incorrect password');
        
        } else {

          // console.log('user found');
          const { password, ...currentUser } = user._doc;

          const accessToken = singJwtToken(currentUser, { expiresIn: '1d' });


          // var token = jwt.sign(currentUser, 'cddcf3df385b895f485fbf0572cfa721164105d4dcd5e306598040d39276448a', { expiresIn: '1d' });

          return {...currentUser, accessToken};

        }

      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log({ user, account, profile, email, credentials })
      return true;
    },

    async redirect({ url, baseUrl }) {
      return baseUrl
    },

    async jwt({ token, user, account, profile, isNewUser }) {

      if (user) {

      //  console.log( 'jwt data',{user}, {token})
        
        token.userId=user._id
        token.accessToken = user.accessToken;
        
        // token.refreshToken = user.refreshToken
        // token.accessTokenExpires = user.accessToken.exp
      }

      return token;
    },


    async session({ token, user, session }) {
      user = session.user
      user.accessToken = token.accessToken
      // user.id = token.id
      // console.log('session data', {token,user,session})
      return session
    },



  }

};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };
