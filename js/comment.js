$.getJSON("data/comment.json", function(data) {
	var url = location.search.toString();
	if(url.indexOf("?") != -1) {
		var str = url.substr(1); 
		strs = str.split("="); 
		var getID = strs[1];
	}
	for(var i = 0; i < data.rows.length; i++) {
		if(getID == data.rows[i].liveID) {
			$("#comment").append("<li class='comment'>" + "<a href='comUser.html?id=" + data.rows[i].cID + "'>" + data.rows[i].cName + "</a>" + "<p>" + data.rows[i].commContent + "</p>" + "</li>" +
				"<li class='comment'><a href='user.html?id=" + data.rows[i].userID + "'>" + data.rows[i].userName + "</a>" + "<p>回复</p>" + "<a href='comUser.html?id=" + data.rows[i].cID + "'>" + data.rows[i].cName + "</a>" + "<p>请多多指教</p></li>");
		}
	}
});