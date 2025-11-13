import { Outlet } from "react-router-dom"
import SideBar from "../SideBar/SideBar"
import TopNav from "../TopNav/TopNav"
import styles from "./UserSharedLayout.module.scss"

export default function UserSharedLayout(){
  
    return(
        <div className={styles.userSharedLayout}>
            <SideBar />
            <TopNav/>
            <main className={styles.mainContent}>
            <Outlet />
            </main>
            
        </div>
    )
}