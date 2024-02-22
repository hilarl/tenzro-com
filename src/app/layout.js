import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/header';
import Link from 'next/link';
import Head from 'next/head';

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
        <div className='text-neutral-400 md:text-base text-base text-center md:text-right pt-16 pb-24 md:p-12 mono-light mt-12 md:mt-24 w-full md:flex md:justify-between'>
          <div className="md:text-left md:w-1/2 w-full">
            <ul className="flex flex-wrap md:justify-start justify-center mb-12 md:mb-0">
              <li className="mr-4"><Link href="https://x.com/tenzr0">X</Link></li>
              <li className="mr-4"><Link href="https://linkedin.com/company/tenzro">LinkedIn</Link></li>
              <li className="mr-4"><Link href="https://medium.com/tenzro">Medium</Link></li>
              <li className="mr-4"><Link href="https://t.me/+VvTmMD4Z6QBlM2Jk">Telegram</Link></li>
              <li><Link href="mailto:team@tenzro.com">Email</Link></li>
            </ul>
          </div>
          <p className="md:text-right md:w-1/2 w-full text-sm">©2024 TENZRO</p>
        </div>
      </body>
    </html>
  )
}
