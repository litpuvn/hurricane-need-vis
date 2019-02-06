function showTweet(region_name){
	var html = "";
		for (var i = 0; i< 4; i++) {
			html += '<li>';
			html += '<div class="avatar">';
			// html += '<img src="data/tweet/images/avatar[i].jpg">';
			html += '<img src="http://www.croop.cl/UI/twitter/images/carl.jpg">'
			html += '<div class="hover">';
			html += '<div class="icon-twitter"></div>';
			html += '</div>';
			html += '</div>';
			html += '<div class="bubble-container">';
			html += '<div class="bubble">';
			//twitter id
			html += '<h3>@russel</h3>';
			html += '<br/>';
			//twitter content
		    html += 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, iusto, maxime, ullam autem a voluptate rem quos repudiandae.';
			html += '<div class="over-bubble">';
			html += '<div class="icon-mail-reply action"></div>';
			html += '<div class="icon-retweet action"></div>';
			html += '<div class="icon-star"></div>';
			html += '</div>';
			html += '</div>';
			html += '<div class="arrow"></div>';
			html += '</div>';
			html += '</li>';
		}
	$('.tweet').append(html);
}
