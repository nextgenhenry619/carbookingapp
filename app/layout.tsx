import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rent/Buy a Car',
  description: 'Book now',
  icons:{
    icon:"/pageicon.png"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className="relative no-scrollbar">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
