 //切换选项卡

 $('.main-logon ul li:first').click(function(){
    $(".box1").css({display:"block"})
    $(".box2").css({display:"none"})
    $('.main-logon ul li:first').css({borderBottom:"2px solid orangered"})
    $('.main-logon ul li:last').css({borderBottom:"2px solid #d2d2d2"})
})
$('.main-logon ul li:last').click(function(){
    $(".box2").css({display:"block"})
    $(".box1").css({display:"none"})
    $('.main-logon ul li:last').css({borderBottom:"2px solid orangered"})
    $('.main-logon ul li:first').css({borderBottom:"2px solid #d2d2d2"})
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


  //登录注册验证

  var user = document.getElementById("user");
  var pass = document.getElementById("pass");
  var btn = document.getElementById("btn");
  var phone = document.getElementById("phone");
  var opass1 = document.getElementById("opass1");
  var opass2 = document.getElementById("opass2"); 
  var btns = document.getElementById("btns");
  var p1 = document.querySelector(".p1");
  var p2 = document.querySelector(".p2");
   
  var userOnOff = passOnOff = phoneOnOff = pass2OnOff = false;
  user.onblur = function(){
      var reg =  /^[\u2E80-\u9FFF\w-]{4,20}$/;
      if(reg.test(this.value)){
          this.nextElementSibling.innerHTML = ""
          userOnOff = true
      }else{
          this.nextElementSibling.innerHTML = "账号或qq号错误"
          userOnOff = false
      }
  }

  pass.onblur = function(){
      var a = b = c =0;

      var lengthReg = /^.{6,18}$/;
      if(lengthReg.test(this.value)){
         this.nextElementSibling.innerHTML = ""
         passOnOff = true;
         
      }else{
         this.nextElementSibling.innerHTML = "长度不够"
         passOnOff = false;
      }
  }
  
  phone.onblur = function(){
      var reg = /^1[3-9]\d{9}$/;
      if(reg.test(this.value)){
         this.nextElementSibling.innerHTML = ""
         phoneOnOff = true
      }else{
          this.nextElementSibling.innerHTML ="手机号不正确"
          phoneOnOff = false
      }
  }
 opass1.onblur = function(){
          var a=b=c=0;
//			长度验证
          var lengthReg = /^.{6,18}$/;
          if(!lengthReg.test(this.value)){
              this.nextElementSibling.innerHTML = "长度不符";
              passOnOff = false
              return;
          }
//			是否存在数字
          var numReg = /\d/;
          if(numReg.test(this.value)){
              a = 1;
          }
//			是否存在字母
          var azReg = /[a-zA-Z]/;
          if(azReg.test(this.value)){
              b = 1;
          }
//			是否存在特殊字符
          var tsReg = /[\W_]/;
          if(tsReg.test(this.value)){
              c = 1;
          }
          
          switch(a+b+c){
              case 1:
                  this.nextElementSibling.innerHTML = "简单";break;
              case 2:
                  this.nextElementSibling.innerHTML = "一般";break;
              case 3:
                  this.nextElementSibling.innerHTML = "困难";break;
          }
          
          passOnOff = true;
          
//			验证是否一致
          if(opass2.value != ""){
              if(opass2.value == this.value){
                  opass2.nextElementSibling.innerHTML = "一致"				
                  pass2OnOff = true
              }else{
                  opass2.nextElementSibling.innerHTML = "不一致"				
                  pass2OnOff = false
              }
          }
      }
      
//		跟第一次输入密码一致
      opass2.onblur = function(){
          if(this.value === opass1.value){
              this.nextElementSibling.innerHTML = "一致"
              pass2OnOff = true
          }else{
              this.nextElementSibling.innerHTML = "不一致"
              pass2OnOff = false
          }
      }
//点击登录，错误就显示	
    btn.onclick = function(){
        if(userOnOff && passOnOff){
          p1.innerHTML = "! 登录成功";
        }else{
          p1.innerHTML = "! 登录失败";
            p1.style.border = "1px #fc4349 solid";
            p1.style.display = "block";
            p1.style.width = "150px";
            p1.style.height = "30px";
            setInterval(function(){
                p1.style.display = "none";
                p1.style.border = "";
            },8000)
        }
    }

    btns.onclick = function(){
        if(phoneOnOff &&  pass2OnOff){
          p2.innerHTML = "! 注册成功";
        }else{
          p2.innerHTML = "! 注册失败";
            p2.style.border = "1px #fc4349 solid";
            p2.style.display = "block";
            p2.style.width = "120px";
            p2.style.height = "30px";
            setInterval(function(){
                p2.style.display = "none";
                p2.style.border = "";
            },2000)
        }
    }