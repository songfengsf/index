~function(){
    var ary=["北京","上海","天津","重庆","河北","山西","河南","辽宁","吉林","黑龙江","内蒙古","江苏","山东","安徽","浙江","福建","湖北","湖南","广东","广西","江西","四川","海南","贵州","云南","西藏","陕西","甘肃","青海","宁夏","新疆","台湾","香港","澳门","钓鱼岛","海外"];
    var place=document.getElementById("place");
    //var allPlace=place.getElementById("allPlace");
    //var liPlace=place.getElementById("liPlace");
    var allPlace=document.getElementById("allPlace");
    var liPlace=document.getElementById("liPlace");
    var tCenter=document.getElementById("tCenter");
    var name=document.getElementById("name");
    var allA=allPlace.getElementsByTagName("a");
    function bind(){
        var str="";
        for(var i=0;i<ary.length;i++){
            str +="<a herf='javascript:;'>"+ary[i]+"</a>";
        }
        allPlace.innerHTML=str;
    }
bind();


        //e=e||window.event;
        //var tar= e.target|| e.srcElement;
        //
        //if(tar.id==="liPlace"){
        liPlace.onmouseover=function(){
            allPlace.style.display="block";
            liPlace.style.backgroundColor="white";

        };

    //tCenter.onmouseout=function(e) {//利用事件委托做onmouserout事件处理
    //    e = e || window.event;
   ///     var tar = e.target || e.srcElement;
   //     if (tar.id === "liPlace") {
   //         console.log("ok1");
            liPlace.onmouseout = function () {
                allPlace.style.display = "none";
                liPlace.style.backgroundColor = "#f1f1f1";

            }
        //}
    //};
    /*点击换地点*/
    document.body.onclick=function(e){   //事件委托做点击换地点
        e=e||window.event;
        var tar= e.target|| e.srcElement;
        var name=document.getElementById("name");

        if(tar.tagName.toLowerCase()==="a"&&tar.parentNode.id === "allPlace"){
            console.log(tar);
            name.innerHTML=tar.innerHTML;
            for(var i=0;i<allA.length;i++){
                allA[i].className=""
            }
            tar.className="bg"
        }
    };

/*给leftList绑定滑过事件---------------------------------------------------*/
    var div1=document.getElementById("leftList"),list=div1.getElementsByTagName("li"),
        oDiv=div1.getElementsByTagName("div");
    //for(var i=0;i<oDiv.length;i++){
    //    oDiv[i].style.top=-30*i+"px"
    //}


    for(var i=0;i<list.length;i++){
        var curList=list[i];
        curList.index=i;
        list[i].onmouseover=function(){
            oDiv[this.index].style.display="block"
            oDiv[this.index].style.top=-31*this.index+"px";
        }
    }
    for(var i=0;i<list.length;i++){
        var curList=list[i];
        curList.index=i;
        list[i].onmouseout=function(){
            oDiv[this.index].style.top=-30*i+"px"
            oDiv[this.index].style.display="none"
        }
    }


    /*轮播图右边的小选项卡*/
    var selectUL=document.getElementById("selectUL");
    var selectDiv=document.getElementById("selectDiv");
    var select=document.getElementById("select");
    var allLis=select.getElementsByTagName("li");
    var allDiv=selectDiv.getElementsByTagName("div");
    for(var i=0;i<allLis.length;i++){
        allLis[i].index=i;
        zhufengEvent.on(allLis[i],"mouseenter",change);
        zhufengEvent.on(allLis[i],"mouseleave",leave);
    }


    selectDiv.sign=false;
    function change(e){
        for(var i=0;i<allDiv.length;i++){ //每次划过的时候让先让每个div隐藏，然后在让滑过的那个li对应的div显示
            allDiv[i].style.display="none";
        }

        allDiv[e.target.index].style.display="block";
        animate(selectDiv, {top: 70}, 300,animateMOve);

        function animateMOve() {
            animate(selectUL, {top: -46}, 300)
            animate(selectDiv, {top: 30}, 300)
        }

    }

   /* function animateMOve(){
        animate(selectUL, {top: -46}, 300)
        animate(selectDiv, {top: 30}, 300)
    }*/
    function leave(){
        //console.log("ok2")
        for(var i=0;i<allLis.length;i++){
            var curAllLi=allLis[i];
            curAllLi.index=i;
            //allDiv[curAllLi.index].style.display="none"
        }
    }
    /*--------------红线--------------------------------------------------------------*/
    var line=document.getElementById("line"),redL=document.getElementById("redL");


    redL.addEventListener("mouseenter",function(e){
        console.log("ok78")
        e= e|| window.event;

        if(line.style.display==="block"){
            line.style.display="none";
            line.style.left=0;
            lineMove()
        }else{
            lineMove();
        }

    },false);


    function lineMove(){
        line.style.display="block";
        animate(line, {left: 848}, 500)
    }
    //redL.onmouseover=function(){
    ////    if(line.flag){
    ////        line.style.display="none";
    ////        animate(line, {left: 0}, 1,lineMove)
    ////        return
    ////    }
    ////    line.flag="";   为什么设置自定义属性不行啊？？？？？
    ////   lineMove();
    ////
    ////};
    ////function lineMove(){
    ////    line.style.display="block";
    ////    animate(line, {left: 848,flag:1}, 500)
    //    line.style.display="none";
    //    lineMove();
    //
    //};


}();