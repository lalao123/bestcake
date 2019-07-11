//匠心原创
class List{
    constructor(){
      this.cont = document.getElementById("cont");
      this.url ="http://localhost/1905/bestcake/index/json/goods1.json";

      this.init();
      this.addEvent();
    
    }
    addEvent(){
      var that = this;
      this.cont.onclick = function(eve){
          var e = eve || window.event;
          var t = e.target || e.srcElement;
          if(t.className == "odiv"){
            // console.log(this.id)
              // 2.获取当前的商品ID
              that.id = t.parentNode.parentNode.getAttribute("index");
              // 3.存localstorage
            
              that.setData();
          }
      }
  }
  setData(){

    this.goods = localStorage.getItem("goods");
        this.goods = [{
            id:this.id,
            
            num:1
        }];
    // }
    
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
      var str = "";
      for(var i=0;i<this.res.length;i++){
        str += `<li index="${this.res[i].goodsId}">
                            <a href="../detail/detail.html" >
                                <img src="${this.res[i].src}" class="odiv">
                                <p>${this.res[i].name}</p>
                                <span>${this.res[i].price}</span>
                                <b>${this.res[i].num}</b>
                            </a>
                            <a href="../car/car.html"><i class="box"></i></a>
                    </li>`
      }
      this.cont.innerHTML = str;
          }
      }
  new List;

  //贝式严选
  class List1{
    constructor(){
      this.cont1 = document.getElementById("cont1");
      this.url ="http://localhost/1905/bestcake/index/json/goods2.json";

      this.init();
    
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
      var str = "";
      for(var i=0;i<this.res.length;i++){
        str += `<li index="${this.res[i].goodsId}">
                        <a href="../product/product.html">
                            <img src="${this.res[i].src}">
                            <p>${this.res[i].name}</p>
                            <span>${this.res[i].price}</span>
                            <b>${this.res[i].num}</b>
                            <i></i>
                        </a>
                    </li>`
      }
      this.cont1.innerHTML = str;
          }
      }
  new List1;
//网红爆款
  class List2{
    constructor(){
      this.cont2 = document.getElementById("cont2");
      this.url ="http://localhost/1905/bestcake/index/json/goods3.json";

      this.init();
    
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
      var str = "";
      for(var i=0;i<this.res.length;i++){
        // console.log(this.res.length)
        str += `<li index="${this.res[i].goodsId}">
                        <a href="../product/product.html">
                            <img src="${this.res[i].src}">
                            <p>${this.res[i].name}</p>
                            <span>${this.res[i].price}</span>
                            <b>${this.res[i].num}</b>
                            <i></i>
                        </a>
                    </li>`
      }
      this.cont2.innerHTML = str;
          }
      }
  new List2;

//猜您喜欢
  class List3{
    constructor(){
      this.cont3 = document.getElementById("cont3");
      this.url ="http://localhost/1905/bestcake/index/json/goods4.json";

      this.init();
    
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
      var str = "";
      for(var i=0;i<this.res.length;i++){
        str += `<li index="${this.res[i].goodsId}">
                        <a href="../product/product.html">
                            <img src="${this.res[i].src}">
                            <p>${this.res[i].name}</p>
                            <span>${this.res[i].price}</span>
                            <b>${this.res[i].num}</b>
                            <i></i>
                        </a>
                    </li>`
      }
      this.cont3.innerHTML = str;
          }
      }
  new List3;
//banner图的二级菜单1
  class List4{
    constructor(){
      this.cont4 = document.getElementById("cont4");
      this.url ="http://localhost/1905/bestcake/index/json/goods5.json";

      this.init();
    
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
      var str = "";
      for(var i=0;i<this.res.length;i++){
        str += `<li index="${this.res[i].goodsId}">
                    <a href="#">
                        <img src="${this.res[i].src}">
                        <span>${this.res[i].name}</span>
                    </a>
                </li>`
      }
      this.cont4.innerHTML = str;
          }
      }
  new List4;
  //banner图的二级菜单2
  class List5{
    constructor(){
      this.cont5 = document.getElementById("cont5");
      this.url ="http://localhost/1905/bestcake/index/json/goods6.json";

      this.init();
    
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
      var str = "";
      for(var i=0;i<this.res.length;i++){
        str += `<li index="${this.res[i].goodsId}">
                    <a href="#">
                        <img src="${this.res[i].src}">
                        <span>${this.res[i].name}</span>
                    </a>
                </li>`
      }
      this.cont5.innerHTML = str;
          }
      }
  new List5;
