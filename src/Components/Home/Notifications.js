import React from "react"
import styles from '../../CSS/Home/notifications.module.css'

function Notification(title,link){
    return(
        <div className={styles.notification}  {...(link !== null ?`onClick=${link}`:undefined)}>
            <p>{title}</p>
        </div>
    )
}

function Notifications(){
    return(
        <div className={styles.main}>
            <h3>Notifications</h3>
            <div className={styles.notifications}>
            {Notification('Notification regarding release of jun/july examination result')}
             {Notification('Notification regarding release of jun/july examination result')}
             {Notification('Notification regarding release of jun/july examination result')}
             {Notification('Notification regarding release of jun/july examination result')}
             {Notification('Notification regarding release of jun/july examination result')}
            </div>
        </div>
    )
}
export default Notifications