var userAll_content = "latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest latest opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening work work work work work work work work work work work work work work work work work work work work work work work work work work work work work work work work work work work work work work work anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend great great great great great great great great great great great great great great great great great great great great great great great great great great great great great great great great fit fit fit fit fit fit fit fit fit fit fit fit fit fit fit fit fit fit fit fit fit fit fit fit fit fit fit fit fit see see see see see see see see see see see see see see see see see see see see see see see see see see see see want want want want want want want want want want want want want want want want want want want want want want want want want want want usgs usgs usgs usgs usgs usgs usgs usgs usgs usgs usgs usgs usgs usgs usgs usgs usgs usgs usgs usgs usgs usgs usgs usgs usgs usgs water water water water water water water water water water water water water water water water water water water water water water water water cypress cypress cypress cypress cypress cypress cypress cypress cypress cypress cypress cypress cypress cypress cypress cypress cypress cypress cypress cypress cypress cypress cypress photo photo photo photo photo photo photo photo photo photo photo photo photo photo photo photo photo photo photo photo photo harvey harvey harvey harvey harvey harvey harvey harvey harvey harvey harvey harvey harvey harvey harvey harvey harvey harvey harvey harvey harvey team team team team team team team team team team team team team team team team team team team team team height height height height height height height height height height height height height height height height height height height flow flow flow flow flow flow flow flow flow flow flow flow flow flow flow flow flow flow flow view view view view view view view view view view view view view view view view view view view repost repost repost repost repost repost repost repost repost repost repost repost repost repost repost repost repost repost repost traffic traffic traffic traffic traffic traffic traffic traffic traffic traffic traffic traffic traffic traffic traffic traffic traffic traffic post post post post post post post post post post post post post post post post post rain rain rain rain rain rain rain rain rain rain rain rain rain rain rain rain rain high high high high high high high high high high high high high high high high high might might might might might might might might might might might might might might might might interest interest interest interest interest interest interest interest interest interest interest interest interest interest interest looking looking looking looking looking looking looking looking looking looking looking looking looking looking looking flood flood flood flood flood flood flood flood flood flood flood flood flood flood little little little little little little little little little little little little little pray pray pray pray pray pray pray pray pray pray pray pray pray flooding flooding flooding flooding flooding flooding flooding flooding flooding flooding flooding flooding prayer prayer prayer prayer prayer prayer prayer prayer prayer prayer prayer prayer clerical clerical clerical clerical clerical clerical clerical clerical clerical clerical clerical lane lane lane lane lane lane lane lane lane lane lane please please please please please please please please please please please close close close close close close close close close close close safe safe safe safe safe safe safe safe safe safe safe affect affect affect affect affect affect affect affect affect affect one one one one one one one one one one retail retail retail retail retail retail retail retail retail main main main main main main main main main home home home home home home home home home know know know know know know know know weather weather weather weather weather weather weather weather stay stay stay stay stay stay stay stay take take take take take take take take come come come come come come come make make make make make make make call call call call call call call nursing nursing nursing nursing nursing nursing nursing sales sales sales sales sales sales sales friend friend friend friend friend friend friend senior senior senior senior senior senior senior bad bad bad bad bad bad night night night night night night assistant assistant assistant assistant assistant assistant education education education education education education store store store store store store warning warning warning warning warning warning include include include include include include day day day day day day rescue rescue rescue rescue rescue rescue try try try try try shelter shelter shelter shelter shelter casa casa casa casa casa finance finance finance finance finance healthcare healthcare healthcare healthcare healthcare people people people people people stop stop stop stop stop labor labor labor labor labor river river river river river right right right right house house house house open open open open need need need need specialist specialist specialist specialist family family family family heavy heavy heavy heavy exit exit exit exit hard hard hard hard love love love love life life life life dry dry dry dry boat boat boat boat everyone everyone everyone everyone crazy crazy crazy crazy register register register register nurse nurse nurse nurse keep keep keep keep hope hope hope hope tell tell tell follow follow follow service service service morning morning morning completely completely completely start start start current current current situation situation situation monday monday monday august august august waters waters waters";

