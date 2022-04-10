import style from '../styles/components/Footer.module.scss';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 0.5,
        },
      }}
      className={style.footer_container}
    >
      <ul className={style.footer_links}>
        <li>Tesla © 2022</li>
        <li>Privacy & Legal</li>
        <li>Vehicle Recalls</li>
        <li className={style.remove}>Contact</li>
        <li>Careers</li>
        <li>News</li>
        <li className={style.remove}>Engage</li>
        <li className={style.remove}>Locations</li>
      </ul>
    </motion.footer>
  );
};

export default Footer;
