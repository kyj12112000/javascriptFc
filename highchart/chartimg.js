var options = {
    chart: {},
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ]
    },
    series: [{
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      type: 'column'
    }]
  }
  
  //highchart img blob인데 더 잘 알아보기
  var chart = Highcharts.chart('container', options);
  
  var data = {
      options: JSON.stringify(options),
      filename: 'test.png',
      type: 'image/png',
      async: true
  };
  
  var exportUrl = 'https://export.highcharts.com/';
  $.post(exportUrl, data, function(data) {
    console.log(data);
      var imageUrl = exportUrl + data;
      var urlCreator = window.URL || window.webkitURL;
      document.querySelector("#image").src = imageUrl;
      fetch(imageUrl).then(response => response.blob()).then(data => {console.log(data)});
  });


  