function drawWordCloud(text_string){
  var common = "poop,i,me,my,myself,we,us,our,ours,ourselves,you,your,yours,yourself,yourselves,he,him,his,himself,she,her,hers,herself,it,its,itself,they,them,their,theirs,themselves,what,which,who,whom,whose,this,that,these,those,am,is,are,was,were,be,been,being,have,has,had,having,do,does,did,doing,will,would,should,can,could,ought,i'm,you're,he's,she's,it's,we're,they're,i've,you've,we've,they've,i'd,you'd,he'd,she'd,we'd,they'd,i'll,you'll,he'll,she'll,we'll,they'll,isn't,aren't,wasn't,weren't,hasn't,haven't,hadn't,doesn't,don't,didn't,won't,wouldn't,shan't,shouldn't,can't,cannot,couldn't,mustn't,let's,that's,who's,what's,here's,there's,when's,where's,why's,how's,a,an,the,and,but,if,or,because,as,until,while,of,at,by,for,with,about,against,between,into,through,during,before,after,above,below,to,from,up,upon,down,in,out,on,off,over,under,again,further,then,once,here,there,when,where,why,how,all,any,both,each,few,more,most,other,some,such,no,nor,not,only,own,same,so,than,too,very,say,says,said,shall,TX, Houston,-, nr, Just, Texas, it";
  var word_count = {};

  var words = text_string.split(/[ '\-\(\)\*":;\[\]|{},.!?]+/);
    if (words.length == 1){
      word_count[words[0]] = 1;
    } else {
      words.forEach(function(word){
        var word = word.toLowerCase();
        if (word != "" && common.indexOf(word)==-1 && word.length>1){
          if (word_count[word]){
            word_count[word]++;
          } else {
            word_count[word] = 1;
          }
        }
      })
    }

  var width = '750';
  var height = '300';
  var fill = d3.scale.category20();
  var word_entries = d3.entries(word_count);
  var xScale = d3.scale.linear()
     .domain([0, d3.max(word_entries, function(d) {
        return d.value;
      })
     ])
     .range([10,100]);

  d3.layout.cloud().size([width, height])
    .timeInterval(20)
    .words(word_entries)
    .fontSize(function(d) { return xScale(+d.value); })
    .text(function(d) { return d.key; })
    .rotate(function() { return ~~(Math.random() * 2) * 90; })
    .font("Impact")
    .on("end", draw)
    .start();

  var svg = d3.select('#chart').append("svg")
        .append("g")
        .attr("transform", "translate(375,150)") //if you change the svg size, you should change the translate for <g> so that to avoid the text out of box
        .attr("position","fixed")
        .attr("top","10px")

  $("svg").css('overflow','visible')

   //Draw the word cloud
    function draw(words) {

        if (svg == null) {
          return;
        }

        var cloud = svg.selectAll("g text")
                        .data(words, function(d) { return d.text; })

        //Entering words
        cloud.enter()
            .append("text")
            .style("font-family", "Impact")
            .style("fill", function(d, i) { return fill(i); })
            .attr("text-anchor", "middle")
            .attr('font-size', 1)
            .text(function(d) { return d.text; });

        //Entering and existing words
        cloud
            .transition()
                .duration(1000)
                .style("font-size", function(d) { return d.size + "px"; })
                .attr("transform", function(d) {
                    return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                })
                .style("fill-opacity", 1);

        //Exiting words
        cloud.exit()
            .transition()
                .duration(1000)
                .style('fill-opacity', 1e-6)
                .attr('font-size', 1)
                .remove();
    }

    //Use the module pattern to encapsulate the visualisation code. We'll
    // expose only the parts that need to be public.
    return {

        //Recompute the word cloud for a new set of words. This method will
        // asycnhronously call draw when the layout has been computed.
        // The outside world will need to call this function, so make it part
        // of the wordCloud return value.
        update: function(words) {
            d3.layout.cloud().size([1000, 1000])
                .words(words)
                .padding(1)
                .rotate(function() { return ~~(Math.random() * 2) * 90; })
                .font("Impact")
                .fontSize(function(d) { return d.size; })
                .on("end", draw)
                .start();
        }
    }

}
