import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar} from 'react-chartjs-2';

import styles from './Chart.module.css'

const Chart = () => {
const [dailyData, setDailyData] =useState([]);

 useEffect(() => {
     const fetchAPI = async () => {
         setDailyData(await fetchDailyData())
     }

     fetchAPI();
 });

 const lineChart = (
     dailyData.length
?(<Line
data={{
labels: dailyData.map(({ date }) => date ),
datasets: [{
data: dailyData.map(({ confirmed }) => confirmed),
Label: 'infected',
bordercolor: '#3333ff',
fill: true,
}, {
    
data: dailyData.map(({ deaths }) => deaths),
Label: 'infected',
bordercolor: 'red',
backgroundColor: 'rgba(255, 0, 0, 0.5)',
fill: true,

}],
}} 
/>) : null
 )


    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}

export default Chart;