import $ from 'jquery';

$(document).ready(function() {

  // 'use strict'

  // // Make the dashboard widgets sortable Using jquery UI
  // $('.connectedSortable').sortable({
  //   placeholder         : 'sort-highlight',
  //   connectWith         : '.connectedSortable',
  //   handle              : '.card-header, .nav-tabs',
  //   forcePlaceholderSize: true,
  //   zIndex              : 999999
  // })
  // $('.connectedSortable .card-header, .connectedSortable .nav-tabs-custom').css('cursor', 'move')

  // // jQuery UI sortable for the todo list
  // $('.todo-list').sortable({
  //   placeholder         : 'sort-highlight',
  //   handle              : '.handle',
  //   forcePlaceholderSize: true,
  //   zIndex              : 999999
  // })

  // // bootstrap WYSIHTML5 - text editor
  // $('.textarea').summernote()

  // $('.daterange').daterangepicker({
  //   ranges   : {
  //     'Today'       : [moment(), moment()],
  //     'Yesterday'   : [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
  //     'Last 7 Days' : [moment().subtract(6, 'days'), moment()],
  //     'Last 30 Days': [moment().subtract(29, 'days'), moment()],
  //     'This Month'  : [moment().startOf('month'), moment().endOf('month')],
  //     'Last Month'  : [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  //   },
  //   startDate: moment().subtract(29, 'days'),
  //   endDate  : moment()
  // }, function (start, end) {
  //   window.alert('You chose: ' + start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'))
  // })

  // /* jQueryKnob */
  // $('.knob').knob()

  // // jvectormap data
  // var visitorsData = {
  //   'US': 398, //USA
  //   'SA': 400, //Saudi Arabia
  //   'CA': 1000, //Canada
  //   'DE': 500, //Germany
  //   'FR': 760, //France
  //   'CN': 300, //China
  //   'AU': 700, //Australia
  //   'BR': 600, //Brazil
  //   'IN': 800, //India
  //   'GB': 320, //Great Britain
  //   'RU': 3000 //Russia
  // }
  // // World map by jvectormap
  // $('#world-map').vectorMap({
  //   map              : 'usa_en',
  //   backgroundColor  : 'transparent',
  //   regionStyle      : {
  //     initial: {
  //       fill            : 'rgba(255, 255, 255, 0.7)',
  //       'fill-opacity'  : 1,
  //       stroke          : 'rgba(0,0,0,.2)',
  //       'stroke-width'  : 1,
  //       'stroke-opacity': 1
  //     }
  //   },
  //   series           : {
  //     regions: [{
  //       values           : visitorsData,
  //       scale            : ['#ffffff', '#0154ad'],
  //       normalizeFunction: 'polynomial'
  //     }]
  //   },
  //   onRegionLabelShow: function (e, el, code) {
  //     if (typeof visitorsData[code] != 'undefined')
  //       el.html(el.html() + ': ' + visitorsData[code] + ' new visitors')
  //   }
  // })

  // // Sparkline charts
  // var sparkline1 = new Sparkline($("#sparkline-1")[0], {width: 80, height: 50, lineColor: '#92c1dc', endColor: '#ebf4f9'});
  // var sparkline2 = new Sparkline($("#sparkline-2")[0], {width: 80, height: 50, lineColor: '#92c1dc', endColor: '#ebf4f9'});
  // var sparkline3 = new Sparkline($("#sparkline-3")[0], {width: 80, height: 50, lineColor: '#92c1dc', endColor: '#ebf4f9'});

  // sparkline1.draw([1000, 1200, 920, 927, 931, 1027, 819, 930, 1021]);
  // sparkline2.draw([515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921]);
  // sparkline3.draw([15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21]);

  // // The Calender
  // $('#calendar').datetimepicker({
  //   format: 'L',
  //   inline: true
  // })

  // // SLIMSCROLL FOR CHAT WIDGET
  // $('#chat-box').overlayScrollbars({
  //   height: '250px'
  // })


  // var ctx = document.getElementById('revenue-chart-canvas').getContext('2d');
  // var myChart = new Chart(ctx, {
  //   type: 'bar',
  //   data: {
  //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //     datasets: [{
  //       label: '# of Votes',
  //       data: [50, 30, 60, 10, 20, 40],
  //       backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
  //       borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
  //       borderWidth: 1
  //     }]
  //   },
  //   options: {
  //     scales: {
  //       yAxes: [{
  //         ticks: {
  //           beginAtZero: true
  //         }
  //       }]
  //     }
  //   }
  // });
  // myChart.canvas.parentNode.style.height = '350px';
  // myChart.canvas.parentNode.style.width = '490px';

  /* Chart.js Charts */
  // Sales chart
  // var salesChartCanvas = document.getElementById('revenue-chart-canvas').getContext('2d');
  //$('#revenue-chart').get(0).getContext('2d');
  if(salesChartCanvas && salesChart !== null){ 
    salesChart.destroy(); 
  }
  var salesChartCanvas = document.getElementById('salesChart');

  var salesChartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [50, 30, 60, 10, 20, 40],
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
      borderWidth: 1
    }]
  };

  var salesChartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  
  // This will get the first returned node in the jQuery collection.
  var salesChart = new Chart(salesChartCanvas, {
      type: 'bar', 
      data: salesChartData, 
      options: salesChartOptions
    }
  );

  //---------------------------
  //- END MONTHLY SALES CHART -
  //---------------------------

  //-------------
  //- PIE CHART -
  //-------------
  // Get context with jQuery - using jQuery's .get() method.
  var pieChartCanvas = $('#pieChart').get(0).getContext('2d')
  var pieData        = {
    labels: [
        'Chrome', 
        'IE',
        'FireFox', 
        'Safari', 
        'Opera', 
        'Navigator', 
    ],
    datasets: [
      {
        data: [700,500,400,600,300,100],
        backgroundColor : ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de'],
      }
    ]
  }
  var pieOptions     = {
    legend: {
      display: false
    }
  }
  //Create pie or douhnut chart
  // You can switch between pie and douhnut using the method below.
  var pieChart = new Chart(pieChartCanvas, {
    type: 'doughnut',
    data: pieData,
    options: pieOptions      
  })

  //-----------------
  //- END PIE CHART -
  //-----------------

  // /* jVector Maps
  // * ------------
  // * Create a world map with markers
  // */
  // $('#world-map-markers').mapael({
  //     map: {
  //       name : "usa_states",
  //       zoom: {
  //         enabled: true,
  //         maxLevel: 10
  //       },
  //     },
  //   }
  // );


  // Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
        var data = [
        ['et-be', 0],
        ['et-2837', 1],
        ['et-ha', 2],
        ['et-sn', 3],
        ['et-ga', 4],
        ['et-aa', 5],
        ['et-so', 6],
        ['et-dd', 7],
        ['et-ti', 8],
        ['et-af', 9],
        ['et-am', 10]
    ];
    
    // Create the chart
    Highcharts.mapChart('container', {
        chart: {
            map: 'countries/et/et-all'
        },
    
        title: {
            text: 'Highmaps basic demo'
        },
    
        subtitle: {
            text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/et/et-all.js">Ethiopia</a>'
        },
    
        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
    
        colorAxis: {
            min: 0
        },
    
        series: [{
            data: data,
            name: 'Random data',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });
})