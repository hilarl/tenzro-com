import styles from './style.module.scss';
import { translate } from '../../anim';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <ul className='text-white'>
                <motion.li 
                    custom={[0.3, 0]} 
                    variants={translate} initial="initial" 
                    animate="enter" 
                    exit="exit">
                    <span className='text-neutral-600 text-lg'>Social</span>
                    <ul className='ml-4'>
                        <li><Link href="https://x.com/tenzr0">X</Link></li>
                        <li><Link href="https://linkedin.com/company/tenzro">LinkedIn</Link></li>
                        <li><Link href="https://t.me/+VvTmMD4Z6QBlM2Jk">Telegram</Link></li>
                        <li><Link href="mailto:team@tenzro.com">Email</Link></li>
                    </ul>
                </motion.li>
            </ul>
        </div>
    )
}
