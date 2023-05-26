/* eslint-disable prettier/prettier */
import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import PrimaryNavbar from '@/components/molecules/PrimaryNavbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <nav className="bg-blue-300 py-5">
          <ul className="flex justify-center gap-10">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/blog">
              <li>Blog</li>
            </Link>
            <Link href="/dashboard">
              <li>DashBoad</li>
            </Link>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </nav> */}
        <PrimaryNavbar/>
        <div className="container mx-auto h-screen my-10">{children}</div>
        <footer className="py-10 bg-black text-white text-center">
          &copy; all right served by Mesu 2023.
        </footer>
      </body>
    </html>
  )
}
