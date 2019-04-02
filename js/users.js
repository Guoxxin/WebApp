$.getJSON("data/live.json", function(data) {
	var url = location.search.toString();
	if(url.indexOf("?") != -1) {
		var str = url.substr(1); 
		strs = str.split("=");
		var getID = strs[1];
	}
	for(var i = 0; i < data.rows.length; i++) {
		if(getID==data.rows[i].userID) {
			$("#LUser").append("<div class='information'>"+"<div class='myicon'>"+"<img src="+data.rows[i].userIcon+" /></div>"
			+"<div class='information-id'><a href='#'>ID:"+data.rows[i].userID+"</a></div></div>"+
			"<ul class='users'>"+"<li><a href='#'>姓名<span>"+data.rows[i].userName+"</span></a></li>"+
			"<li><a href='userLive.html?id="+data.rows[i].userID+"'>ta的作品</a></li>"+
			"</ul>"
			);
		}
	}
});