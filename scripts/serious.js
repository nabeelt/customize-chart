var colorPallete = [
    "#606163",
    "#9AC460",
    "#606163",
    "#C7BC81",
    "#606163",
    "#B88171"
    ];

var stroke ="#bbbbbb";

var avgStats = [{
    "region": "A",
    "noofShops": 120,    
}, {
    "region": "B",
    "noofShops": 150
}, {
    "region": "C",
    "noofShops": 140
}, {
    "region": "D",
    "noofShops": 170
}, {
    "region": "E",
    "noofShops": 110
}, {
    "region": "F",
    "noofShops": 130
}];

for(var i = 0; i<avgStats.length-1; i++) {
    avgStats[i].colors = colorPallete[i];
}
$(function(){
  var chart = AmCharts.makeChart("takaChart1", {
    type: "serial",
    dataProvider: avgStats,
    categoryField: "region",
    categoryAxis: {
     gridPosition: "start",
     axisColor: "#DADADA",
     dashLength : 2,
     gridColor : "#000",
   },
   valueAxes: [{
       axisAlpha: 1,
       gridColor : "#000",
       dashLength : 2
   }],
   graphs: [{
     type: "column",
     title: "noofShops",
     valueField: "noofShops",
     lineAlpha: 0,
     fillColorsField: "colors",
     fillAlphas: 1,
     balloonText: "[[category]]:<b>[[value]]</b>"
   }, {
       id: "g1",
       title: "noofShops",
       valueField: "noofShops",
       bullet: "round",
       bulletBorderAlpha: 1,
       bulletSize: 5,
       lineThickness: 3,
       lineColor: "#bbbbbb",
       bulletSize : 10,
       dashLength : 10,
       bulletColor : '#fff',      
   }]
});

chart.validateData();
});


$(function(){
  var chart = AmCharts.makeChart("piechart", {
    type: "pie",
    dataProvider: [{
     "bussiness" : "Retail",
      "Value" : 60
    },{
      "bussiness" : "Textile",
      "Value" : 20
    },
    {
      "bussiness" : "IT",
      "Value" : 10
    },
    {
      "bussiness" : "others",
      "Value" : 10
    }],
    bussiness: "bussiness",
    valueField: "Value",
    labelRadius: 5,
    radius: "42%",
    innerRadius: "70%",
    labelText: "[[title]]",
    colors : colorPallete,
    outlineThickness :3,
    outlineAlpha : 1,
    outlineColor : "#ffffff",
    balloonText : "[[bussiness]]  [[value]]%",
    legend : {
      enabled : true
    },
    balloon : {
      fillColor : "rgb(96, 97, 99)",
      fillAlpha : 1,
      borderAlpha : 0,
      color : "white",
      shadowAlpha : 0,
      verticalPadding : 9,
      horizontalPadding : 10,
      fontSize : 16,
      offsetX : 1,
      cornerRadius :5,
      pointerWidth : 9
    }
  });
});
  $(function(){
    var chart = AmCharts.makeChart("linechart", {
    type: "serial",
    theme : "light",
    dataProvider: avgStats,
    categoryField: "region",
    categoryAxis: {
     gridPosition: "start",
     axisColor: "#DADADA"
   },
   valueAxes: [{
       axisAlpha: 0.2
   }],
   graphs: [{
       id: "g1",
       title: "noofShops",
       valueField: "noofShops",
       bullet: "triangleUp",
       bulletBorderAlpha: 1,
       bulletSize: 5,
       lineThickness: 3,
       lineColor: "#bbbbbb",
       bulletSize : 15,
       dashLength : 10,
       colorField : "colors"      
   }]
});
})

//   $(function(){
//     var chart = AmCharts.makeChart("chart-inside", {
//     type: "pie",
//     dataProvider: [{
//       "color" : "#9b9b9b",
//       "totalValue" : "12,548" ,
//       "value" : 100
//     }],
//     "startDuration": 0,
//     "pullOutRadius": 0,
//     "color": "#9AC460",
//     "fontSize": 18,
//     "titleField": "totalValue",
//     "valueField": "value",
//     "colorField": "color",
//     "labelRadius": -60,
//     "labelColor": "#fff",
//     "radius": 60,
//     "innerRadius": 0,
//     "labelText": "[[totalValue]]",
//     "balloonText": ""
// });
// });
  $(function(){
    var populationData = [{
      title : "Male",
      value : 2000
    },{
      title : "female",
      value : 8000
    }],
    total_value = populationData[0].value + populationData[1].value;
  AmCharts.makeChart("piechart-population", {
    "type": "pie",
    "theme": "none",
    "dataProvider": populationData,
    "titleField": "title",
    "valueField": "value",
    "outlineAlpha":1,
    "outlineThickness" : 5,
    // "labelRadius": -130,
    "allLabels": [{
        "text": total_value,
        "align": "center",
        "bold": true,
        "y": 140,
        "size" : 20
    }],
    "radius": "42%",
    "innerRadius": "60%",
    "labelText": "",
    "colors" : ["#606163","#9AC460"]
});
});
$(function(){

  var data = [{
        "title": "Riyadh",
        "value": 12,
        "color": "#9AC460"
    }, {
        "title": "Others",
        "value": 88,
        "color": "#606163"
    }],
    value = data[0].value;
  AmCharts.makeChart("inner-chart", {
    "type": "pie",
    "dataProvider": [{
        "title" : value,
        "value": 100,
      "color": "#9AC460"
    }],
    "startDuration" : 0,
    "pullOutRadius": 0,
    "color": "#fff",
    "fontSize": 14,
    "titleField": "title",
    "valueField": "value",
    "colorField": "color",
    "labelRadius": -100,
    "labelColor": "#fff",
    "radius": '30%',
    "innerRadius": 0,
    "balloonText": "",
    "labelText": "[[title]]%",
    "fontSize" : 30
});

AmCharts.makeChart("outer-chart", {
    "type": "pie",
    "dataProvider": data,
    "pullOutRadius": 0,
    "color": "#fff",
    "fontSize": 9,
    "titleField": "title",
    "valueField": "value",
    "colorField": "color",
    "radius": '42%',
    "innerRadius": '70%',
    "outlineAlpha": 1,
    "outlineThickness": 4,
    "labelText": "[[title]]",
    "balloonText": ""
});

$('#selected-portion').animate({
  width : '50%',
  transition : '2s'
})
})


  