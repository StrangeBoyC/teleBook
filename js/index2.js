$(window).on('load',function() {
    /**
     * 初始化设置
     */

        //获取第一个标题元素距离页面顶端的距离
    let top = $(".title:first").offset().top;
    //移动页面，使第一个title元素到mark的位置,并将title中的文字给mark
    window.scrollTo(0, top-80);
    $(".mark").html($(".title:first").html());

    /**
     * 滚动事件
     */
    let titles = $(".title");
    let obj = {};
    for(let i = 0; i < titles.length; i++) {
        obj["top" + i] = $(titles[i]).offset().top - 80;
    }
    $(window).scroll(function() {
        //如果页面向上拉伸的距离大于等于哪个title距离顶部的距离，就将哪个title中的文字给mark
        for(let i = 0; i < titles.length; i++) {
            if($(window).scrollTop() >= obj["top" + i] && $(window).scrollTop() <= obj["top" + (i + 1)]) {
                $(".mark").html($(".title").eq(i).html());
                $(".mark").css("height", "20px");
            }else if($(window).scrollTop() >= obj["top" + (titles.length-1)]
                && $(window).scrollTop() <= obj["top" + (titles.length-1)] + parseFloat($(".title").eq(titles.length-1).next('div').height())){
                $(".mark").html($(".title").eq(titles.length-1).html());
                $(".mark").css("height", "20px");
            }else if($(window).scrollTop() <= obj.top[0]) {
                $(".mark").html("");
                $(".mark").css("height", "0");
            }else if($(window).scrollTop() >= obj["top" + (titles.length-1)] + parseFloat($(".title").eq(titles.length-1).next('div').height())) {
                $(".mark").html("");
                $(".mark").css("height", "0");
            }
        }
    });

});

