import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const ChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      series: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56],
        },
      ],
      chart: {
        type: "bar",
        height: 280,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 3,
        colors: ["transparent"],
      },
      xaxis: {
        // title: {
        //   text: "Latency",
        //   style: {
        //     fontSize: "25px",
        //   },
        // },
        categories: ["AWS", "GCP", "Azure", "Naver"],
      },

      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + "ms";
          },
        },
      },
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="chart" ref={chartRef}></div>;
};

export default ChartComponent;
