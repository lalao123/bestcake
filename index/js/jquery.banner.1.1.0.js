;(function($){
  "use strict";

  $.fn.banner = function(options){
     var {list,items,left,right,autoPlay,delayTime,moveTime,index} = options;

     list = list===false ? false : true;
     autoPlay = autoPlay===false ? false : true;
     delayTime = delayTime || 2000;
     moveTime = moveTime || 200;
     index = index || 0;

     let move = function(direct){
       items.eq(iPrev).css({
           left:0
       }).stop().animate({
           left:items.eq(0).width()*direct
       },moveTime).end().eq(index).css({
           left:-items.eq(0).width()*direct
       }).stop().animate({
           left:0
       },moveTime)

       if(list){
            $(".list").children().eq(iPrev).css({background:""}).end().eq(index).css({background:"orange"});
       }
     }

     let iPrev = items.length-1;
     function rightEvent(){
         if(index == items.length-1){
              index = 0;
              iPrev = items.length-1
         }else{
             index++;
             iPrev = index-1;
         }
         move(-1)
     }
     function leftEvent(){
         if(index == 0){
              index = items.length-1;
              iPrev = 0
         }else{
             index--;
             iPrev = index +1;
         }

         move(1)
     }
     if(left != undefined && left.length>0 && right != undefined && right.length>0){
        
        console.log("有左右按钮")
        left.click(leftEvent);
        right.click(rightEvent);
     }

     if(list){
        console.log("有list按钮")

        var str ="";
        for(var i=0;i<items.length;i++){
            str +=`<li></li>`
        }
        this.append($("<ul class='list'>").html(str));
        $(".list").css({
            width:"84px",
            height:12,
            background:"rgba(255,165,0,0.5)",
            color:"#fff",
            position:"absolute",
            left:800,bottom:15,
            listStyle:"none",padding:0,
            display:"flex"
        }).children().css({
            width:"10px",
            height:"10px", 
            border:"solid 1px #fff",
            float:"right"
            // borderRight:"solid 1px #ccc",
            // lineHeight:"25px",
            // textAlign:"center"
        }).eq(index).css({
            background:"orange"
        })
        
        let move = function(direct,iPrev,iNow){
            items.eq(iPrev).css({
                left:0
            }).stop().animate({
                left:-items.eq(0).width()*direct
            },moveTime).end().eq(iNow).css({
                left:items.eq(0).width()*direct
            }).stop().animate({
                left:0
            },moveTime)
        }

        $(".list").children("li").click(function(){
            //判断方向计算索引
            
            if($(this).index()>index){//要走的索引小于当前索引
                //移动
                move(1,index,$(this).index())
            }
            if($(this).index()<index){

                move(-1,index,$(this).index())
            }
           $(".list").children("li").eq(index).css({background:""}).end().eq($(this).index()).css({background:"orange"})

           index = $(this).index();
            
        })
     }

     if(autoPlay){
         let timer;

         timer = setInterval(() => {
             rightEvent()
         },delayTime);

         this.hover(function(){
             clearInterval(timer);
         },function(){
             timer = setInterval(() => {
                 rightEvent()
             },delayTime);
         })
     }
  }
})(jQuery);