//banner图的二级菜单3
class List6{
    constructor(){
      this.cont6 = document.getElementById("cont6");
      this.url ="http://localhost/1905/bestcake/index/json/goods7.json";

      this.init();
    
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
      var str = "";
      for(var i=0;i<this.res.length;i++){
        str += `<li index="${this.res[i].goodsId}">
                    <a href="#">
                        <img src="${this.res[i].src}">
                        <span>${this.res[i].name}</span>
                    </a>
                </li>`
      }
      this.cont6.innerHTML = str;
          }
      }
  new List6;


//轮播图
$(".banner-right").banner({
    items:$(".banner-right .imgbox").children(),
    left:$(".banner-right #left"),
    right:$(".banner-right #right"),
    list:true,
    autoPlay:true,
    delaytime:4000,
    movetime:3000,
    index:0
});

//公共头部去登陆效果
class Index{
  constructor(){
      this.notLogin = document.querySelector(".not-login")
      this.loginS = document.querySelector(".login-success")
      this.user = document.querySelector(".login-success span")

      this.logout = document.querySelector(".logout");

      // 获取所有的用户信息
      this.init();
      // 添加注销事件
      this.addEvent();
  }
  addEvent(){
      // 点击注销时
      this.logout.onclick = ()=>{
        for(var i=0;i<this.usermsg.length;i++){
          // console.log(this.usermsg.length)
              // 找到要注销的账号
              console.log(this.user)
              console.log(this.name == this.usermsg[i].user)
              if(this.name == this.usermsg[i].user){
                  // 修改当前账号的登录状态为0
                  this.usermsg[i].onoff = 0;
                  // 隐藏登录成功的信息
                  this.notLogin.style.display = "block";
                  this.loginS.style.display = "none";
                  // 再将用户的信息设置回去，实现真正的注销
                  localStorage.setItem("usermsg",JSON.stringify(this.usermsg))
                  // 结束
                  return ;
              }
          }
      }
  }
  init(){
      // 获取所有的用户信息直接转换，方便使用
      this.usermsg = localStorage.getItem("usermsg") ? JSON.parse(localStorage.getItem("usermsg")) : [];
      // 开始验证
      this.check()
  }
  check(){
      // 拿到所有的信息
      for(var i=0;i<this.usermsg.length;i++){
          // 判断哪个用户的状态为已登录
          if(this.usermsg[i].onoff == 1){
              // 显示登录成功的信息
              this.notLogin.style.display = "none";
              this.loginS.style.display = "block";
              //设置当前用户名
              this.user.innerHTML = this.usermsg[i].user;
              // 保存当前用户名，用作注销
              this.name = this.usermsg[i].user;
              
              return;
          }
      }
  }
}

new Index;



//banner图二级菜单
class Tab1{
  constructor(options){
    this.ul = $("#box1").children("ul");
    this.leave1 = $("#box1").siblings("#txt2").children(".leave1")
    this.child = options.child;
    this.init();
  }
  init() {
     var that = this;
    
     this.ul.on("mouseenter",function(){
  
       $(this).addClass("active").siblings().removeClass("active");
      that.child.eq($(this).index()).show().siblings().hide();

    })
      this.leave1.on("mouseleave",function(){
  
      
      that.child.eq($(this).index()).hide();
    })
  }
}
  new Tab1({
     ul:$("#box1").children("ul"),
     child:$("#txt2").children("div")
  })
 

//楼梯效果
var flag = true;
$(".nav li:not(:last)").click(function(){
  flag = false;
  $(this).find("span")
  .addClass("active")
  .end()
  .siblings()
  .find("span")
  .removeClass("active");
  var sTop = $(".louti").eq($(this).index()).offset().top;

  $("body,html").animate({
    "scrollTop":sTop
  },1000,function(){
    flag = true;
  });
})
$("nav li:last").click(function(){
  $("body,html").animate({
    "scrollTop":0
  },1000),
  $("nav li span").removeClass("active");
})

$(window).scroll(function(){
  if(flag){
      var sTop = $(document).scrollTop();
      var $floor = $(".louti").filter(function(index,ele){
           return Math.abs($(this).offset().top - sTop) < $(this).height() / 2;
      })
      $(".nav li").eq($floor.index())
      .find("span")
      .addClass("active")
      .end()
      .siblings()
      .find("span")
      .removeClass("active")
  }
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


