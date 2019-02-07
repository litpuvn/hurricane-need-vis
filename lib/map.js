//Initialize a map inside a div called map
var map = L.map('map', {
  zoomControl: false,
  scrollWheelZoom: false,
  dragging: false,
  attributionControl: false
}).setView([29.76, -95.37], 10.5);

//merge the two data sets
for (i = 0; i < districts.features.length; i++) {
  for (j = 0; j < region_concern.features.length; j++) {
    if (districts.features[i].properties.dist_num == region_concern.features[j].region) {
      districts.features[i].properties.concern = region_concern.features[j].concern;
      districts.features[i].properties.context = region_concern.features[j].context;
      districts.features[i].properties.count = region_concern.features[j].count;
    }
  }
};

//merge the two data sets
for (i = 0; i < districts.features.length; i++) {
  for (j = 0; j < userData.features.length; j++) {
    if (districts.features[i].properties.dist_num == userData.features[j].region) {
      districts.features[i].properties.user_content = userData.features[j].user_content;
    }
  }
};

var geojson;

var style_override = {};
var style_target = function (f) {
  return f.properties.count
};

function merge_styles(base, new_styles) {
  for (var attrname in new_styles) {
    base[attrname] = new_styles[attrname];
  }
  return base;
}

//set color palatte
function getColor(d) {
  return d > 80 ? '#67000d' :
    d > 60 ? '#cb181d' :
    d > 40 ? '#ef3b2c' :
    d > 20 ? '#fb6a4a' :
    d > 0 ? '#fc9272' : '#ffffff'
};

//attach color palatte to category
function style(feature, color) {
  var target = style_target(feature);
  var fillColor = (!color) ? getColor(target) : color;
  var default_style = {
    fillColor: fillColor,
    weight: 1,
    opacity: 1,
    color: 'grey',
    fillOpacity: 1
  };
  return merge_styles(default_style, style_override);
};

L.geoJson(districts, {
  style: {
    weight: 2,
    fillColor: 'white',
    color: 'black',
  }
}).addTo(map);


//new function
function showConcerns(ids) {
  needs_arr = ['water', 'help', 'food', 'gas', 'pet', 'power', 'clothes', 'diaper', 'house', 'boat', 'call', 'hospital', 'volunteer', 'money', 'medicine', 'fund', 'charity', 'rescue', 'oil', 'shop'];
  for (let i = 0; i < ids.length; i++) {
    id_index = needs_arr.indexOf(ids[i])
    if (id_index > -1) {
      needs_arr.splice(id_index, 1);
    }
  }
  for (let j = 0; j < needs_arr.length; j++) {
    var x = document.getElementById(needs_arr[j]);
    x.style.opacity = 0.1
  }
}

function hideConcerns() {
  needs_arr = ['water', 'help', 'food', 'gas', 'pet', 'power', 'clothes', 'diaper', 'house', 'boat', 'call', 'hospital', 'volunteer', 'money', 'medicine', 'fund', 'charity', 'rescue', 'oil', 'shop'];
  for (let i = 0; i < needs_arr.length; i++) {
    var x = document.getElementById(needs_arr[i]);
    x.style.opacity = 0.9
  }
}

var needs_color_map = {
  'water': '#3366cc',
  'help': '#dc3912',
  'food': '#ff9900',
  'gas': '#109618',
  'pet': '#990099',
  'power': '#0099c6',
  'clothes': '#dd4477',
  'diaper': '#66aa00',
  'house': '#b82e2e',
  'boat': '#316395',
  'call': '#994499',
  'hospital': '#22aa99',
  'volunteer': '#aaaa11',
  'money': '#6633cc',
  'medicine': '#e67300',
  'fund': '#8b0707',
  'charity': '#651067',
  'rescue': '#329262',
  'oil': '#5574a6',
  'shop': '#3b3eac'
}

function showTimeSeries(region_prop) {
  var regdata = region_data
  var region_name = region_prop.name
  title_name = "Needs Frequency: " + region_name + " (" + year + ")"
  for (i = 0; i < regdata.length; i++) {
    if (regdata[i]["region_id"] == region_prop.dist_num) {
      var time_row = []
      legend_col = {}
      // time_row[0] = regdata[i]["time_range"]
      time_row[0] = time_range
      if (time_row[0][0] != "x") {
        time_row[0].unshift("x")
      }
      for (j = 0; j < regdata[i]["needs_frequency"].length; j++) {
        legend_col[regdata[i]["needs_frequency"][j][0]] = needs_color_map[regdata[i]["needs_frequency"][j][0]]
        time_row.push(regdata[i]["needs_frequency"][j])
      }
      var chart = c3.generate({
        bindto: '#chrt',
        data: {
          x: "x",
          columns: time_row,
          colors: legend_col
        },
        axis: {
          x: {
            type: 'timeseries',
            tick: {
              format: '%m-%d'
            }
          }
        },
        legend: {
          position: 'right'
        },
        title: {
          text: title_name
        }
      });
      break;
    }
  }


}

