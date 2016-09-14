// JavaScript Document
// 添加点击 logoName 3 次 触发 彩蛋
$(function() {
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
})