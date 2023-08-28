import styles from '../../CSS/Home/login.module.css'
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function animateInputTitle(event) {
    const elem = event.target.parentElement.getElementsByTagName('span')[0];
    const input = event.target;
    if (event.type === 'focus') {
        elem.classList.add(styles.moveup);
    } else {
       if(input.value.trim() === ''){
        elem.classList.remove(styles.moveup);
       }
    }
}


function Login() {
    const nav = useNavigate();
    function loginUser(event){
        event.preventDefault();
         nav("/Dashboard")
    }
    return (
        <React.Fragment>
            <Header />
            <div className={styles.main}>
                <div className={styles.glassmorph}>
                    <form className={styles.form} onSubmit={loginUser}>
                        <div className={styles.input}>
                            <span>Email</span>
                            <input type="aaemailas" onFocus={animateInputTitle} onBlur={animateInputTitle} />
                        </div>
                        <div className={styles.input}>
                            <span>Password</span>
                            <input type="Passwordaa" onFocus={animateInputTitle} onBlur={animateInputTitle} />
                            <p className={styles.forgot} onClick={()=>nav("/Forgot")}>Forgot?</p>
                        </div>
                        <button type="submit">Login</button>
                        <p className={styles.link} onClick={()=>nav("/Signup")}>Don't have account?</p>
                    </form >
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
export default Login;