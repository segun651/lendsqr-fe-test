import styles from "./TopNav.module.scss"
import CompanyLogo from "../../assets/images/Group.png"
import SearchIcon from "../../assets/images/Search.png"
import profileImage from "../../assets/images/profileImg.png"
import notificationIcon from "../../assets/images/notifIcon.png"
import dropdownIcon from "../../assets/images/dropdownicon.png"
import { useContext } from "react"
import { openSidebarContext } from "../../App"
export default function TopNav() {
  const context = useContext(openSidebarContext);

  if (!context) {
    throw new Error("OpenSidebarContext must be used within a provider");
  }
  const {isOpen,setIsOpen } = context;
  return (
    <nav>
      <section>
        <div className={styles.navLeft}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" onClick={() => setIsOpen(!isOpen)} >
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
<div className={styles.navSearch}>
 <input type="text" placeholder="Search for anything" />
  <button>
    <img src={SearchIcon} alt="Search" loading="lazy" />
  </button>
</div>
 
        </div>

  <div className={styles.navRight}>
    <a>Docs</a>
    <div className={styles.navProfile}>
     <img src={notificationIcon} alt="Notifications" loading="lazy" />
      <div className={styles.navUser}>
      <img src={profileImage} className={styles.navUserImg} alt="Profile" loading="lazy" />
     <p>Adedeji</p>
      <img src={dropdownIcon} alt="Dropdown" loading="lazy" />
      </div>
    </div>
  </div>

      </section>
    </nav>
  )
}