import accountImg from '../../Images/account_circle.svg'
import notifyImg from '../../Images/notifications.svg'
import styles from '../../CSS/Dashboard/header.module.css'
function DashHeader(){
    return(
        <div className={styles.main}>  <div className={styles.notifi}>
                <img src={notifyImg}/>
            </div>
            <div className={styles.name}>
                Ubaid Patel
            </div>
          <div className={styles.account}>
                <img src={accountImg}/>
            </div>
        </div>
    )
}
export default DashHeader
