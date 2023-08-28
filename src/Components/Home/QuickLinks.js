import { redirect, useNavigate } from 'react-router-dom';
import styles from '../../CSS/Home/quicklinks.module.css';
import img1 from '../../Images/LMS_logo_kannada.jpg'
import img2 from '../../Images/nsplogo.jpg'
import img3 from '../../Images/karnataka - Copy.png'
import img4 from '../../Images/polytenchnic.png'
import React from 'react';

function QuickLink(image, link, title) {
    const nav = useNavigate();
    return (
        <div className={styles.link} onClick={() => { window.location.href = link }}>
            <img src={image} />
            <h4>{title}</h4>
        </div>
    )
}

function QuickLinks() {
    const links = [
        { image: img1, title: 'Karnataka LMS', url: 'https://karnatakalms.com' },
        { image: img2, title: 'National Scholarship potral', url: 'https://karnatakalms.com' },
        { image: img3, title: 'State Scholarsip potral', url: 'https://karnatakalms.com' },
        { image: img3, title: 'Directorate of technical education', url: 'https://karnatakalms.com' }
    ]
    return (
        <React.Fragment>
            <div className={styles.main}>
            <h3>QuickLinks</h3>
            <div className={styles.flex}>
                {links.map((link) => QuickLink(link.image, link.url, link.title))}
        </div>
            </div>
        </React.Fragment>
    )
}
export default QuickLinks;