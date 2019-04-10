
function test123(){
  console.log('123');
  console.log(raw_test.features['823']['0']['1']['needs']);

  //merge the two data sets
  data = raw_test.features['823']['0']
  for (i = 0; i < districts.features.length; i++) {
    for (j = 1; j < 89; j++) { //the dist_num start from 1 to 88
      if (districts.features[i].properties.dist_num == j) {
        if (raw_test.features['823']['0'][j]['needs'] > 0){
          districts.features[i].properties.concern = data[j].count;
        }
        else{
          districts.features[i].properties.concern = "";
        }
        districts.features[i].properties.count = data[j].count;
        // console.log(data[j]['count']);
        // console.log(districts.features[0].properties.count);
      }
    }
  };
}

function initial(){ //初始化choropleth map 的data

  //merge the two data sets
  for (i = 0; i < districts.features.length; i++) {
    for (j = 0; j < region_concern.features.length; j++) {
      if (districts.features[i].properties.dist_num == region_concern.features[j].region) {
        districts.features[i].properties.concern = region_concern.features[j].concern;
        districts.features[i].properties.count = region_concern.features[j].count;
      }
    }
  };
}
initial()
// debugger;
// console.log('test.js')
// data = raw_test.features['823']['0']
// for (i = 0; i < districts.features.length; i++) {
//   for (j = 1; j < 89; j++) { //the dist_num start from 1 to 88
//     if (districts.features[i].properties.dist_num == j) {
//       if (raw_test.features['823']['0'][j]['needs'] > 0){
//         districts.features[i].properties.concern = data[j].count;
//       }
//       else{
//         districts.features[i].properties.concern = "";
//       }
//       districts.features[i].properties.count = data[j].count;
//       // console.log(data[j]['count']);
//       // console.log(districts.features[0].properties.count);
//     }
//   }
// };
