
class list{
  constructor(){
      this.obox = document.querySelector(".obox");
      console.log(this.obox)
      this.url = "http://localhost/1905/bestcake/index/json/goods2.json";

      this.init();
      this.addEvent();

    }
    addEvent(){
      var that = this;
      this.obox.onclick = function(eve){
          var e = eve || window.event;
          var t = e.target || e.srcElement;
          if(t.className == "addcar"){
            // 2.获取当前的商品ID
            that.id = t.parentNode.getAttribute("index");
            //  console.log(that.id)
              // 3.存localstorage
            
              that.setData();
          }
        }
      }
  setData(){

    this.goods = localStorage.getItem("goods");
      //  console.log(this.goods)
    if(this.goods){
        // 不是第一次
        // console.log(this.id)
        this.goods = JSON.parse(this.goods)

        var onoff = true;
        // 之后存
        for(var i=0;i<this.goods.length;i++){
            // 老的
            if(this.goods[i].id == this.id){
                this.goods[i].num++;
                onoff = false;
            }
        }
        // 新的
        if(onoff){
            this.goods.push({
                id:this.id,
                num:1
            })
        }
    }else{
       // 第一次存
        //    直接存
        console.log(this.id)
        this.goods = [{
            id:this.id,
            
            num:1
        }];
    }
    
    // 最后将数据设置回去
    localStorage.setItem("goods",JSON.stringify(this.goods))
}
    init(){
      var that = this;
      ajax({
        url:this.url,
        success:function(res){
          that.res = JSON.parse(res)
          that.display()
        }
      })
    }
    display(){
      // console.log(this.res)
      var str = "";
      for(var i=0;i<this.res.length;i++){
                  str += ` <li index="${this.res[i].goodsId}">
                                <a href="../detail/detail.html">
                                    <img src="${this.res[i].src}" alt="">
                                </a>
                                <span>${this.res[i].price}</span>
                                <em>.00</em>
                                <p>Sweetness:<img src="./img/star_3.jpg"></p>
                                <h2>${this.res[i].name}</h2>
                                <b class="addcar">加入购物车</b>
                                <a href="../car/car.html"><b id="car">立即购买</b></a>
                            </li>`
              
          
      }
      // console.log(str)
      this.obox.innerHTML = str;
  }
}
new list;


//商品图片切换效果
// class Dtab{
//   constructor(options){
//     this.li = $(".small").children("li");
//     // console.log($(".margin li"))
//     this.big = $(".small").siblings(".big")
//     // this.child = options.div;
    
//     this.init();

//   }
//   init(){
//     var that = this;
//     // console.log(this.li)
   
//     $(".shop").on("click",this.li,function(){
//       $(this.li).addClass("active").siblings().removeClass("active");
      
//       $(this.li).eq($(this).index()).show().siblings().hide();
//       console.log(1)
//     })
//   }
// }
// new Dtab({
//   li:$(".small").children("li"),
//   child:$("#txt").children("div")
// })






//公共头部的滚动产生阴影
$(document).ready(function(){
    var p =0,t=0;
    $(window).scroll(function(){
      p=$(this).scrollTop();
      if(t<=p){
  
        $("header").css("boxShadow","3px 3px 5px #ccc")
      }else{
        $("header").css("boxShadow","")
  
      }
      setTimeout(function(){t=p},0)
    })
    
    
  })

  //鼠标点击磅数选中
//   $(".size").children("li").click(function(){
//     console.log(1)
//     $(this).css({"background":"#01d5d8","color":" #fff"})
    
// })