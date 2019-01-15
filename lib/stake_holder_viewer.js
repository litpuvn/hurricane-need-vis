
function StakeHolderViewer() {

    // this.wordCloud = new WordCloud('adminBoard');

}

StakeHolderViewer.prototype = {
    constructor: StakeHolderViewer,

    _getCtx: function (canvasElementId) {
        return document.getElementById(canvasElementId).getContext('2d');
    },

    _createAdminBoardVis: function () {

         // completely arbitrary data
      var sampleData = {
        labels: ['01-2017', '02-2017', '03-2017', '04-2017', '05-2017', '06-2017',
                 '07-2017', '08-2017', '09-2017','10-2017', '11-2017', '12-2017', '01-2018', '02-2018' ],
        datasets: [
            {label:"water", data:  [0, 3, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0] },
            {label:"help", data:  [0, 0, 5, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0] },
            {label:"food", data:  [0, 0, 0, 0, 8, 6, 10, 0, 0, 0, 6, 0, 0, 0] },
            {label:"gas", data:  [12, 8, 0, 7, 8, 0, 14, 0, 0, 0, 0, 0, 7, 0] },
            {label:"pet", data:  [0, 0, 5, 0, 0, 0, 0, 0, 12, 0, 0, 0, 7, 0] },
            {label:"power", data:  [0, 0, 0, 0, 12, 0, 20, 0, 0, 9, 0, 0, 0, 0] },
            {label:"clothes", data:  [16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0] },
            {label:"diaper", data:  [0, 3, 0, 0, 0, 0, 18, 0, 7, 0, 0, 0, 0, 0] },
            {label:"house", data:  [0, 7, 0, 0, 2, 0, 0, 10, 0, 9, 0, 0, 0, 0] },
            {label:"boat", data:  [0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 35, 8, 0, 0] },
            {label:"call", data:  [0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
            {label:"hospital", data:  [13, 0, 0, 0, 9, 0, 0, 0, 0, 7, 0, 0, 3, 0] },
            {label:"volunteer", data:  [0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 5, 0] },
            {label:"money", data:  [0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
            {label:"rescue", data:  [0, 0, 0, 8, 0, 0, 0, 0, 9, 8, 0, 3, 6, 0] },
            {label:"fund", data:  [23, 0, 8, 9, 0, 0, 0, 0, 0, 0, 5, 0, 6, 15] },
            {label:"charity", data:  [0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0] },
            {label:"rescue", data:  [17, 0, 21, 8, 0, 0, 0, 0, 0, 0, 4, 0, 0, 7] },
            {label:"oil", data:  [0, 0, 0, 7, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0] },
            {label:"shop", data:  [0, 0, 4, 0, 0, 3, 0, 0, 25, 0, 0, 0, 7, 13] }

        ]
      };
   
    var maxHeightChart = new Chart(this._getCtx('concernFlow'))
        .Streamgraph(sampleData, {
          responsive: true,
          colorAssignmentMethod: 'verticalPosition',
          labelPlacementMethod: 'maxHeight',
            colors: [
                '#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94',
                '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf'
            ],
            labelFontColor: 'black',
            labelMinimumSize: 9,
            stroke: false
        });

    },


    showAdminBoardGroup: function () {
        var self = this;
         vex.dialog.alert(
            {
                message: 'Concern_Flow',
                className: 'concern_flow',
                overlayClassName: 'concern_flow_overlay',
                showCloseButton: false,
                escapeButtonCloses: true,
                overlayClosesOnClick: true,
                input: '<canvas id="concernFlow"></canvas>',
                buttons: [],
                callback: function(data) {
                    if (!data) {
                        return console.log('No data for news');
                    }
                },
                afterOpen: function (element) {
                    self._createAdminBoardVis();
                }
            }
        );
    }
};