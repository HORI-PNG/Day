"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

export default function ConcentrationChart() {
  const mockData = {
    labels: ["Mon, Tue, Wed, Thu, Fri, Sat, Sun"],
    datasets: [
      {
        label: "集中力スコア",
        data: [3.2, 1.2, 5.5, 1.8, 4.5, 5.8, 2.0], // ダミー数値
        borderColor: "rgb(59, 139,246)", // Tailwindの blue-500
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        fill: true,
        tension: 0.4, // 曲線を滑らかにする
        pointBackgroundColor: "rgb(59, 130, 246)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRation: false,
    plugins: {
      legend: {
        display: false, // 凡例は非表示
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 6,
        ticks: {
          stepSize: 2,
        },
      },
    },
  };

  return (
    // 親要素の高さ・幅に合わせてグラフを描画
    <div className="w-full h-48">
      <Line data={mockData} options={options} />
    </div>
  );
}
