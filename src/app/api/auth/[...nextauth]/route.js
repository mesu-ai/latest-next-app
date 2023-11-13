import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { JWT } from 'next-auth/jwt';
import { baseURL } from '@/APIs/config/baseURL';
import connectMongoDB from '@/libs/mongoDB';
import User from '@/models/users';
import { singJwtToken } from '@/libs/jwt';
import jwt from 'jsonwebtoken';

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
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" }

      },
      async authorize(credentials, req) {

        const { email, password } = credentials;

        await connectMongoDB();
        const isExisting = await User.findOne({ email});

        console.log({ isExisting })

        if (!isExisting) {
          throw new Error('User not found');
        }

        // const comparePass = await bcrypt.compare(password, isExisting.password);

        if (password !== isExisting.password) {
          throw new Error('Invalid credentials');

        } else {

          // console.log('user found');
          const { password, ...currentUser } = isExisting._doc;

          console.log({ currentUser })

          const accessToken = singJwtToken(currentUser, { expiresIn: '1d' })


          // var token = jwt.sign(currentUser, 'cddcf3df385b895f485fbf0572cfa721164105d4dcd5e306598040d39276448a', { expiresIn: '1d' });

          return {...currentUser, name:'mesu', accessToken};

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

      // console.log({token})
      
      if (user) {

      //  console.log({user})
        token.accessToken = user.accessToken
        // token.refreshToken = user.refreshToken
        // token.accessTokenExpires = user.accessToken.exp
      }

      return token;
    },


    async session({ token, user, session }) {
      user = session.user
      user.accessToken = token.accessToken
      // console.log('session data', {token,user,session})
      return session
    },



  }

};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };
