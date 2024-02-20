import styles from './style.module.scss';
import { translate } from '../../anim';
import { motion } from 'framer-motion';

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
                        <li>X</li>
                        <li>LinkedIn</li>
                        <li>YouTube</li>
                        <li>Telegram</li>
                        <li>Medium</li>
                    </ul>
                </motion.li>
            </ul>
        </div>
    )
}
