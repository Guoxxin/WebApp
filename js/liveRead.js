$.getJSON("data/live.json", function(data) {
	//alert(location.search.toString());
	var url = location.search.toString();
	if(url.indexOf("?") != -1) { //判断是否有参数
		var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
		strs = str.split("="); //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
		var getID = strs[1];
	}
	for(var i = 0; i < data.rows.length; i++) {
		if(getID == data.rows[i].liveID) {
				$("#liveread").append("<li>" +
					"<div class='livecopyright r'>" + "<p class='l'>" + data.rows[i].livetitle + "</p>" + "<span class='r'>" + "指导教师:" + data.rows[i].teacher + "</span>" + "</div>" +
					"<div class='l'><div class='userIcon'>" + "<a href='#'><img src='" + data.rows[i].userIcon + "' />" + "</a>" + "</div>" +
					"<div class='userName'><a href='#'>" + data.rows[i].userName + "</a></div>"
					+
					"</div>" +
					"<div class='livereadcontent'>" + data.rows[i].livecontent + "</a></div>" +
					"<div class='liveimg'>" + "<a href='#'><img src='" + data.rows[i].liveImg + "' />" + "</a>" +
					"<a href='#'><img src='" + data.rows[i].liveImg + "' />" + "</a>" +
					"<a href='#'><img src='" + data.rows[i].liveImg + "' />" + "</a>" + "</div>" +
					"<div class='livedate'>" + "<p class='r'>出自 " + data.rows[i].school + " " + data.rows[i].userclass + "</p>" + "<span class='l'>" + data.rows[i].livedate + "</span>" + "</div>" +
					"</li>");
		}
	}
});