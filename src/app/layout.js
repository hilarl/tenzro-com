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
        <div className='text-neutral-400 md:text-base text-sm text-center md:text-right pt-16 pb-24 md:p-12 mono-light mt-12 md:mt-24'>
          <p>©2024 TENZRO, ALL RIGHTS RESERVED.</p>
        </div>
      </body>
    </html>
  )
}
