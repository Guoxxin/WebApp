$.getJSON("data/live.json", function(data) {
	for(var i=0; i<data.rows.length;i++){
		$("#live").append("<li>"
		+"<div class='livecopyright r'>"+"<p class='l'>"+data.rows[i].livetitle+"</p>"+"<span class='r'>"+"指导教师:"+data.rows[i].teacher+"</span>"+"</div>"
		+"<div class='l'><div class='userIcon'>"+"<a href='Luser.html?id="+data.rows[i].userID+"'><img src='"+data.rows[i].userIcon+"' />"+"</a>"+"</div>"
		+"<div class='userName'><a href='#'>"+data.rows[i].userName+"</a></div>"
		+"</div>"
		+"<div class='livecontent'><a href='#'>"+data.rows[i].livecontent+"</a></div>"
		+"<div class='liveimg'>"+"<a href='#'><img src='"+data.rows[i].liveImg+"'class='zimg'/>"+"</a>"+
		"<a href='#'><img src='"+data.rows[i].liveImg+"' />"+"</a>"+
		"<a href='#'><img src='"+data.rows[i].liveImg+"' />"+"</a>"+"</div>"
		+"<div class='livedate'>"+"<p class='r'>出自 "+data.rows[i].school+" "+data.rows[i].userclass+"</p>"+"<span class='l'>"+data.rows[i].livedate+"</span>"+"</div>"
		+"<div class='comment'><a href='comUser.html?id="+data.rows[i].cID+"'>"+data.rows[i].cName+"</a>"+"<p>"+data.rows[i].commContent+"</p></div>"
		+"<div class='comment'><a href='Luser.html?id="+data.rows[i].userID+"'>"+data.rows[i].userName+"</a>"+"<p>回复</p>"+"<a href='comUser.html?id="+data.rows[i].cID+"'>"+data.rows[i].cName+"</a>"+"<p>请多多指教</p></div>"
		+"<input type='text' placeholder='评论'/>"
		+"</li>");
	}
});
