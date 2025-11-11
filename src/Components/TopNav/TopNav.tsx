import styles from "./TopNav.module.scss"
import CompanyLogo from "../../assets/images/Group.png"
import SearchIcon from "../../assets/images/Search.png"
import profileImage from "../../assets/images/profileImg.png"
import notificationIcon from "../../assets/images/notifIcon.png"
import dropdownIcon from "../../assets/images/dropdownicon.png"
export default function TopNav() {
  return (
    <nav>
      <section>
        <div className={styles.navLeft}>
<img src={CompanyLogo} alt="Company Logo" className={styles.logo} loading='lazy'/>
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