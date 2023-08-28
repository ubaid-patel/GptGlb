import { Pie, PieChart, RadialBar, RadialBarChart } from "recharts";
import styles from '../../CSS/Dashboard/piechart.module.css'
import { useEffect, useRef } from "react";

function PIEChart({ chartData = {present:60,holidays:10} , className='main'}) {
    const canvasRef = useRef(null);
    const drawChart = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        const endAngle = (chartData.present * 3.6) * (Math.PI / 180);

        // Set the font for the text
        context.font = "600 xx-large Rajdhani";

        // Set text alignment to center horizontally and vertically
        context.textAlign = "center";
        context.textBaseline = "middle";

        const drawCircle = (color, start, end) => {
            // Draw the circle
            context.beginPath();
            context.lineWidth = 20;
            context.arc(canvas.width / 2, canvas.height / 2, 86, start, end);
            context.strokeStyle = color
            context.stroke()
        }
        drawCircle("#FFA836", 0, 7);
        drawCircle("#45B1FF", 0, endAngle)
        drawCircle("#8588FF", endAngle, (chartData[1] * 3.6) * (Math.PI / 180) + endAngle);

        // Draw the text at the calculated coordinates
        context.fillText(chartData.present + "%", canvas.width / 2, canvas.height / 2);
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        drawChart();
        return () => {
            context.clearRect(0, 0, canvas.width, canvas.height)
        }

    })
    return (
        <div className={`${styles.main}`}>
            <div className={styles.chartHead}>
                <h3>Attendance</h3>
                <select>{[1, 2, 3, 4, 5, 6].map((value) => <option>{"SEM " + value}</option>)}</select>
            </div>
            <canvas ref={canvasRef} width="220" height="220"></canvas>
            <div className={styles.chartFooter}>
                <h3>present: {chartData.present}%</h3>
                <h3>absent: {100 - chartData.present}%</h3>
            </div>
        </div>
    )
}
export default PIEChart