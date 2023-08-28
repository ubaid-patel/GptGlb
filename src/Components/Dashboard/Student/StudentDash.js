import React from 'react'
import styles from '../../../CSS/Dashboard/Student/dashboard.module.css'
import menuImg from '../../../Images/widgets.svg'
import attendanceImg from '../../../Images/free_cancellation.svg'
import resultsImg from '../../../Images/insert_chart.svg'
import iaImg from '../../../Images/contract_edit.svg'
import syllabusImg from '../../../Images/ballot.svg'
import settingsImg from '../../../Images/settings.svg'
import logoutImg from '../../../Images/logout.svg'
import accountImg from '../../../Images/account_circle.svg'
import notificationImg from '../../../Images/notifications.svg'
import Menu from '../Menu'
import DashHeader from '../Header'
import StackedBarChart from '../StackedBarChart'
import PIEChart from '../PIEChart'
import { useNavigate } from 'react-router-dom'
function StudentDash() {
    const nav = useNavigate();
    const menuOptions = [
        { icon: attendanceImg, title: "Attendance",onClick:()=>{}},
        { icon: resultsImg, title: "Results",onClick:()=>{} },
        { icon: iaImg, title: "I.A marks",onClick:()=>{} },
        { icon: syllabusImg, title: "Syllabus" ,onClick:()=>{}},
        { icon: settingsImg, title: "Settings",onClick:()=>{} },
        { icon: logoutImg, title: "Logout" ,onClick:()=>{nav("/")}},
    ]
    const attendanceData = {present:60,absent:40,holidays:30};
    return (
        <React.Fragment>
            <div className={styles.main}>
                <div className={styles.menu}>
                    <Menu options={menuOptions} />
                </div>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <h3>Attendance</h3>
                        <DashHeader />
                    </div>
                    <div className={styles.charts}>
                      
                            <PIEChart chartData={attendanceData}/>
                        <StackedBarChart />
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}
export default StudentDash