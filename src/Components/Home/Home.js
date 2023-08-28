import React from "react";
import Header from './Header';
import Footer from './Footer';
import Notifications from './Notifications';
import Circulars from './Circulars';
import Carousel from "./Carousel";
import styles from '../../CSS/Home/home.module.css';
import QuickLinks from './QuickLinks'
import { useNavigate } from "react-router-dom";

function Home() {
    const nav = useNavigate();
    return (
        <div>
            <Header />
            <div className={styles.login_btn}>
                <button onClick={()=>nav("/Login")}>Login</button>
            </div>
            <Carousel />
            <div className={styles.objective}>
                <h3>Objective</h3>
                <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking
                    f letters, as opposed to using 'Content here, content here', making it look like readable English. Many desk
                    top publishing packages and web page editors now use Lorem Ipsum as their default model text, and a s
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking
                    f letters, as opposed to using 'Content here, content here', making it look like readable English. Many desk
                    top publishing packages and web page editors now use Lorem Ipsum as their default model text, and a s
                </p>
            </div>
            <div className={styles.circulars}>
            <Notifications />
            <Circulars />
            </div>
            <div className={styles.department}>
                <h3>Departments</h3>
                <ul>
                    <li>Computer science engg.</li>
                    <li>Information science engg.</li>
                    <li>Electrical & Electronics engg.</li>
                    <li>Electrical & Communication engg.</li>
                    <li>Civil engg.</li>
                    <li>Mechanical engg.</li>
                </ul>
            </div>
            <QuickLinks />
            <Footer />
        </div>
    )
}
export default Home