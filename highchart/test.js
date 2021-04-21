
Highcharts.chart('container', {
    chart: {
      type: 'column',
      events: {
        load: function() {
          var axis = this.xAxis[0] 
          var ticks = axis.ticks
          var points = this.series[0].points
          var tooltip = this.tooltip
        //   console.log(axis);
          console.log(ticks);
        //   console.log(points);
        //   console.log(tooltip);
  
          points.forEach(function(point, i) {
            if (ticks[i]) {
              var label = ticks[i].label.element
              
              label.onclick = function() {
                tooltip.getPosition(null, null, point) 
                tooltip.refresh(point)
              }
            }
            
          })
        }
      }
    },
    xAxis: {
      categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
    },
    yAxis: {
      min: 0,
    },
    tooltip: {
      valueSuffix: ' millions'
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
    series: [{
      name: 'Year 1800',
      data: [107, 31, 635, 203, 2]
    }]
  });
  