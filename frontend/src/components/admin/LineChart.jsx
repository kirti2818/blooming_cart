import React from 'react'
import {Box} from "@chakra-ui/react"
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const PieChart = ({chartData}) => {
  return (<Line data={chartData} />)
}

export default PieChart