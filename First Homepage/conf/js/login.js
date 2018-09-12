function showModal(){
	var fra = document.getElementById("modal");
	var modal_list = fra.children;
	for(var i=0;i<modal_list.length;i++){
		modal_list[i].classList.remove("hide");
	}
}
function hideModal(){
	var fra = document.getElementById("modal");
	var modal_list = fra.children;
	for(var i=0;i<modal_list.length;i++){
		modal_list[i].classList.add("hide");
	}
}
function resetAll(){
	var tags = document.getElementsByClassName("inputbox");
	for(var i=0;i<tags.length;i++){
		tags[i].value = "";
	}
}
function log_in(){
	var usr = "julian";
	var pword = "123";
	var username = document.getElementById("user").value;
	var passwd = document.getElementById("pwd").value;
	if(username==usr && passwd==pword){
		window.open("bin/backpage.html")
	}else{
		document.getElementById("pwd").value = "";
		alert("用户名或密码错误！");
	}
}
