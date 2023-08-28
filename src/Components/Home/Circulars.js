import React from "react"
import styles from '../../CSS/Home/circulars.module.css'

function Circular(title,link){
    return(
        <div className={styles.circular}  {...(link !== null ?`onClick=${link}`:undefined)}>
            <p>{title}</p>
        </div>
    )
}

function Circulars(){
    return(
        <div className={styles.main}>
            <h3>Circulars</h3>
            <div className={styles.circulars}>
            {Circular('Circular regarding release of jun/july examination result')}
             {Circular('Circular regarding release of jun/july examination result')}
             {Circular('Circular regarding release of jun/july examination result')}
             {Circular('Circular regarding release of jun/july examination result')}
             {Circular('Circular regarding release of jun/july examination result')}
            </div>
        </div>
    )
}
export default Circulars