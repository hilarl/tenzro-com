import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/header';
import Image from 'next/image';
import Completion from '../components/completion';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tenzro',
  description: 'Build smarter, safer web3 applications',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
