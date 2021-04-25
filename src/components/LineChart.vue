<template>
  <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
    <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-800">
      <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full max-w-full flex-grow flex-1">
            <h6 class="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
              Historical
            </h6>
            <h2 class="text-white text-xl font-semibold">
              Gross Domestic Product
            </h2>
          </div>
        </div>
      </div>
      <div class="p-4 flex-auto">
        <!-- Chart -->
        <div class="relative" style="height:350px">
          <canvas id="line-chart"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Chart from "chart.js";

import {USAGDPLevel} from '../usa-data-json-handler.js'
import {UKGDPYears, UKGDPLevel} from '../uk-data-json-handler.js'




export default {
  mounted: function() {
    this.$nextTick(function() {
      var config = {
        type: "line",
        data: {
          labels: UKGDPYears,
          datasets: [
            {
              label: "USA GDP, in Billions USD",
              backgroundColor: "rgba(204, 230, 255,.5)",
              borderColor: "#3399ff",
              data: USAGDPLevel,
              fill: false
            },
            {
              label: "UK GDP, in Billions USD",
              fill: false,
              backgroundColor: "rgba(171, 93,92,.5)",
              borderColor: "#b71734",
              data: UKGDPLevel
            }
          ]
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          title: {
            display: false,
            text: "Predicted GDP Charts",
            fontColor: "white",
          },
          legend: {
            labels: {
              fontColor: "white"
            },
            align: "end",
            position: "bottom"
          },
          tooltips: {
            mode: "index",
            intersect: false
          },
          hover: {
            mode: "nearest",
            intersect: true
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  fontColor: "rgba(255,255,255,.7)"
                },
                display: true,
                scaleLabel: {
                  display: false,
                  labelString: "Month",
                  fontColor: "white"
                },
                gridLines: {
                  display: false,
                  borderDash: [2],
                  borderDashOffset: [2],
                  color: "rgba(33, 37, 41, 0.3)",
                  zeroLineColor: "rgba(0, 0, 0, 0)",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2]
                }
              }
            ],
            yAxes: [
              {
                ticks: {
                  fontColor: "rgba(255,255,255,.7)"
                },
                display: true,
                scaleLabel: {
                  display: false,
                  labelString: "Value",
                  fontColor: "white"
                },
                gridLines: {
                  borderDash: [3],
                  borderDashOffset: [3],
                  drawBorder: false,
                  color: "rgba(255, 255, 255, 0.15)",
                  zeroLineColor: "rgba(33, 37, 41, 0)",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2]
                }
              }
            ]
          }
        }
      };
      var ctx = document.getElementById("line-chart").getContext("2d");
      window.myLine = new Chart(ctx, config);
    });
  }
};

</script>
