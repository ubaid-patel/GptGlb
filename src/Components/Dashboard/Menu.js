import React from 'react'
import styles from '../../CSS/Dashboard/menu.module.css'
import menuImg from '../../Images/widgets.svg'
function Menu({options}) {
 
    return (
        <div className={styles.main}>
            <div className={styles.menu}>
            <div className={styles.optionHead}>
                <img src={menuImg}></img>
                <span>Menu</span>
            </div>
            <hr></hr>
            {options.map((option) => {
                return (
                    <div className={styles.option} onClick={option.onClick}>
                        <img src={option.icon}></img>
                        <span>{option.title}</span>
                    </div>
                )
            })}
        </div>
        </div>
    )
}
export default Menu;