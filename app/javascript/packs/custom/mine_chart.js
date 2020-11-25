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


  // Prepare random data
  /*
TODO:
- Check data labels after drilling. Label rank? New positions?
*/

let data = Highcharts.geojson(Highcharts.maps['countries/et/et-all']);
const separators = Highcharts.geojson(Highcharts.maps['countries/et/et-all'], 'mapline');

// Set drilldown pointers
data.forEach((d, i) => {
    d.drilldown = d.properties['ADM1_EN'];
    d.value = i; // Non-random bogus data    
});

function getScript(url, cb) {
    const script = document.createElement('script');
    script.src = url;
    script.onload = cb;
    document.head.appendChild(script);
}

let level1Title = ''; 
let level2Title = '';
let chart = '';
// Instantiate the map
Highcharts.mapChart('container', {
    chart: {
        events: {
            drilldown: function (e) {
                if (!e.seriesOptions) {
                    chart = this;
                    const mapKey = e.point.drilldown;
                    level1Title = e.point.properties.ADM1_EN;
                        

                    // Handle error, the timeout is cleared on success
                    let fail = setTimeout(() => {
                        if (!Highcharts.maps[mapKey]) {
                            chart.showLoading('<i class="icon-frown"></i> Failed loading ' + e.point.name);
                            fail = setTimeout(() => {
                                chart.hideLoading();
                            }, 1000);
                        }
                    }, 3000);

                    // Show the spinner
                    chart.showLoading('<i class="icon-spinner icon-spin icon-3x"></i>'); // Font Awesome spinner

                    // Load the drilldown map
                    getScript('jsons/' + mapKey + '-Zones.js', () => {
                        // zoneData = Highcharts.geojson(Highcharts.maps[mapKey + '-Zones']);
                        let zoneData = Highcharts.geojson(Highcharts.maps[mapKey + '-Zones']);
                        const zoneSeparators = Highcharts.geojson(Highcharts.maps[mapKey + '-Zones'], 'mapline');
                        
                        // Set drilldown pointers
                        zoneData.forEach((d, i) => {
                            d.drilldown = d.properties['ADM2_EN'];
                            d.value = i; // Non-random bogus data    
                        });

                        chart.addSeriesAsDrilldown(e.point, {
                            name: level1Title,
                            data: zoneData,
                            dataLabels: {
                                enabled: true,
                                format: '{point.properties.ADM2_EN}'
                            }
                        });
                        
                        Highcharts.mapChart('container', {
                            chart: {
                                events: {
                                    drilldown: function (e) {
                                        if (!e.seriesOptions) {
                                            const chart = this;
                                            const zoneMapKey = e.point.drilldown;
                                            level2Title = e.point.properties.ADM2_EN;
                                                
                        
                                            // Handle error, the timeout is cleared on success
                                            let fail = setTimeout(() => {
                                                if (!Highcharts.maps[zoneMapKey]) {
                                                    chart.showLoading('<i class="icon-frown"></i> Failed loading ' + e.point.name);
                                                    fail = setTimeout(() => {
                                                        chart.hideLoading();
                                                    }, 1000);
                                                }
                                            }, 3000);
                        
                                            // Show the spinner
                                            chart.showLoading('<i class="icon-spinner icon-spin icon-3x"></i>'); // Font Awesome spinner
                        
                                            // Load the drilldown map
                                            getScript('jsons/' + zoneMapKey + '-Woredas.js', () => {
                                                let woredaData = Highcharts.geojson(Highcharts.maps[zoneMapKey + '-Woredas']);
                                                
                                                // Set a non-random bogus value
                                                woredaData.forEach((d, i) => {
                                                    d.value = i;
                                                });
                        
                                                // Hide loading and add series
                                                chart.hideLoading();
                                                clearTimeout(fail);
                                                chart.addSeriesAsDrilldown(e.point, {
                                                    name: e.point.properties.ADM3_EN,
                                                    data: woredaData,
                                                    dataLabels: {
                                                        enabled: true,
                                                        format: '{point.properties.ADM3_EN}'
                                                    }
                                                });
                                            });
                                        }
                        
                                        this.setTitle(null, { text: level1Title + ' Region / ' + level2Title + ' Zone' });
                                    },
                                    drillup: function () {
                                        this.setTitle(null, { text: '' });
                                    }
                                }
                            },
                            
                            title: {
                                text: 'Ethiopia Map'
                            },
                        
                            subtitle: {
                                text: '',
                                floating: true,
                                align: 'right',
                                y: 50,
                                style: {
                                    fontSize: '16px'
                                }
                            },
                        
                            colorAxis: {
                                min: 0,
                                minColor: '#E6E7E8',
                                maxColor: '#005645'
                            },
                        
                            mapNavigation: {
                                enabled: true,
                                buttonOptions: {
                                    verticalAlign: 'bottom'
                                }
                            },
                        
                            plotOptions: {
                                map: {
                                    states: {
                                        hover: {
                                            color: '#EEDD66'
                                        }
                                    }
                                }
                            },
                        
                            series: [{
                                data: zoneData,
                                name: level1Title,
                                dataLabels: {
                                    enabled: true,
                                    format: '{point.properties.ADM2_EN}'
                                }
                            }, {
                                type: 'mapline',
                                data: zoneSeparators,
                                color: 'silver',
                                enableMouseTracking: false,
                                animation: {
                                    duration: 500
                                }
                            }],
                        
                            drilldown: {
                                activeDataLabelStyle: {
                                    color: '#FFFFFF',
                                    textDecoration: 'none',
                                    textOutline: '1px #000000'
                                },
                                drillUpButton: {
                                    relativeTo: 'spacingBox',
                                    position: {
                                        x: 0,
                                        y: 60
                                    }
                                }
                            }
                        }); 
                        $('.container').append('');     
                    });
                }

                this.setTitle(null, { text: level1Title + ' Region' });
                setTimeout(function () {
                    // chart.hideLoading();
                    chart.addSeriesAsDrilldown(e.point, data);
                }, 500);
            }
        }
    },

    title: {
        text: 'Ethiopia Map'
    },

    subtitle: {
        text: '',
        floating: true,
        align: 'right',
        y: 50,
        style: {
            fontSize: '16px'
        }
    },

    colorAxis: {
        min: 0,
        minColor: '#E6E7E8',
        maxColor: '#005645'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    plotOptions: {
        map: {
            states: {
                hover: {
                    color: '#EEDD66'
                }
            }
        }
    },

    series: [{
        data: data,
        name: 'Ethiopia',
        dataLabels: {
            enabled: true,
            format: '{point.properties.ADM1_EN}'
        }
    }, {
        type: 'mapline',
        data: separators,
        color: 'silver',
        enableMouseTracking: false,
        animation: {
            duration: 500
        }
    }],

    drilldown: {
        activeDataLabelStyle: {
            color: '#FFFFFF',
            textDecoration: 'none',
            textOutline: '1px #000000'
        },
        drillUpButton: {
            relativeTo: 'spacingBox',
            position: {
                x: 0,
                y: 60
            }
        }
    },
    
    drillup: function () {
        this.setTitle(null, { text: 'Ethiopia' });
    }
});



})