import styles from "./SideBar.module.scss"
import { openSidebarContext } from "../../App"
import { useContext } from "react"
import { Link } from "react-router-dom"
import CompanyLogo from "../../assets/images/Group.png"
import BriefCase from "../../assets/images/Sidebar-Images/briefcase 1.png"
import ChevronDown from "../../assets/images/Sidebar-Images/np_next_2236826_000000 2.png"
import HomeImage from "../../assets/images/Sidebar-Images/home 1.png"
import { CustomersArray, BusinessesArray, SettingsArray } from "./SideBarData"




export default function SideBar(){
   const context = useContext(openSidebarContext);

  if (!context) {
    throw new Error("OpenSidebarContext must be used within a provider");
  }


  const { isOpen} = context;

  
    return(
        <aside className={`${isOpen && styles.open}`}>
 < section className={styles.sideBarSection}>
     <div className={styles.sideBarLogo}>
        <img src={CompanyLogo} alt="Company Logo" loading="lazy" />
     </div>

     <div className={styles.sideBarHeader}>
     <Link to="/" className={styles.activeNav} >
      <img src={BriefCase} alt="BriefCase" loading="lazy" />
       <p> Switch Organization</p>
        <img src={ChevronDown} alt="arrow-down" loading="lazy" />
      </Link>

       <Link to="/" className={styles.activeNav} >
      <img src={HomeImage} alt="HomeImage" loading="lazy" />
       <p>Dashboard</p>
       
      </Link>
     </div>


 <div  className={styles.sideBarMain}>
 <p>Customers</p>
 <div className={styles.sideBarMainLinks}>
    {
        CustomersArray.map((customer) =>{
            return(
                <Link to={customer.link} className={`${styles.activeMainNav} ${customer.text === "Users" ? styles.active : ""}`} id={customer.text}>
      <img src={customer.img} alt={customer.text} loading="lazy" />
       <p>{customer.text}</p>
       
      </Link>
 
            )
        })
    }
 </div>


 </div>

 <div className={styles.sideBarMain}>
    <p>Business</p>

   <div className={styles.sideBarMainLinks}>
    {
        BusinessesArray.map((business) =>{
            return(
                <Link to={business.link} className={styles.activeMainNav} id={business.text}>
      <img src={business.img} alt={business.text} loading="lazy" />
       <p>{business.text}</p>
       
      </Link>
 
            )
        })
    }
 </div>
 </div>


 <div className={styles.sideBarMain}>
    <p>Settings</p>

   <div className={styles.sideBarMainLinks}>
    {
        SettingsArray.map((settings) =>{
            return(
                <Link to={settings.link} className={styles.activeMainNav} id={settings.text} >
      <img src={settings.img} alt={settings.text} loading="lazy" />
       <p>{settings.text}</p>
       
      </Link>
 
            )
        })
    }
 </div>
 </div>
 </section>
        </aside>
    )
}