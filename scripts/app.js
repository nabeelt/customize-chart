//var chartData = [{
//    "title": "Old",
//    "value": 200
//}, {
//    "title": "new",
//    "value": 500
//}];
//
//
//
//var chart = new AmCharts.AmPieChart();
//console.log("thisd is theh chart");
//console.log(chart);
//function renderChart(ch) {
//    ch = new AmCharts.AmPieChart();
//    ch.dataProvider = chartData;
//    ch.titleField = "title";
//    ch.valueField = "value";
//    ch.theme = "light";
//    ch.addClassNames = true;
//    ch.startX = 200;
//    ch.radius = "40%";
//    ch.startDuration = 1;
//    ch.innerRadius = "60%";
//    ch.rotate = true;
//    var legend = new AmCharts.AmLegend();
//    ch.addLegend(legend);
//    ch.write('chartdiv');
//    console.log("thisd is theh chart");
//    console.log(chart);
//    var mYgraphs = document.getElementsByClassName("amcharts-main-div");
//   
//}
//
//
//var addBtn = document.getElementById("addBtn");
//var plusBtn = document.getElementById("plusChart");
//var minusBtn = document.getElementById("minusChart");
//
//
//function makeObj(t, v) {
//    return {
//        "title": t,
//        "value": v
//    };
//}
//
//function addToArray(array, newObj) {
//    if (array.push(newObj)) {
//        alert("Added to Array");
//        console.log(chartData);
//        renderChart(chart);
//    } else {
//        alert("Adding failed");
//    }
//}
//
//
//
//AmCharts.ready(function () {
//    renderChart(chart);
//});
//
//
//addBtn.onclick = function () {
//    var newValue = document.getElementById("numberInput").value,
//        newTitle = document.getElementById("titleInput").value;
//    addToArray(chartData, makeObj(newTitle, newValue));
//};
//
//plusBtn.onclick = function () {
//    var ch = Object.create(chart);
//    console.log(ch);
//};
//
//
//
//
////
////function ChartFactory(type) {
////    if(type==="chart"){
////        
////    }
////    if(type ==="pie") {
////    }
////}
//
//
////AmCharts.makeChart("chartdiv", {
////   type: "serial",
////   dataProvider: [{
////	   "year": 2005,
////	   "income": 23.5
////   }, {
////	   "year": 2006,
////	   "income": 26.2
////   }, {
////	   "year": 2007,
////	   "income": 30.1
////   }],
////   categoryField: "year",
////   rotate: true,
////
////   categoryAxis: {
////	   gridPosition: "start",
////	   axisColor: "#DADADA"
////   },
////   valueAxes: [{
////	   axisAlpha: 0.2
////   }],
////   graphs: [{
////	   type: "column",
////	   title: "Income",
////	   valueField: "income",
////	   lineAlpha: 0,
////	   fillColors: "#ADD981",
////	   fillAlphas: 0.8,
////	   balloonText: "[[title]] in [[category]]:<b>[[value]]</b>"
////   }]
////});