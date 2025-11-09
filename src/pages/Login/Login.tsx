import styles from './Login.module.scss'
import CompanyLogo from "../../assets/images/Group.png"
import LoginImage from "../../assets/images/pablo-sign-in 1.png"
import LoginForm from './LoginForm'

export default function Login() {
  return (
    <div className={styles.container}>

<img src={CompanyLogo} alt="Company Logo" className={styles.loginImage} loading='lazy'/>

<div className={styles.loginBox}>
   <img src={LoginImage} alt="LoginImage" />
  <section>
    <div className={styles.loginHeader}>
<h1>Welcome!</h1>
     <p> Enter details to login.</p>
    </div>
     
     <LoginForm />
  </section>
</div>

    </div>
  )
}