
// var sampleData = {
// 	labels: ['01-2017', '02-2017', '03-2017', '04-2017', '05-2017', '06-2017',
// 	         '07-2017', '08-2017', '09-2017','10-2017', '11-2017', '12-2017', '01-2018', '02-2018' ],
// 	datasets: [
// 	    {label:"water", data:  [0, 18, 29, 27, 0, 18, 0, 28, 0, 0, 24, 15, 11, 0] },
// 	    {label:"help", data:  [8, 0, 6, 0, 6, 0, 9, 0, 0, 22, 0, 0, 0, 0] },
// 	    {label:"food", data:  [0, 0, 0, 23, 38, 36, 10, 0, 0, 0, 46, 0, 0, 0] },
// 	    {label:"gas", data:  [12, 8, 0, 7, 8, 0, 14, 0, 0, 0, 0, 0, 7, 0] },
// 	    {label:"pet", data:  [0, 0, 5, 0, 0, 0, 0, 0, 12, 0, 0, 0, 7, 0] },
// 	    {label:"power", data:  [0, 0, 0, 0, 42, 0, 30, 0, 0, 9, 0, 0, 0, 0] },
// 	    {label:"clothes", data:  [16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0] },
// 	    {label:"diaper", data:  [0, 3, 0, 0, 0, 0, 18, 0, 7, 0, 0, 0, 0, 0] },
// 	    {label:"house", data:  [0, 27, 0, 0, 36, 0, 0, 20, 0, 9, 0, 0, 0, 0] },
// 	    {label:"boat", data:  [0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 35, 8, 0, 0] },
// 	    {label:"call", data:  [0, 0, 0, 0, 11, 0, 0, 20, 0, 0, 0, 0, 0, 0] },
// 	    {label:"hospital", data:  [13, 0, 23, 0, 19, 0, 0, 0, 0, 27, 0, 0, 13, 0] },
// 	    {label:"volunteer", data:  [0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 35, 0] },
// 	    {label:"money", data:  [0, 47, 0, 0, 44, 50, 0, 0, 43, 0, 0, 60, 49, 50] },
// 	    {label:"rescue", data:  [0, 0, 12, 8, 0, 0, 0, 0, 19, 8, 0, 23, 16, 0] },
// 	    {label:"fund", data:  [23, 0, 28, 19, 0, 0, 0, 0, 0, 0, 15, 0, 9, 15] },
// 	    {label:"charity", data:  [0, 0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0] },
// 	    {label:"rescue", data:  [17, 0, 21, 38, 0, 0, 0, 0, 0, 0, 44, 0, 0, 27] },
// 	    {label:"oil", data:  [0, 0, 0, 27, 0, 30, 0, 8, 0, 0, 0, 13, 0, 0] },
// 	    {label:"shop", data:  [0, 0, 24, 0, 0, 13, 0, 0, 25, 0, 0, 0, 27, 13] }
// 	]
// };

function getCtx(canvasElementId){
    return document.getElementById(canvasElementId).getContext('2d');
}

function showStreamgraph(dist_num){
	//var ctx = document.getElementById('canvas').getContext('2d');
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
