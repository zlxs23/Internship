// homePage.js 备份
var biggerScale = 0.10;
// 获取 每个 pic width height
var widthHeight = [];
$(function(){
	// 记录 pic 原始 width height
	var initWidth = [];
	var initHeight = [];
	for (var i = 0; i < $(".tile img").length; i++) {
		initWidth.push($(this)[i].width());
		initHeight.push($(this)[i].height());
	};
	alert(initHeight);
	// 获取 每个 pic 当鼠标悬停于上 触发
	$(".tile img").mouseover(function() {
		var oldWidth = $(this).width();
		var oldHeight = $(this).height();
		newWidth = oldWidth * (1 + biggerScale);
		newHeight = oldHeight * (1 + biggerScale);
		$(this).animate({width: newWidth.toString() + "px", height: newHeight.toString() + "px"});
	});
	// 离开时 恢复 原始 size
	$(".tile img").mouseout(function() {
		for (var i = 0; i < initWidth.length; i++) {
			if (initWidth[i]
		}
		$(this).animate({width: newWidth.toString() + "px", height: newHeight.toString() + "px"});
	});
})

	// homePage.js
var biggerScale = 0.10;
var tileImg = ".tile img";
$(function() {
	$(tileImg).each(function(index) {
		Width = new Array();
		Height = new Array();
		Width[index] = $(this).width();
		Height[index] = $(this).height();
		alert(Width[index]);
	});
	alert(Width);
	$(tileImg).hover(function() {
		// over
		oldWidth = $(this).width();
		oldHeight = $(this).height();
		var newWidth = oldWidth * (1 + biggerScale);
		var newHeight = oldHeight * (1 + biggerScale);
		$(this).animate({width: newWidth.toString() + "px", height: newHeight.toString() + "px"});
	},
	function() {
		// out
		$(this).animate({width: oldWidth.toString() + "px", height: oldHeight.toString() + "px"});
	}
	)
})
		var index = $(this).attr(class).slice(1);
		alert(index);

// homePage.js
// var biggerScale = 0.10;
// var tileImg = ".tile img";
// Width = new Array();
// Height = new Array();
// $(function() {
// 	$(tileImg).each(function(index) {
// 		Width[index] = $(this).width();
// 		// alert(index);
// 		Height[index] = $(this).height();
// 		// alert(index);
// 		// alert(Width[index]);
// 	});


// '''	$(tileImg).mouseover(function() {
// 		// over
// 		var index = parseInt($(this).attr("class").slice(1)) - 1;
// 		var oldWidth = Width[index];
// 		var oldHeight = Height[index];
// 		// oldWidth = $(this).width();
// 		// oldHeight = $(this).height();
// 		var newWidth = oldWidth * (1 + biggerScale);
// 		var newHeight = oldHeight * (1 + biggerScale);
// 		$(this).stop().animate({width:newWidth.toString(), height: newHeight.toString() + "px"}, "fast", function() {
// 					// 变黑 出字
// 		$(this).addClass("blur");
// 		// BUG 鼠标悬停 多长时间 放大多少次
// 		$(this).parent().siblings("div").addClass("cover");
// 		});
// })

// 	function() {
// 		// out
// 		var index = parseInt($(this).attr("class").slice(1)) - 1;
// 		var newWidth = Width[index];
// 		var newHeight = Height[index];
// 		$(this).stop().animate({width: newWidth.toString() + "px", height: newHeight.toString() + "px"}, "fast", function() {
// 		$(this).removeClass("blur");
// 		$(this).parent().siblings("div").removeClass("cover");
// 		});
// 	}
// 	)
// })
// $(document).ready(function() {
// 	var tile = $(".tile");
// 	var tileImg = $(".tile img");
// 	tile.mouseover(function() {
// 		$(this).
// 	})
// })
// $(function() {
// 	alert("dfjls");
// })


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
                color: '#FFF'
            },
            endStyle = {
                top: win_height + 50 + 'px',
                opacity: 0
            };
 
        // 插入DOM，并初始化其样式
        for (i = 0; i < len; i++) {
            flakeHtmlStr += '<div class="snow-flake">&#10052;</div>';
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
 
$.snowflake(); // 调用 