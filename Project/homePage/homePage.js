// For homePage
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
	var sloganFlag=false;
	$("#title").click(function(){
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
  	$(".social div:first").mouseover(function() {
  		// $(this).css("border", "1px solid #f96b6b");
  		$(this).css("box-shadow", "3px 3px 5px #CCC");
  		$(this).css("border-radius", "3px");
  	});
  	$(".social div:first").mouseout(function() {
  		$(this).css("box-shadow", "none");
  		$(this).css("border-radius", "none");
  	});
  	$(".social div:first").click(function() {
  		$(".social img").fadeToggle(500);
  	});
  	$(".input input").focus(function() {
		/*border：1px soid #d7d7d7*/
		$(this).css("border", "1px solid #f96b6b");
  	});
  	$(".input input").blur(function() {
  		$(this).css("border", "1px solid #ABADB3");
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
  	// 添加点击 logoName 3 次 触发 彩蛋
  	var acc = 0;
  	$("#title").on("click", function(e) {
  		++acc;
  		if (acc == 3) {
  			$.snowflake();
  		}
  	});
  	$.extend({
    // 雪花飘落组件
    snowflake: function(options) {
        var flakeHtmlStr = '',
            config = {
                length: 26,     // 数量
                interval: 1000, // 雪花之间出现的时间间隔
                duration: 24000 // 雪花的动画时间
            };
        $.extend(config, options || {});

        var len = config.length,
            $win = $(window),
            win_width = $win.width(),
            win_height = $win.height(),
            timeoutId = null,
            $items,
            i,
            initStyle = {
                position: 'absolute',
                top: '-50px',
                zIndex: 9999,
                opacity: 1,
                fontSize: 0,
                color: '#FFF',
                width: '10px',
                height: '10px'
            },
            endStyle = {
                top: win_height + 50 + 'px',
                opacity: 0
            };

        // 插入DOM，并初始化其样式
        for (i = 0; i < len; i++) {
            flakeHtmlStr += '<div class="snow-flake"><img src="img/LOGO.png" width="40px" height="40px"></div>';
        }
        $(flakeHtmlStr).appendTo('body');
        $items = $('.snow-flake').css(initStyle).wrapAll('<div id="snowflake-box"></div>');

        // 处理单个雪花
        function handleItem(idx) {
            var $itm = $items.eq(idx).css(initStyle),
                w, val;
            $itm.css({
                fontSize: 20 + Math.ceil(Math.random() * 30, 10) + 'px'
            });
            w = $itm.width();
            val = Math.floor(Math.random() * win_width);
            if ((val + w) >= win_width) {
                val = val - w;
            }
            $itm.css({
                left: val + 'px'
            })
            .animate(endStyle, config.duration);
        }

        // 开始运行
        function running() {
            var i = 0;
            setTimeout(function call() {
                handleItem(i);
                if (i < len-1) {
                   i++;
                }
                else {
                    i = 0;
                }
                setTimeout(call, config.interval);
            }, 0);
        }
        running();
    }
});
});
