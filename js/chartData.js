let day = [
  "Sep30",
  "Sep29",
  "Sep28",
  "Sep27",
  "Sep26",
  "Sep25",
  "Sep24",
  "Sep23",
  "Sep22",
  "Sep21",
  "Sep20",
  "Sep19",
  "Sep19",
  "Sep18",
  "Sep17",
  "Sep16",
  "Sep15",
  "Sep14",
  "Sep13",
  "Sep12",
  "Sep11",
  "Sep10",
  "Sep9",
  "Sep8",
  "Sep7",
  "Sep6",
  "Sep5",
  "Sep4",
  "Sep3",
  "Sep2",
  "Sep1",
];
let view = [
  2, 6, 4, 10, 18, 12, 9, 10, 20, 15, 10, 6, 3, 1, 2, 6, 4, 10, 18, 12, 9, 10,
  20, 15, 10, 6, 3, 1, 6, 10, 10,
];
let hours = [
  20, 15, 10, 6, 6, 3, 1, 6, 3, 1, 2, 6, 4, 2, 12, 9, 10, 10, 6, 4, 10, 18, 18,
  12, 9, 10, 20, 15, 10, 10, 10,
];

let ctx = document.getElementById("line").getContext("2d");
let line = new Chart(ctx, {
  type: "line",
  data: {
    labels: day,
    datasets: [
      {
        label: "Viewer",
        data: view,
        backgroundColor: "#fd0054",
        borderColor: ["#000000"],
        borderWidth: 1,
        tension: 0,
      },
      {
        label: "Stream Hour",
        data: hours,
        backgroundColor: "#2b2024",
        borderColor: ["#15cda8"],
        borderWidth: 1,
        tension: 0,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

let ctxs = document.getElementById("pie").getContext("2d");
let pie = new Chart(ctxs, {
  type: "pie",
  data: {
    labels: ["Yangon", "Mandalay", "NayPyiTaw", "Pago", "Taungyi", "Myate"],
    datasets: [
      {
        label: "Order's Places",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
