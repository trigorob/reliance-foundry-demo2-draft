import {UKGDPPredictedYears, UKGDPPredictedLevel} from './uk-data-json-handler.js'


export const UKPredictedData = {
  type: "bar",
  data: {
    labels: UKGDPPredictedYears,
    datasets: [
      {
        label: "UK GDP, in Billions USD",
        type: "line",        
        data: UKGDPPredictedLevel,

        backgroundColor: "rgba(235, 193,195,.5)",        
        borderColor: "#FF6666",
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
        text: 'UK Predicted GDP',
    }
  }
};

export default UKPredictedData;

