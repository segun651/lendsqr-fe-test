import styles from './Users.module.scss';
import CardImage1 from "../../assets/images/UsersPageImages/icon (1).png"
import CardImage2 from "../../assets/images/UsersPageImages/icon (2).png"
import CardImage3 from "../../assets/images/UsersPageImages/icon (3).png"
import CardImage4 from "../../assets/images/UsersPageImages/icon (4).png"
export default function Users(){

    return(
<div className={styles.usersPage}>
<h1>Users</h1>

<div className={styles.userGridCards}>

<div className={styles.userCard}>
<img src={CardImage1} alt="Card1" loading='lazy' />
<h5>Users</h5>
<p>2,453</p>
</div>
<div className={styles.userCard}>
<img src={CardImage2} alt="Card1" loading='lazy' />
<h5>Active Users</h5>
<p>2,453</p>
</div>
<div className={styles.userCard}>
<img src={CardImage3} alt="Card1" loading='lazy' />
<h5>Users With Loans</h5>
<p>12,453</p>
</div>
<div className={styles.userCard}>
<img src={CardImage4} alt="Card1" loading='lazy' />
<h5>Users With Savings</h5>
<p>102,453</p>
</div>
</div>
</div>
    )
}