import style from '../styles/components/Sidebar.module.scss';
import { GrClose } from 'react-icons/gr';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { MdOutlineLanguage } from 'react-icons/md';

interface Props {
  menuClicked: boolean;
  setMenuClicked: any;
}

const Sidebar = ({ menuClicked, setMenuClicked }: Props) => {
  return (
    <div
      className={
        menuClicked
          ? `${style.sidebar_container} ${style.clicked}`
          : style.sidebar_container
      }
    >
      <div
        className={style.placeholder}
        onClick={() => setMenuClicked(false)}
      ></div>
      <aside
        className={
          menuClicked
            ? `${style.sidebar} ${style.sidebar_clicked}`
            : style.sidebar
        }
      >
        <div className={style.close_div}>
          <button
            onClick={() => setMenuClicked(false)}
            className={style.close_btn}
          >
            <GrClose />
          </button>
        </div>
        <ul className={style.sidebar_links}>
          <li>Model S</li>
          <li>Model 3</li>
          <li>Model X</li>
          <li>Model Y</li>
          <li>Solar Roof</li>
          <li>Solar Panels</li>
          <li>Existing Inventory</li>
          <li>Used Inventory</li>
          <li>Trade-In</li>
          <li>Test Drive</li>
          <li>Powerwall</li>
          <li>Commercial Energy</li>
          <li>Utilities</li>
          <li>Charging</li>
          <li>Find Us</li>
          <li>Support</li>
          <li>Investor Relations</li>
          <li>Shop</li>
          <li>Account</li>
          <li>
            More <HiOutlineChevronRight className={style.chevron} />
          </li>
        </ul>
        <div className={style.language_container}>
          <MdOutlineLanguage className={style.globe_icon} />
          <div>
            <p className={style.country}>United States</p>
            <p className={style.language}>English</p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
