const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
var xValues = [ "January","February","March","April","May","June",
"July","August","September","October","November","December"];
var yValues = [145,124,175,254,271,301,241,199,230,200,145,101];

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none'
}
)
const ctx = document.getElementById('myChart')
const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{
        label: "Missing / Time",
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: yValues,
       borderWidth:10,
       lineWidth:3,
       responsive:true,
      }]
    },
    options:{
        scales: {
            yAxes: [{ ticks:{
                beginAtZero: true}
            }]
        ,
        xAxes:[{ ticks:{
            beginAtZero: true}
        }]
    }}
  });

  new Chart("myChart-2", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{
        label: "Missing / Time",
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: yValues
      }]
    },
    options: {
        responsive:true,
      legend: {display: false},
      scales: {
        yAxes: [{ticks: {min: 6, max:500},
            grid:{
                responsive:true,
      lineWidth:0.5,
    }}],
        
      }
    }
  });