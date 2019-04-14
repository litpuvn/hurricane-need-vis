

function Tweet(userId, tweet, timestamp){
	var html = "";
		if(userId.length == 0){
			return 0;
		}
		else{
			for (var i = 0; i< userId.length; i++) {
				html += '<li>';
				html += '<div class="avatar">';
				// html += '<img src="data/tweet/images/avatar[i].jpg">';
				avatar_num = Math.round(Math.random()*4);
				avatar = 'avatar' + avatar_num;
				html += '<img src="data/tweet_avatar/'+ avatar +'.jpg">'
				html += '</div>';
				html += '<div class="bubble-container">';
				html += '<div class="bubble">';
				//twitter id
				html += '<div id="userId" style="filter: blur(3px); display:inline;"><h3>' + '@' + userId[i] + '</h3></div>';
				html += '<div id="timestamp" style="margin-top:5px; display:inline; "><h5>' + timestamp[i] + '</h5></div>';
				//twitter content
			html += tweet[i];
				html += '</div>';
				html += '<div class="arrow"></div>';
				html += '</div>';
				html += '</li>';
			}
		}
	$('.tweet').append(html);
}
