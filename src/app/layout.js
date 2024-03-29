

/* eslint-disable prettier/prettier */
import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import PrimaryNavbar from '@/components/molecules/PrimaryNavbar'
import AuthProvider from '@/contex/AuthProvider'
import QueryProvider from '@/contex/QueryProvider'


// import Error from 'next/error'
// import GlobalError from './global-error'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <AuthProvider>
            <PrimaryNavbar />
            <main className="container mx-auto min-h-screen my-5 bg-sky-200">{children}</main>
            <footer className="py-10 bg-black text-white text-center">
              &copy; all right served by Mesu 2023.
            </footer>
          </AuthProvider>
        </QueryProvider>

      </body>
    </html>
  )
}
