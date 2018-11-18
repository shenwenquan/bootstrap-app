
var lineChartData ={


    labels:['2','4','6','8','10','12'],
    datasets:[
        {
            fillColor:'rgba(255,255,255,0',
            strokeColor:'rgba(0,0,0,1)',
            pointColor:'rgba(155,39,39,1)',
            pointStrokeColor:'#fff',
            pointHightFill:'#fff',
            pointHightStroke:'rgb(220,220,220,1)',
            data:[3,2,3,5,5,9]
        },
        {
            fillColor:'rgba(255,255,255,0',
            strokeColor:'rgba(92,184,92,1)',
            pointColor:'rgba(23,126,24,1)',
            pointStrokeColor:'#fff',
            pointHightFill:'#fff',
            pointHightStroke:'rgb(151,187,205,1)',
            data:[7,1,8,1,2,5]
        }
    ]
}


window.onload = function () {

    var ctx = document.getElementById('canvas').getContext("2d");
    window.myLine = new Chart(ctx).Line(lineChartData,{
       responsive:true
    });
}