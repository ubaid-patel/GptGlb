import React from "react";
import styles from '../../CSS/Home/footer.module.css'

function Footer() {
    return (
        <div className={styles.main}>
            <div className={styles.sitemap}>
                <h3>Sitemap:</h3>
                    <h4>Home</h4>
                    <h4>About</h4>
                    <h4>Login</h4>
                    <h4>Signup</h4>
                    <h4>Admissions</h4>
            </div>
            <div className={styles.policies}>
            <h3>Policies:</h3>
                    <h4>Privacy policy</h4>
                    <h4>Copyright policy</h4>
                    <h4>Terms & Conditions</h4>
            </div>
            <div className={styles.disclaimer}>
            <h3>Disclaimer:</h3>
                <p>
                    is a long established fact that a
                    reader will be distracted by the
                    readable content of a page whe
                    n looking at its layout. The point
                    of using Lorem Ipsum is that it h
                    as a more-or-less normal distribu
                    tion of letters, as opposed to usin
                </p>
            </div>
        </div>
    )
}
export default Footer