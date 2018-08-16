"use strict";
var speedCanvas = document.getElementById("speedChart");
Chart.defaults.global.defaultFontFamily = "Open Sans";
Chart.defaults.global.defaultFontSize = 8;
var dataFirst = {
        label: "Errors",
        data: [0, 0, 0, 0, 33],
        fill: !2,
        borderColor: "#D65250",
        backgroundColor: "#D65250",
        pointBackgroundColor: "#D65250",
        pointRadius: 2,
        pointHoverRadius: 4,
        pointHitRadius: 2,
        pointBorderWidth: 1.5
    },
    dataSecond = {
        label: "Data Records",
        data: [0, 0, 0, 280, 210],
        fill: !5,
        borderColor: "#69A17A",
        backgroundColor: "#69A17A",
        pointBackgroundColor: "#69A17A",
        pointRadius: 2,
        pointHoverRadius: 4,
        pointHitRadius: 2,
        pointBorderWidth: 3
    },
    speedData = {
        labels: ["23 Jun", "24 Jun", "25 Jun", "26 Jun", "27 Jun"],
        datasets: [dataSecond, dataFirst]
    },
    chartOptions = {
        legend: {
            display: true,
            position: 'bottom',

            labels: {
                boxWidth: 3,
                fontColor: 'black'
            }
        },
        title: {
            position: 'top',
            display: true,
            text: 'Daily Execution Statistics'
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 400,
                    stepSize: 200
                },
            }]
        }
    },
    lineChart = new Chart(speedCanvas, {
        type: "line",
        data: speedData,
        options: chartOptions
    });