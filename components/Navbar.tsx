import Image from 'next/image';
import style from '../styles/components/Navbar.module.scss';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';
import { useState } from 'react';

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState<boolean>(false);
  return (
    <>
      <header className={style.navbar}>
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { type: 'tween' },
          }}
          className={`${style.navbar_container} ${style.max_container}`}
        >
          <figure className={style.logo}>
            <Image
              src={'/image/tesla_logo.svg'}
              layout="fill"
              objectFit="contain"
              alt="tesla logo"
            />
          </figure>
          <ul className={style.models}>
            <li>Model S</li>
            <li>Model 3</li>
            <li>Model X</li>
            <li>Model Y</li>
            <li>Solar Roof</li>
            <li>Solar Panels</li>
          </ul>
          <ul className={style.menus}>
            <li>Shop</li>
            <li>Account</li>
            <li>Menu</li>
          </ul>
          <button
            className={style.menu_btn}
            onClick={() => setMenuClicked(true)}
          >
            Menu
          </button>
        </motion.nav>
      </header>
      <Sidebar menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
    </>
  );
};

export default Navbar;
