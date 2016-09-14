// JavaScript Document
$(document).ready(function(e) {
    $(".content .img img").hover(function(e){
		$(this).fadeTo(700,0.2)
	},function(e){
		$(this).fadeTo(500,1)
		});
	$(".content .return1 a").hover(function(e){
		$(".content .return img").fadeTo(700,1);
		$(".content .return1 a").fadeTo(700,0)
	},function(e){
		$(".content .return img").fadeTo(500,0);
		$(".content .return1 a").fadeTo(500,1)
		});
	$(".content .img1").hover(function(e){
		$(this).fadeTo(700,0.7)
	},function(e){
		$(this).fadeTo(500,1)
		});
});

   