
//Initialize a map inside a div called map
var map = L.map('map',{zoomControl:false, scrollWheelZoom: false}).setView([29.76, -95.37], 10.5);

//merge the two data sets
for (i=0; i<districts.features.length; i++) {
    //console.log("districts.features[i].properties ", typeof districts.features[i].properties);
    //console.log("districts.features.properties.dist_num ", districts.features[i].properties.dist_num);
    for (j=0; j<region_concern.features.length; j++) {
        if (districts.features[i].properties.dist_num == region_concern.features[j].region) {
            //console.log("IN DISTRICTS", districts.features[i].properties.dist_num, "IN TEST DATA", region_concern.features[j].dist_num);
            districts.features[i].properties.concern = region_concern.features[j].concern;
            districts.features[i].properties.context = region_concern.features[j].context;
            districts.features[i].properties.count = region_concern.features[j].count;
        }
    }
    //districts.features[i].properties.anotherItem = "Whatever";
    //console.log('districts.features.properties.anotherItem', districts.features[i].properties.anotherItem);
};

var geojson;

var style_override = {};
var style_target = function(f) { return f.properties.count};

function merge_styles(base, new_styles){
    for (var attrname in new_styles) { base[attrname] = new_styles[attrname]; }
    return base;
}

//set color palatte
function getColor(d) {
  return   d > 80 ? '#67000d' :
           d > 60 ? '#cb181d' :
           d > 40 ? '#ef3b2c' :
           d > 20 ? '#fb6a4a' :
           d > 0  ? '#fc9272' : '#ffffff'
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

L.geoJson(districts,{
  style:{
    weight:2,
    fillColor:'white',
    color:'black',
  }
}).addTo(map);


//show concerns on the right list
function showConcerns(ids) { 
  for (let i = 0; i < ids.length; i++) {
      document.getElementById(ids[i]).style.opacity = 0.1;
  }
}

function hideConcerns(ids) {
   for (let i = 0; i < ids.length; i++) {
      document.getElementById(ids[i]).style.opacity = 0.9;     
   }
   concerns = [];
}

var concerns = [];

function highlightFeature(e) {
    var layer = e.target;
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
    concerns.push(layer.feature.properties.concern.toString());
    showConcerns(concerns);
}

//reset highlight when hovering out
function resetHighlight(e) {
    style_override = {};
    geojson.resetStyle(e.target);
    hideConcerns(concerns);
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
var legend = L.control({ position: 'topleft' })
legend.onAdd = function (map) {
  var div = L.DomUtil.create('div', 'info legend'),
      grades = ['0', '20','40','60','80','100'],
      labels = [];

  // loop through categories and generate a label with a colored square for each interval
  for (var i = 0; i < grades.length; i++) {
      div.innerHTML +=
          '<i style="background:' + getColor(grades[i]) + '"></i> ' +
          grades[i]  + '<br>' ;
  }
  return div;
};
legend.addTo(map);


