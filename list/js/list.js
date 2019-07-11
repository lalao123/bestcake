
class list{
  constructor(){
      this.obox = document.querySelector(".obox");
      // console.log(this.obox)
      this.url = "http://localhost/1905/bestcake/list/json/goods1.json";

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
                                <a href="../detail/detail.html" class="aimg">
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

//懒加载
// function isShow($el){
//   console.log(1)
//   var winH = $(window).height();//获取窗口高度
//   var scrollH = $(window).scrollTop();//获取窗口滚动高度
//   var top = $el.offset().top;//获取元素距离窗口顶部偏移高度
//   if(top < scrollH + winH){
//       return true;//在可视范围
//     }else{
//       return false;//不在可视范围
//     }
//   }
//   $(window).on("scroll", function(){//监听滚动事件
//     checkShow();
// })
// checkShow();
// function checkShow(){//检查元素是否在可视范围内
//     $('img').each(function(){//遍历每一个元素
//         var $cur = $(this);
//         console.log($cur)
//         if(!isloaded($cur)){return false;}//判断是否已加载
//         if (isShow($cur)) {
//           setTimeout(function(){
//             showImg($cur);
//             })//设置时间是为了更好的看出效果
//         };
//     });
// }
// function showImg($el){
//   console.log(1)
//   $el.attr('src', $el.attr('data-src'));

//   $cur.data('isloaded',true);
// }
