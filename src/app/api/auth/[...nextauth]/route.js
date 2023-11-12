import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { JWT } from 'next-auth/jwt';
import { baseURL } from '@/APIs/config/baseURL';
import connectMongoDB from '@/libs/mongoDB';
import User from '@/models/users';
import { singJwtToken } from '@/libs/jwt';
// const bcrypt = require('bcrypt');


// const baseUrl='https://prod.saralifestyle.com'
// const baseUrl='http://192.168.2.122:90'

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
        userName: { label: "email", type: "text" },
        password: { label: "password", type: "password" }

      },
      async authorize(credentials, req) {

        const { userName, password } = credentials;

        await connectMongoDB();

        const isExisting = await User.findOne({ email: userName });

        if (!isExisting) {
          throw new Error('User not found');
        }

        // const comparePass = await bcrypt.compare(password, isExisting.password);

        if (password !== isExisting.password) {
          throw new Error('Invalid credentials');

        } else {

          const { password, ...currentUser } = isExisting._doc;

          const accessToken = singJwtToken(currentUser, { expiresIn: '1d' })

          return { ...currentUser, accessToken };

        }

      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log({ user, account, profile, email, credentials })
      return true;
    },

    async redirect({ url, baseUrl }) {
      return baseUrl
    },

    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {

       console.log({user})
        token.value = user.accessToken
        // token.refreshToken = user.refreshToken
        // token.accessTokenExpires = user.accessToken.exp
      }

      return token;
    },


    async session({ token, user, session }) {
      user = session.user
      // console.log('session data', {token,user,session})
      return session
    },



  }

};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };
