'use client';
import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Footer from './Footer';
import Image from './Image';

const links = [
  {
    title: "Developers",
    href: "/developers",
  },
  {
    title: "Creators",
    href: "/creators",
  },
  {
    title: "Businesses",
    href: "/businesses",
  },
  {
    title: "Ecosystem",
    href: "/ecosystem",
  },
  {
    title: "Research",
    href: "/research",
  },
  {
    title: "Vision",
    href: "/vision",
    // src: "home.png"
  },
  {
    title: "Docs",
    href: "https://docs.tenzro.com",
    // src: "home.png"
  },
]

export default function Index() {

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
          <Footer />
        </div>
        <Image src={links[selectedLink.index].src} isActive={selectedLink.isActive}/>
      </div>
    </motion.div>
  )
}