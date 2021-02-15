import React from "react";
import { Bar } from "react-chartjs-2";
const data = {
  labels: ["Don", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
  datasets: [
    {
      label: "Current",
      backgroundColor: "#1665D8",
      borderColor: "#1665D8",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [150, 690, 900, 1010, 700, 900, 1000],
    },
    {
      label: "Previous",
      backgroundColor: "#EDF0F2",
      borderColor: "#EDF0F2",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [10, 200, 500, 600, 700, 900, 1000],
    },
  ],
};
const AdminChart = () => {
  return (
    <div>
      <Bar
        data={data}
        width={1}
        height={400}
        options={{
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                barThickness: 14, // number (pixels) or 'flex'
                maxBarThickness: 14, // number (pixels)
              },
            ],
            yAxes: [
              {
                ticks: {
                  suggestedMin: 50,
                  suggestedMax: 100,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default AdminChart;
