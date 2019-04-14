var userAll_content = "work work work work work work work work work work work work work work work work work work work work work work work work work work work work work work work work work work work work work work work We We We We We We We We We We We We We We We We We We We We We We We We We We We We We We We We We We We We We We We anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone anyone Can Can Can Can Can Can Can Can Can Can Can Can Can Can Can Can Can Can Can Can Can Can Can Can Can Can Can Can Can Can Can Can Can Can recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend recommend my my my my my my my my my my my my my my my my my my my my my my my my my my my my my my my my my is is is is is is is is is is is is is is is is is is is is is is is is is is is is is is is is on on on on on on on on on on on on on on on on on on on on on on on on on on on on on on on on great great great great great great great great great great great great great great great great great great great great great great great great great great great great great great great great Houston Houston Houston Houston Houston Houston Houston Houston Houston Houston Houston Houston Houston Houston Houston Houston Houston Houston Houston Houston Houston Houston Houston Houston Houston Houston Houston Houston Houston Houston Houston Want Want Want Want Want Want Want Want Want Want Want Want Want Want Want Want Want Want Want Want Want Want Want Want Want Want Want of of of of of of of of of of of of of of of of of of of of of of of of of of of nr nr nr nr nr nr nr nr nr nr nr nr nr nr nr nr nr nr nr nr nr nr nr nr nr all all all all all all all all all all all all all all all all all all all all all all all all all See See See See See See See See See See See See See See See See See See See See See See See See See opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening opening here: here: here: here: here: here: here: here: here: here: here: here: here: here: here: here: here: here: here: here: here: here: here: here: here: s s s s s s s s s s s s s s s s s s s s s s s s out out out out out out out out out out out out out out out out out out out out out out out Just Just Just Just Just Just Just Just Just Just Just Just Just Just Just Just Just Just Just Just TX, TX, TX, TX, TX, TX, TX, TX, TX, TX, TX, TX, TX, TX, TX, TX, TX, TX, TX, TX, it it it it it it it it it it it it it it it it it it it it photo photo photo photo photo photo photo photo photo photo photo photo photo photo photo photo photo photo photo Height: Height: Height: Height: Height: Height: Height: Height: Height: Height: Height: Height: Height: Height: Height: Height: Height: Height: Height: .ft .ft .ft .ft .ft .ft .ft .ft .ft .ft .ft .ft .ft .ft .ft .ft .ft .ft .ft Flow: Flow: Flow: Flow: Flow: Flow: Flow: Flow: Flow: Flow: Flow: Flow: Flow: Flow: Flow: Flow: Flow: Flow: Flow: : : : : : : : : : : : : : : : : : : : View View View View View View View View View View View View View View View View View View Join Join Join Join Join Join Join Join Join Join Join Join Join Join Join Join Join Join water water water water water water water water water water water water water water water water water water posted posted posted posted posted posted posted posted posted posted posted posted posted posted posted posted posted cfs cfs cfs cfs cfs cfs cfs cfs cfs cfs cfs cfs cfs cfs cfs cfs cfs Click Click Click Click Click Click Click Click Click Click Click Click Click Click Click Click Click are are are are are are are are are are are are are are are are are opening: opening: opening: opening: opening: opening: opening: opening: opening: opening: opening: opening: opening: opening: opening: opening: opening: team! team! team! team! team! team! team! team! team! team! team! team! team! team! team! team! team! ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? (.ft) (.ft) (.ft) (.ft) (.ft) (.ft) (.ft) (.ft) (.ft) (.ft) (.ft) (.ft) (.ft) (.ft) (.ft) (.ft) could could could could could could could could could could could could could could could could ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! might might might might might might might might might might might might might might might might The The The The The The The The The The The The The The The The Bayou Bayou Bayou Bayou Bayou Bayou Bayou Bayou Bayou Bayou Bayou Bayou Bayou Bayou Bayou from from from from from from from from from from from from from from from t t t t t t t t t t t t t t t Interested Interested Interested Interested Interested Interested Interested Interested Interested Interested Interested Interested Interested Interested Interested If If If If If If If If If If If If If If If looking looking looking looking looking looking looking looking looking looking looking looking looking looking looking check check check check check check check check check check check check check check check High High High High High High High High High High High High High High High fit fit fit fit fit fit fit fit fit fit fit fit fit fit fit you: you: you: you: you: you: you: you: you: you: you: you: you: you: you: apply: apply: apply: apply: apply: apply: apply: apply: apply: apply: apply: apply: apply: apply: fit: fit: fit: fit: fit: fit: fit: fit: fit: fit: fit: fit: fit: fit: Ck Ck Ck Ck Ck Ck Ck Ck Ck Ck Ck Ck Ck My My My My My My My My My My My My My about about about about about about about about about about about about TX! TX! TX! TX! TX! TX! TX! TX! TX! TX! TX! TX! but but but but but but but but but but but but";

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
