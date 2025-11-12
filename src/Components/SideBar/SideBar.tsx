import styles from "./SideBar.module.scss"
import { openSidebarContext } from "../../App"
import { useContext } from "react"
export default function SideBar(){
   const context = useContext(openSidebarContext);

  if (!context) {
    throw new Error("OpenSidebarContext must be used within a provider");
  }

  const { isOpen} = context;

    return(
        <aside className={`${isOpen && styles.open}`}>

            <p>This is a sidebar</p>
            <p>788899</p>
        </aside>
    )
}