import React from 'react'
import styles from '../../CSS/Dashboard/chart.module.css'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Rectangle, CartesianGrid } from "recharts";

function StackedBarChart() {
    const chartData = [
        { month: "Jan", present: 20, absent: 7, holidays: 4 },
        { month: "Feb", present: 18, absent: 6, holidays: 7 },
        { month: "Mar", present: 19, absent: 5, holidays: 7 },
        { month: "Apr", present: 16, absent: 8, holidays: 7 },
        { month: "May", present: 17, absent: 6, holidays: 8 },
        { month: "Jun", present: 15, absent: 9, holidays: 7 },
        { month: "Jul", present: 14, absent: 8, holidays: 9 },
        { month: "Aug", present: 16, absent: 5, holidays: 10 },
        { month: "Sep", present: 14, absent: 7, holidays: 10 },
        { month: "Oct", present: 13, absent: 9, holidays: 9 },
        { month: "Nov", present: 15, absent: 6, holidays: 10 },
        { month: "Dec", present: 12, absent: 8, holidays: 11 }
    ];
    const chartMargins = {
        top: 30,
        right: 20,
        left: -30,
        bottom: 5,
    }
    return (
                <div className={styles.main}>
                    <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} margin={chartMargins} barCategoryGap={-100} barSize={20}>
                    <Legend layout='horizontal' verticalAlign='top' align='center' wrapperStyle={{top:"10px"}}/>
                        <XAxis dataKey="month" />
                        <CartesianGrid fill='#D9D9D9' horizontal={false} vertical={false} />
                        <YAxis type="number" domain={[0, 31]} tickCount={8}  />
                        <Tooltip /> 
                        <Bar dataKey="present"  stackId="a" fill="#45B1FF" radius={[10,10,10,10]}  />
                        <Bar dataKey="absent"   stackId="a" fill="#FFA836" radius={[10,10,10,10]}/>
                        <Bar dataKey="holidays"  stackId="a" fill="#8588FF" radius={[10,10,10,10]}/>
                    </BarChart>
                </ResponsiveContainer>
                </div>
    )
}
export default StackedBarChart