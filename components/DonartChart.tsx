"use client"
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const DonartChart = ({accounts}:DonartChartProps) => {
    const data = {
      datasets:[
        {
          label: "Banks",
        data:[1250,2566,4000],
        backgroundColor:["#0747b6","#2265d8",,"#2f91fa"]
        }

      ],
      labels:["Banks 1" , "Banks 2", "Banks 3"]
    }
  return <Doughnut data={data} />;
    
  
}

export default DonartChart
