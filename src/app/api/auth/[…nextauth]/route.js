import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  // Configure one or more authentication providers
  pages: {
    signIn: '/login',

  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        mobileNo: { label: "mobileNo", type: "text"},
        password: { label: "password", type: "password" }
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        if(typeof credentials !== undefined){
          console.log("credentials", credentials)

          const res = await fetch("http://192.168.2.122:90/api/Auth/CustomerLogin", {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" }
          })
          const user = await res.json()
    
          if (res.ok && user) {
            return user
          }

        }
       
        
        // Return null if user data could not be retrieved
        return null
      }
    })
  ],
  session: { strategy: "jwt" }
})


export { handler as GET, handler as POST }