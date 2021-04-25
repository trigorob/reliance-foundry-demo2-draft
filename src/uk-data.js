import {UKGDPYears, UKGDPLevel} from './uk-data-json-handler.js'


export const UKChartData = {
  type: "bar",
  data: {    
    labels: UKGDPYears,
    datasets: [
      {
        label: "UK GDP, in Billions USD",
        type: "line",
        data: UKGDPLevel,
        backgroundColor: "rgba(171, 83,32,.5)",
        borderColor: "#b71734",
        borderWidth: 3
      }
    ]
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            padding: 25
          }
        }
      ]
    },
    title: {
        display: true,
        text: 'UK Historical GDP',
    }      
  }
};

export default UKChartData;
