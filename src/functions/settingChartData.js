import { convertDate } from "./convertDate";

export const settingChartData = (setChartData,prices)=>{


    setChartData({
        labels: prices.map((price)=> convertDate(price[0])),
        datasets: [{
  
          // data : Utils.numbers(NUMBER_CFG),
          
          data: prices.map((price)=> price[1]),
          borderColor: "#3a80e9",
          borderWidth:2,
  
          fill:true,
          tension:0.15,
          // backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red,0.5),
          backgroundColor: "rgba(58, 128, 233, 0.1)",
        pointRadius:0,
          // yAxisID:'y',
  
  
        },],
      });
}