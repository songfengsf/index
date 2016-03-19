(function () {
    //->数据源
    var ary = ["img/smallLB1.jpg", "img/smallLB2.jpg", "img/smallLB3.jpg", "img/smallLB4.jpg", "img/smallLB5.jpg", "img/smallLB6.jpg", "img/smallLB7.jpg", "img/smallLB8.jpg"];

    //->定义几个初始的变量
    var autoTimer = null, step = 0, count = 2;
    var inner = document.getElementById("smallInner"), imgList = inner.getElementsByTagName("img");
    var btnLeft = document.getElementById("smallBtnLeft"), btnRight = document.getElementById("smallBtnRight");

    //->数据绑定
    bindData();
    function bindData() {
        //->图片
        var str = "";
        for (var i = 0; i < ary.length; i++) {
            str += "<div><img src='' trueImg='" + ary[i] + "'/></div>";
        }
        str += "<div><img src='' trueImg='" + ary[0] + "'/></div>";
        str += "<div><img src='' trueImg='" + ary[1] + "'/></div>";
        str += "<div><img src='' trueImg='" + ary[2] + "'/></div>";
        str += "<div><img src='' trueImg='" + ary[3] + "'/></div>";

        inner.innerHTML = str;
        inner.style.width = (count + 1) * 1004 + "px";

    }

    //->图片延迟加载
    window.setTimeout(lazyImg, 500);
    function lazyImg() {
        for (var i = 0; i < imgList.length; i++) {
            ~function (i) {
                var curImg = imgList[i];
                var oImg = new Image;
                oImg.src = curImg.getAttribute("trueImg");
                oImg.onload = function () {
                    curImg.src = this.src;
                    curImg.style.display = "block";
                    animate(curImg, {opacity: 1}, 500);
                }
            }(i);
        }
    }


    //->实现左右切换
    btnRight.onclick = function () {
        autoMove();
    };

    btnLeft.onclick = function () {
        step--;
        if (step < 0) {
            step = count - 1;
            inner.style.left = -count * 1000 + "px";
        }
        animate(inner, {left: -step * 1000}, 500);
    };
    
    //->实现自动轮播
    function autoMove() {
        step++;
        if (step > count) {
            step = 1;
            inner.style.left = 0;
        }
        animate(inner, {left: -step * 1000}, 500);
    }
})();