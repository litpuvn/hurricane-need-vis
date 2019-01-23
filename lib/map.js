//Initialize a map inside a div called map
var map = L.map('map', {
  zoomControl: false,
  scrollWheelZoom: false
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

function showTimeSeries(needs) {
  legend_col = {}
  columns = [
    ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06', '2013-01-07']
  ]
  for (let i = 0; i < needs.length; i++) {
    legend_col[needs[i][0]] = needs_color_map[needs[i][0]]
    columns.push(needs[i])
  }
  var chart = c3.generate({
    bindto: '#chrt',
    data: {
      x: 'x',
      columns: columns,
      colors: legend_col
    },
    axis: {
      x: {
        type: 'timeseries',
        tick: {
          format: '%Y-%m-%d'
        }
      }
    },
    legend: {
      position: 'right'
    },
    title: {
      text: 'Needs Frequency'
    }
  });
}

//clean the previous wordCloud for adding a new one
function clean() {
  var count = 0; //count the amount of svg
  var div = document.getElementById("chartAll");
  var html = '<div id="chart"></div>';
  $("#chart").remove();
  $("#right_down").append(html);
  while (div.hasChildNodes()) //To fix the bug: mouseover will execute twice to create two svg
  {
    count++;
    div.removeChild(div.firstChild);
  }
  if (count > 1) {
    div.removeChild(div.firstChild);
  }
}

function cleanAll() {
  $("#chartAll").remove();
  var html = '<div id="chartAll"></div>';
  $("#right_down").append(html);
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
    for (let j = 1; j <= 7; j++) {
      var rval = Math.floor(Math.random() * 500);
      a[j] = rval
    }
    needs[i] = a
  }
  showConcerns(concerns);
  showTimeSeries(needs)
  userContent = layer.feature.properties.user_content;
  cleanAll(); // for clean ALL wordCloud
  drawWordCloud(userContent, 'chart');

  //console.log(concerns);
  clean();
  showConcerns(concerns);
  showTimeSeries(needs)
  userContent = layer.feature.properties.user_content;
  var region_name = layer.feature.properties.name;
  showRegionName(region_name);
  drawWordCloud(userContent);
}

//reset highlight when hovering out
function resetHighlight(e) {
  style_override = {};
  geojson.resetStyle(e.target);
  hideConcerns();
  clean(); // clean the previous wordCloud
  drawWordCloud(userAll_content, 'chartAll');
  //console.log(userAll_content);
  style_override = {};
  var layer = e.target;
  geojson.resetStyle(layer);
  hideConcerns();
  clean();
  showRegionName('Houston');
  drawWordCloud(userAll_content);
}

//click the region to show the ConcernFlow(streamGraph)
function showConcernFlow(e) {
  var layer = e.target;
  style_override = {
    color: '#000',
    opacity: 1,
    fillOpacity: 0
  }
  geojson.resetStyle(layer);
  $('.btn').click();
  $('.modal-title').text(layer.feature.properties.name);
}

function onEachFeature(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
    click: showConcernFlow
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
