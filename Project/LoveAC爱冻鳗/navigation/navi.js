$(document).ready(function(){
	//调整颜色
	AdjustColor();
 	//nav效果
  	$("nav ul li").hover(function(){
		if($(this).hasClass("i1")){
			  $("nav").css("background-color","#ff2a2a");
			  $("nav ul li").css("background-color","#ff2a2a");
			  $(".subNav").css("background-color","#f96b6b");
			  $("nav ul .i1 a").css("color","#ff2a2a");
			  
		}
		if($(this).hasClass("i2")){
			  $("nav").css("background-color","#bc2bff");
			  $("nav ul li").css("background-color","#bc2bff");
			  $("nav ul .i2 a").css("color","#bc2bff");
			  $(".i2 .subNav").css("background-color","#d375ff");
			  $(".i2 .subNav").css("z-index","3");
		}
		if($(this).hasClass("i3")){
			  $("nav").css("background-color","#ff9d1f");
			  $("nav ul li").css("background-color","#ff9d1f");
			  $("nav ul .i3 a").css("color","#ff9d1f");
			  $(".i3 .subNav").css("background-color","#ffc273");
			  $(".i3 .subNav").css("z-index","3");
		}
		if($(this).hasClass("i4")){
			  $("nav").css("background-color","#143e9f");
			  $("nav ul li").css("background-color","#143e9f");
			  $("nav ul .i4 a").css("color","#143e9f");
			  $(".i4 .subNav").css("background-color","#506fb4");
			  $(".i4 .subNav").css("z-index","3");
		}
		if($(this).hasClass("i5")){
			  $("nav").css("background-color","#ff5db1");
			  $("nav ul li").css("background-color","#ff5db1");
			  $("nav ul .i5 a").css("color","#ff5db1");
			  $(".i5 .subNav").css("background-color","#ff9bcf");
			  $(".i5 .subNav").css("z-index","3");
		}
		if($(this).hasClass("i6")){
			  $("nav").css("background-color","#1fbdff");
			  $("nav ul li").css("background-color","#1fbdff");
			  $("nav ul .i6 a").css("color","#1fbdff");
			  $(".i6 .subNav").css("background-color","#82daff");
			  $(".i6 .subNav").css("z-index","3");
		}
		if($(this).hasClass("i7")){
			  $("nav").css("background-color","#ffe034");
			  $("nav ul li").css("background-color","#ffe034");
			  $("nav ul .i7 a").css("color","#ffe034");
			  $(".i7 .subNav").css("background-color","#ffe972");
			  $(".i7 .subNav").css("z-index","3");
		}
		
		
		  
	  
  },function(){
	  		AdjustColor();
	  		//$("nav").css("background-color","#ff2a2a");
			//$("nav ul li").css("background-color","#ff2a2a");
			//$(".subNav").css("background-color","#f96b6b");
			  $("nav ul li a").css("color","#FFF");
			  $(".subNav").css("z-index","2");
			  });//移出时回复
});

function AdjustColor(){
			if($("html").hasClass("web1")){
				$("nav").css("background-color","#bc2bff");
				$("nav ul li").css("background-color","#bc2bff");
				$(".subNav").css("background-color","#d375ff");
				};
			if($("html").hasClass("web2")){
				$("nav").css("background-color","#ff9d1f");
				$("nav ul li").css("background-color","#ff9d1f");
				$(".subNav").css("background-color","#ffc273");
				};
			if($("html").hasClass("web3")){
				$("nav").css("background-color","#143e9f");
				$("nav ul li").css("background-color","#143e9f");
				$(".subNav").css("background-color","#506fb4");
				};
			if($("html").hasClass("web4")){
				$("nav").css("background-color","#ff5db1");
				$("nav ul li").css("background-color","#ff5db1");
				$(".subNav").css("background-color","#ff9bcf");
				};
			if($("html").hasClass("web5")){
				$("nav").css("background-color","#1fbdff");
				$("nav ul li").css("background-color","#1fbdff");
				$(".subNav").css("background-color","#82daff");
				};
			if($("html").hasClass("web6")){
				$("nav").css("background-color","#ffe034");
				$("nav ul li").css("background-color","#ffe034");
				$(".subNav").css("background-color","#ffe972");
				};}