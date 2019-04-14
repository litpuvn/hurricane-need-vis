
function getCtx(canvasElementId){
    return document.getElementById(canvasElementId).getContext('2d');
}

function showStreamgraph(dist_num){
	//var ctx = document.getElementById('canvas').getContext('2d');
	// console.log(stream_data[dist_num] != null)
	if(stream_data[dist_num] != null){
    var newChart = new Chart(getCtx('streamgraph')).Streamgraph(stream_data[dist_num], {
    responsive: true,
    colorAssignmentMethod: 'verticalPosition',
    labelPlacementMethod: 'maxHeight',
      // colors: [
      //     '#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94','#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf'
      // ],
      colors: ['#F08080', '#BC8F8F', '#CD5C5C', '#FF0000', '#A52A2A', '#B22222', '#8B0000', '#800000', '#FFA07A', '#FF7F50', '#FF4500', '#E9967A', '#FF6347', '#0000FF', '#0000CD', '#191970', '#00008B', '#000080', '#4169E1', '#6495ED', '#00FFFF', '#00FFFF', '#00CED1', '#2F4F4F', '#008B8B', '#008080', '#48D1CC', '#20B2AA', '#40E0D0', '#7FFFAA', '#00FA9A', '#00FF7F', '#DB7093', '#FF69B4', '#FF1493', '#C71585', '#DA70D6', '#D8BFD8', '#DDA0DD', '#EE82EE', '#FF00FF', '#FF00FF', '#8B008B', '#800080', '#BA55D3', '#9400D3', '#9932CC', '#4B0082'],
      multiTooltipTemplate: "maxHeight: <%= maxHeight %> | sum: <%= sum %> | Date: <%= xLabel %> | value: <%= value %>",
      labelFontColor: 'black',
      labelMinimumSize: 4,
      scaleDivisions: 6,
      stroke: false});
  }

}
