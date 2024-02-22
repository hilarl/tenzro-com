import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/header';
import Link from 'next/link';
import Head from 'next/head';

export default function RootLayout({ children }) {
  return (
    <div>
      <Head>
        {/* Meta tags for SEO */}
        <title>Tenzro</title>
        <meta name="description" content="Build smarter, safer web3 applications" />

        {/* Open Graph tags */}
        <meta property="og:title" content="Tenzro" />
        <meta property="og:description" content="Tenzro's novel digital infrastructure injects artificial intelligence and encryption into the blockchain, enabling developers to build web3 applications that are intelligent and secure." />
        <meta property="og:image" content="https://tenzro.com/og.png" />
        <meta property="og:url" content="https://tenzro.com/og.png" />
        <meta property="og:type" content="website" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="Build smarter, safer web3 applications" />
        <meta name="twitter:title" content="Tenzro" />
        <meta name="twitter:description" content="Tenzro's digital infrastructure injects artificial intelligence and encryption into the blockchain, enabling developers to build web3 applications that are intelligent and secure." />
        <meta name="twitter:image" content="https://tenzro.com/twitter-card.png" />

      </Head>
      <div>
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
      </div>
    </div>
  )
}
