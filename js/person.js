$.getJSON("data/live.json", function(data) {
//	var url = location.search.toString();
//	if(url.indexOf("?") != -1) { //判断是否有参数
//		var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
//		strs = str.split("="); //用等号进行分隔 （因为知道只有一个参数 所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
//		//alert(strs[1]); //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
//		var getID = strs[1];
//	}
	for(var i = 0; i < data.rows.length; i++) {
			$("#person").append("<div class='information'>"+"<div class='myicon'>"+"<img src="+data.rows[i].userIcon+" /></div>"
			+"<div class='information-id'><a href='#'>ID:"+data.rows[i].userID+"</a></div></div>"+
			"<ul class='users'>"+"<li><a href='#'>修改个人信息</a></li>"+
			"<li><a href='#'>修改密码</a></li>"+
			"<li><a href='userLive.html?id="+data.rows[i].userID+"'>我的作品</a></li>"+
			"</ul>"
		);
	}
});