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
        
          // console.log({userInfo})

          

          if(res.ok && user){
            // console.log({user})
           
            const newUser={
              // ...user.user,
              id:user.user.id,
              name:user.user.userName ,
              email:user.user.email,
              mobileNo:user.user.phoneNumber,
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
    // async signIn({ user, account, profile, email, credentials }) {
    //   // console.log({user, account, profile, email, credentials})
    //   return true;
    // },

    async jwt({token, user, account, profile, isNewUser }) {
      if (user) {
       

        // token.id = user.id
        token = user.accessToken
        token.refreshToken = user.refreshToken
        token.accessTokenExpires = user.accessToken.exp
      }

      console.log({token,user})

      return token;
    },

   
    // async redirect({ url, baseUrl }) {
    //   return baseUrl
    // },

    async session({token, user, session }) {
      return session
    },

   
  }

};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };
