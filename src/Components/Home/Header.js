import React from "react";
import styles from "../../CSS/Home/header.module.css"
import polytechimg from '../../Images/polytenchnic.png'
import karnatakalogo from '../../Images/karnataka.png'
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
function Header() {
    const nav = useNavigate();
    //check device
    const isMobile = useMediaQuery({ query: '(max-width:600px)' });
    return (
        <React.Fragment>
            {
                isMobile ?
                    <div className={styles.mobile}>
                        <div className={styles.heading} onClick={() => nav("/")}>
                            <h1>Government Polytechnic , Kalaburgi</h1>
                            <p>Department of Collegiate and Technical Education</p>
                        </div>
                        <div className={styles.logo}>
                            <div className={styles.polytechimg}>
                                <img src={polytechimg} />
                            </div>
                            <div className={styles.kar_logo}>
                                <img src={karnatakalogo} />
                            </div>
                        </div>
                    </div> :
                    <div className={styles.main}>
                        <div className={styles.polytechimg}>
                            <img src={polytechimg} />
                        </div>
                        <div className={styles.heading} onClick={() => nav("/")}>
                            <h1>Government Polytechnic , Kalaburgi</h1>
                            <p>Department of Collegiate and Technical Education</p>
                        </div>
                        <div className={styles.kar_logo}>
                            <img src={karnatakalogo} />
                        </div>
                    </div>

            }
        </React.Fragment>
    )
}
export default Header