// For homePage
// 辅助判断
loginData = {
	pb: "1995",
	mzc: "1995",
	mz: "1995",
	sl: "1995",
	ljh: "1995",
	zk: "1995",
	qww: "1995"
};
$(function() {
	$("#logo").click(function() {
		$(".blur").css("display", "block");
		$(".login").css("display", "block");
	});
	$(".close").mouseover(function() {
		$(".close").css("background-image", "url('img/redX.png')");
		$(".close").css("color","white");
		$(".close").css("border-left","hidden");
	});
	$(".close").mouseout(function() {
		$(".close").css("background-image", "none");
		$(".close").css("color","black");
		$(".close").css("border-left","1px solid #D3D3D3");
	});
	$(".close").click(function() {
		$(".blur").css("display", "none");
		$(".login").css("display", "none");
	});
	//鳗鱼飞动画
	var sloganFlag=false;
	$("#title img").click(function(){
		var fish=$("#logo img");
		fish.animate({left:"110px"},"slow");
		fish.animate({left:"964px"},"slow");
		if(sloganFlag==false){
			$("#slogan").delay(500).animate({width:"270px"},"slow");
			sloganFlag=!sloganFlag;
			}
		else if(sloganFlag==true){
			$("#slogan").delay(270).animate({width:"0px"},"slow");
			sloganFlag=!sloganFlag;
			}
  	});
  	// 社交触发
  	// 1
	$(".social div:first").mouseover(function() {
		// $(this).css("border", "1px solid #f96b6b");
		$(this).css("box-shadow", "3px 3px 5px #CCC");
		$(this).css("border-radius", "3px");
  	});
  	// 2
  	$(".social div:first").mouseout(function() {
  		$(this).css("box-shadow", "none");
  		$(this).css("border-radius", "none");
  	});
  	// 3
  	$(".social div:first").click(function() {
  		$(".social img").fadeToggle(500);
  	});
  	// 鼠标在输入框时
  	$(".input input").focus(function() {
		/*border：1px soid #d7d7d7*/
		$(this).css("border", "1px solid #f96b6b");
  	});
  	// 鼠标离开输入框时
  	$(".input input").blur(function() {
  		$(this).css("border", "1px solid #ABADB3");
  	});
  	// 慢速置顶
	$("#mktop").click(function(){
			$('html, body').animate({
			scrollTop:$("html").offset().top}, 800);
		});
	// 获取 input 框 提交内容
  	$(".l3 button").click(function() {
  		// 读取 提交数据 From input
  		var userName = $("[type$=text]").val();
  		var passWord = $("[type$=password]").val();
  		// 读取 loginData From object
  		if (userName in loginData) {
  			if (passWord == loginData[userName]) {
  				alert("Hello " + userName);
  			}
  			else {
  				alert(userName + "\'s Password is Error");
  			}
  		}
  		else {
  			alert(userName + " is no Exist");
  		}
  	});
})