
$(document).ready(function(){
 	
	//平滑锚点
	$(".np1").click(function(){
			$('html, body').animate({
			scrollTop:$(".a1").offset().top-160}, 800);
		});
	$(".np2").click(function(){
			$('html, body').animate({
			scrollTop:$(".a2").offset().top}, 800);
		});
	$(".np3").click(function(){
			$('html, body').animate({
			scrollTop:$(".a3").offset().top}, 800);
		});
	$(".np4").click(function(){
			$('html, body').animate({
			scrollTop:$("html").offset().top}, 800);
		});
		
		
	$(".wraper").hover(function(){$(".np1").css("opacity","1");
		//$(".SqureBody").css("opacity","1");
	},
		function(){$(".np1").css("opacity","0");
		//$(".SqureBody").css("opacity","0");
	});
	$(".a1").hover(function(){$(".np2").css("opacity","1");
		$(".sb1").css("opacity","1");
	},
		function(){$(".np2").css("opacity","0");
		$(".sb1").css("opacity","0");
	});
		
		
	$(".a2").hover(function(){$(".np3").css("opacity","1");
		$(".sb2").css("opacity","1");
	},
		function(){$(".np3").css("opacity","0");
		$(".sb2").css("opacity","0");	
	});
	
	$(".a3").hover(function(){$(".np4").css("opacity","1");
		$(".sb3").css("opacity","1");	
	},
		function(){$(".np4").css("opacity","0");
		$(".sb3").css("opacity","0");	
	});

});