//clean the previous wordCloud for adding a new one
function clean() {
  $("#chart").empty();
  var html = '<g><text></text></g>'
  $("#chart").append(html);
}

//To show the regionName of the wordCloud
function showRegionName(ids) {
  $('#region_name').children().remove();
  var html = '<span id="ids" style="text-align: center; display: block; ">Region: ' + ids + '</span>'
  $('#region_name').append(html);
}
//
// function getCtx(canvasElementId){
//     return document.getElementById(canvasElementId).getContext('2d');
// }
//
// function showStreamgraph(){
// 	//var ctx = document.getElementById('canvas').getContext('2d');
// 	var newChart = new Chart(getCtx('streamgraph')).Streamgraph(sampleData, {
// 	responsive: true,
// 	colorAssignmentMethod: 'verticalPosition',
// 	labelPlacementMethod: 'maxHeight',
//     colors: [
//         '#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94',
//         '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf'
//     ],
//     multiTooltipTemplate: "maxHeight: <%= maxHeight %> | sum: <%= sum %> | Date: <%= xLabel %> | value: <%= value %>",
//     labelFontColor: 'black',
//     labelMinimumSize: 9,
//     stroke: false});
// }

//click the region to change their colors
// function showConcernFlow(e) {
//   var layer = e.target;
//   style_override = {
//     color: '#000',
//     opacity: 1,
//     fillOpacity: 0
//   }
//   geojson.resetStyle(layer);
//   // $('#region_name').children().remove();
//   // var html = '<span id="ids" style="text-align: center; display: block; ">Region: ' + ids + '</span>'
//   // $('#region_name').append(html);
// }

//To show streamGraph
function showCanvas(region_name) {
  $(".concern_flow").empty()
  var html = '<canvas id="streamgraph"></canvas>';
  $(".concern_flow").append(html);
  showStreamgraph();
  $('.concern_region_name').text('Region: ' + region_name);
}

function highlightFeature(e) {
  var concerns = [];
  var layer = e.target;
  var needs = []
  //on hover change color from what was defined in function style(feature)
  style_override = {
    weight: 0,
    //color: 'white',
    fillOpacity: 0.8
  }
  geojson.resetStyle(e.target);

  if (!L.Browser.ie && !L.Browser.opera) {
    layer.bringToFront();
  }
  concerns = (layer.feature.properties.concern.toString().split(','));
  for (let i = 0; i < concerns.length; i++) {
    a = []
    a[0] = concerns[i]
    for (let j = 1; j <= 14; j++) {
      var rval = Math.floor(Math.random() * 500);
      a[j] = rval
    }
    needs[i] = a
  }
  clean();
  showConcerns(concerns);
  showTimeSeries(layer.feature.properties)
  userContent = layer.feature.properties.user_content;
  var region_name = layer.feature.properties.name;
  showRegionName(region_name);
  drawWordCloud(userContent);
  showCanvas(region_name);
  showTweet();
}

//reset highlight when hovering out
function resetHighlight(e) {
  style_override = {};
  var layer = e.target;
  geojson.resetStyle(layer);
  hideConcerns();
  clean();
  showRegionName('Houston');
  drawWordCloud(userAll_content);
}

function onEachFeature(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
  });
}

var geojson = L.geoJson(districts, {
  style: style,
  onEachFeature: onEachFeature
}).addTo(map);


//create an legend
var legend = L.control({
  position: 'topleft'
})
legend.onAdd = function (map) {
  var div = L.DomUtil.create('div', 'info legend'),
    grades = ['100', '80', '60', '40', '20', '0'],
    labels = [];

  // loop through categories and generate a label with a colored square for each interval
  for (var i = 0; i < grades.length; i++) {
    div.innerHTML +=
      '<i style="background:' + getColor(grades[i]) + '"></i> ' +
      grades[i] + '<br>';
  }
  return div;
};
legend.addTo(map);