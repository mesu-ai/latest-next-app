import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { JWT } from 'next-auth/jwt';
import { baseURL } from '@/APIs/config/baseURL';


// const baseUrl='https://prod.saralifestyle.com'
// const baseUrl='http://192.168.2.122:90'

export const authOptions= {
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        mobileNo: { label: "mobileNo", type: "text"},
        password: { label: "password", type: "password" }
       
      },
      async authorize(credentials, req) {
        console.log({credentials})

          const res = await fetch(`${baseURL}/api/Auth/CustomerLogin`, {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" }
          })
        
          let user = await res.json();
          

          if(res.ok && user){
            // console.log({user})
           
            const newUser={
              // ...user.user,
              id:user.user.id,
              name:user.user.userName ,
              email:user.user.email,
              phone:user.user.phoneNumber,
              role:user.user.roleId,
              accessToken:user.token
            }

            return newUser;

          }
        return null;
      },
    }),
  ],

  callbacks:{
    async signIn({ user, account, profile, email, credentials }) {
      console.log({user, account, profile, email, credentials})
      return true;
    },

    async redirect({ url, baseUrl }) {
      return baseUrl
    },

    async jwt({token, user, account, profile, isNewUser }) {
      if (user) {
       
        
        token.value = user.accessToken
        // token.refreshToken = user.refreshToken
        // token.accessTokenExpires = user.accessToken.exp
      }

      return token;
    },


    async session({token, user, session }) {
      user = session.user
      // console.log('session data', {token,user,session})
      return session
    },
    

   
  }

};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };
