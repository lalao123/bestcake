
class detail{
  constructor(){
      this.shop = document.querySelector(".shop");
      // console.log(this.shop)
      this.url = "http://localhost/1905/bestcake/index/json/goods1.json";

      this.init();

  }
  setData(callback){
    for(var i=0;i<this.goods.length;i++){
        if(this.goods[i].id == this.id){
            callback(i);
        }
    }
    localStorage.setItem("goods",JSON.stringify(this.goods));
}

  init(){
      var that = this;
      ajaxPost(this.url,function(res){
        that.res = JSON.parse(res)
        that.getData();

      })
    }
    getData(){
      this.goods = localStorage.getItem("goods") ? JSON.parse(localStorage.getItem("goods")) : [];
      
      // console.log(this.goods)
      this.display();    
    }
    display(){
      // console.log(this.res)
      var str = "";
      for(var i=0;i<this.res.length;i++){
        // console.log(1)
        for(var j=0;j<this.goods.length;j++){
          // console.log(this.goods.length)
          // console.log(1)
          // console.log(this.res.src1)
          if(this.res[i].goodsId == this.goods[j].id){
                  str += `<div class="main-head" index="${this.res[i].goodsId}">
                          <p> <span>经典系列</span> > <span>${this.res[i].name}</span></p>
                            <div class="tu-left">
                            <div class="text" id="txt">
                                <div class="big">
                                  <img src="${this.res[i].bigtu1}"/>
                                </div>
                                <div class="big">
                                  <img src="${this.res[i].bigtu2}"/>
                                </div>
                                <div class="big">
                                  <img src="${this.res[i].bigtu3}"/>
                                </div>
                                <div class="big">
                                  <img src="${this.res[i].bigtu4}"/>
                                </div>
                            </div>
                                <ul class="small">
                                  <li class="active"><img src="${this.res[i].bigtu1}" alt=""></li>
                                  <li><img src="${this.res[i].bigtu2}" alt=""></li>
                                  <li><img src="${this.res[i].bigtu3}" alt=""></li>
                                  <li><img src="${this.res[i].bigtu4}" alt=""></li>
                                </ul>
                            </div>
                            <div class="tu-right">
                                <div class="r-top">
                                  <p>${this.res[i].name}</p>
                                  <h2>${this.res[i].price}</h2>
                                  <span>甜度:  <img src="./img/star.png" alt=""></span>
                                  <ul class="size">
                                      <li><span>1.2磅</span></li>
                                      <li><span>2.2磅</span></li>
                                      <li><span>3.2磅</span></li>
                                      <li><span>7.2磅</span></li>
                                  </ul>
                                </div>
                                <div class="r-bottom">
                                  <ul class="tableware">
                                      <li><img src="./img/message-one.png" alt=""><span>13.5*13.5cm</span></li>
                                      <li><img src="./img/message-one.png" alt=""><span>适合4-5人分享</span></li>
                                      <li><img src="./img/message-one.png" alt=""><span>含五人份餐具</span></li>
                                      <li><img src="./img/message-one.png" alt=""><span>至少需提前一天预约</span></li>
                                      <li><input type="number" min="1"></li>
                                  </ul>
                                  <a href="../car/car.html"><button id="btn">立即购买</button></a>
                                </div>
                            </div>
                        </div>`
              }
          }
      }
      // console.log(str)
      this.shop.innerHTML = str;
  }
}
new detail;


//商品图片切换效果
class Dtab{
  constructor(options){
    this.init();
    
  }
  init(){
    var that = this;
    // console.log(this.li)
    
    $(".shop").on("click",".small li",function(){
      // console.log(this)
      $(this).addClass("active").siblings().removeClass("active");
      $(".big").eq($(this).index()).css({top:-440,display:"block"}).stop().animate({
  
        // display:"block",
        top:0
       
      },1000).siblings().css({display:"none",top:-440})
      // console.log(1)
    })
  }
}
new Dtab({
  li:$(".small").children("li"),
  child:$("#txt").children("div")
})






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