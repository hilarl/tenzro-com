import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/header';
import Image from 'next/image';

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
        <section style={{
          height: "100vh", // Assuming full viewport height
          overflow: "hidden",
          backgroundImage: `url(/bg0.jpeg)`, // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
          <div class="grid place-items-center h-1/4 p-8 md:-p-0 md:h-1/3 mt-64 md:mt-56 w-full md:w-1/2 m-auto">
            <h1 class="text-5xl md:text-7xl text-center text-white">Build smarter, safer web3 applications</h1>
            <h3 class="text-md md:text-xl mt-6 md:mt-10 text-center text-white">Our novel digital infrastructure injects artificial intelligence and encryption into the blockchain, enabling developers to build web3 applications that are intelligent and secure.</h3>
          </div>
        </section>
        {children}
      </body>
    </html>
  )
}
