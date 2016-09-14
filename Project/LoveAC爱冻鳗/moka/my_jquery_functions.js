$(document).ready(function(){
	//获取图片
	var img=$(".banner img");
	//设置时间初始值
	var time=null;
	//设置显示图片初始值
	var now=-1;
	//获取图片宽度
	var width=$(".banner img").width();
	//设置div.banner的宽度
	//$(".banner").width(width);
	//获取图片高度
	var height=$(".banner img").height();
	//设置div.banner的高度
	//$(".banner").height(height);
	//设置ul宽度
	$(".banner .change ul").width(27*img.length);
	//添加li个数
	for(i=0;i<img.length;i++){
		$(".banner .change ul").append($("<li></li>"));
	};
	var li=$(".banner .change ul li");
	img.first().addClass("now");
	li.first().addClass("white");
	//li的鼠标悬浮变色，显示相应图片，并停止滚动
	img.mouseover(function(){
		clearTimeout(time);
	});
	img.mouseout(function(){
		time=setInterval(function(){changebanner()},3000)
	});
	
	li.mouseover(function(){
		clearTimeout(time);
		now=$(this).index()-1;
		img.eq(now).siblings().stop(true,false);
		changebanner();
	});
	
	//自动切换函数
	function changebanner(){
		clearInterval(time);
		now+=1;
		if(now>img.length-1){
			now=0;
		};
		li.eq(now).addClass("white").siblings().removeClass("white");
		img.eq(now).addClass("now").fadeTo("slow",1).siblings().removeClass("now").fadeTo("slow",0);
		time=setTimeout(function(){changebanner();},3000);
		return now;
	}
	changebanner();
	//翻页
	$(".banner .btn .pre").click(function(){
		clearTimeout(time);
		if(now==-1){
			now=img.length-1;
		};
		now-=2;
		img.eq(now).siblings().stop(true,false);
		changebanner();
	});
	$(".banner .btn .next").click(function(){
		clearTimeout(time);
		img.eq(now).siblings().stop(true,false);
		changebanner();
	});
	//表单验证
	var user=$(".myform input[name='user']");
	var pass01=$(".myform input[name='pass01']");
	var pass02=$(".myform input[name='pass02']");
	user.blur(function(){
		if(/^\w+$/.test(user.val())!=true){
			user.next().html("*用户名格式不正确");
			}
		else{
			user.next().html("*格式正确");
			};
		});
	pass01.blur(function(){
		if(/^\w+$/.test(user.val())!=true){
			pass01.next().html("*密码格式不正确");
			}
		});
	pass02.blur(function(){
		if(pass01.val()!=pass02.val()){
			pass02.next().html("*两次输入密码不一致");
			}
		});
	$(".myform input[value='注册']").click(function(){
		if((/^\w+$/.test(user.val())!=true)||(/^\w+$/.test(user.val())!=true)||(pass01.val()!=pass02.val())){
			alert("您填写的信息有误，请重新填写!");
			return false;
			}
		else{
			return true;
			};
		});	
});