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

//登录时验证身份
class Login{
    constructor(){
        this.user = document.querySelector("#user");
        this.pass = document.querySelector("#pass");
        this.btn = document.querySelector("#btn");
        this.msg = document.querySelector(".p1");

        this.init()
    }
    init(){
        var that = this;
        this.btn.onclick = function(){
            // 点击时先获取localStorage
            console.log(1)
            that.getUserMsg()
        }
    }
    getUserMsg(){
        // 获取的同时直接转换，方便实用
        this.usermsg = localStorage.getItem("usermsg") ? JSON.parse(localStorage.getItem("usermsg")) : [];
        // 开始验证
        this.check()
    }
    check(){
        // 遍历所有的用户名
        for(var i=0;i<this.usermsg.length;i++){
            // 每次判断当前用户名是否和指定用户名密码是否符合
            if(this.usermsg[i].user == this.user.value && this.usermsg[i].pass1 == this.pass.value){
                // 如果符合，登录成功，修改账号状态
                this.usermsg[i].onoff = 1;
                // 在存回去，才能实现修改
                localStorage.setItem("usermsg",JSON.stringify(this.usermsg))
                // 给提示语句
                this.msg.innerHTML = "登录成功，三秒后跳转到首页";
                // 三秒后跳转
                setTimeout(() => {
                    location.href = "http://localhost/1905/bestcake/index/index.html";
                }, 3000);
                // 结束
                return;
            }
        }
        // 如果没结束，表示登录失败，那么显示失败信息
        this.msg.innerHTML = "账号密码不符，请重新登录或去注册"
        setTimeout(() => {
            this.msg.style.cssText = "display:none";
            // this.msg.style.cssText = "border:0";
        },2000)
    }
}


new Login;


//注册时判断存储
class Register{
    constructor(){
        this.user = document.querySelector("#phone");
        this.pass1 = document.querySelector("#opass1");
        this.pass2 = document.querySelector("#opass2");
        this.btns = document.querySelector("#btns");
        this.msg = document.querySelector(".p2");
          
        this.init()
    }
    init(){
        var that = this;
        this.btns.onclick = function(){
            // 先获取指定的localStorage，用来判断是否是第一次注册
            that.getUserMsg()
        }
    }
    getUserMsg(){
        this.usermsg = localStorage.getItem("usermsg");
        // console.log(this.usermsg);
        // 开始判断是否是第一次
        this.setUserMsg()
    }
    setUserMsg(){
        // localStorage中的数据的格式为:[{user:"admin",pass:1234,onoff:0},{user:"admin",pass:1234,onoff:0}]
        // 如果是第一次，直接注册，如果不是第一次要判断是否重名
        if(this.usermsg == null){
            // 第一次
            this.usermsg = [{
                user:this.user.value,
                pass1:this.pass1.value,
                pass2:this.pass2.value,
                onoff:0
            }]
             this.msg.innerHTML = "注册成功";
            // this.msg.style.cssText = "display:block"
            setTimeout(() => {
                this.msg.style.cssText = "display:none";
                // this.msg.style.cssText = "border:0";
            },2000)
            
        }else{
            // 不是第一次:获取的同时，转成数组，然后开始判断是否重名
            this.usermsg = JSON.parse(localStorage.getItem("usermsg"));
            for(var i=0;i<this.usermsg.length;i++){
                if(this.usermsg[i].user == this.user.value){
                    this.msg.innerHTML = "重名";
                    return;
                }
            }
            this.msg.innerHTML = "";
            this.usermsg.push({
                user:this.user.value,
                pass1:this.pass1.value,
                pass2:this.pass2.value,
                onoff:0
            })
        }

        localStorage.setItem("usermsg",JSON.stringify(this.usermsg))
    }
}

new Register;





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

//   var user = document.getElementById("user");
//   var pass = document.getElementById("pass");
//   var btn = document.getElementById("btn");
//   var phone = document.getElementById("phone");
//   var opass1 = document.getElementById("opass1");
//   var opass2 = document.getElementById("opass2"); 
//   var btns = document.getElementById("btns");
//   var p1 = document.querySelector(".p1");
//   var p2 = document.querySelector(".p2");
   
//   var userOnOff = passOnOff = phoneOnOff = pass2OnOff = false;
//   user.onblur = function(){
//       var reg =  /^[\u2E80-\u9FFF\w-]{4,20}$/;
//       if(reg.test(this.value)){
//           this.nextElementSibling.innerHTML = ""
//           userOnOff = true
//       }else{
//           this.nextElementSibling.innerHTML = "账号错误"
//           userOnOff = false
//       }
//   }

//   pass.onblur = function(){
//       var a = b = c =0;

//       var lengthReg = /^.{6,18}$/;
//       if(lengthReg.test(this.value)){
//          this.nextElementSibling.innerHTML = ""
//          passOnOff = true;
         
//       }else{
//          this.nextElementSibling.innerHTML = "长度不够"
//          passOnOff = false;
//       }
//   }
  
//   phone.onblur = function(){
//       var reg =  /^[\u2E80-\u9FFF\w-]{4,20}$/;
//       if(reg.test(this.value)){
//          this.nextElementSibling.innerHTML = ""
//          phoneOnOff = true
//       }else{
//           this.nextElementSibling.innerHTML ="账号格式不正确"
//           phoneOnOff = false
//       }
//   }
//  opass1.onblur = function(){
//           var a=b=c=0;
// //			长度验证
//           var lengthReg = /^.{6,18}$/;
//           if(!lengthReg.test(this.value)){
//               this.nextElementSibling.innerHTML = "长度不符";
//               passOnOff = false
//               return;
//           }
// //			是否存在数字
//           var numReg = /\d/;
//           if(numReg.test(this.value)){
//               a = 1;
//           }
// //			是否存在字母
//           var azReg = /[a-zA-Z]/;
//           if(azReg.test(this.value)){
//               b = 1;
//           }
// //			是否存在特殊字符
//           var tsReg = /[\W_]/;
//           if(tsReg.test(this.value)){
//               c = 1;
//           }
          
//           switch(a+b+c){
//               case 1:
//                   this.nextElementSibling.innerHTML = "简单";break;
//               case 2:
//                   this.nextElementSibling.innerHTML = "一般";break;
//               case 3:
//                   this.nextElementSibling.innerHTML = "困难";break;
//           }
          
//           passOnOff = true;
          
// //			验证是否一致
//           if(opass2.value != ""){
//               if(opass2.value == this.value){
//                   opass2.nextElementSibling.innerHTML = "一致"				
//                   pass2OnOff = true
//               }else{
//                   opass2.nextElementSibling.innerHTML = "不一致"				
//                   pass2OnOff = false
//               }
//           }
//       }
      
// //		跟第一次输入密码一致
//       opass2.onblur = function(){
//           if(this.value === opass1.value){
//               this.nextElementSibling.innerHTML = "一致"
//               pass2OnOff = true
//           }else{
//               this.nextElementSibling.innerHTML = "不一致"
//               pass2OnOff = false
//           }
//       }
// //点击登录，错误就显示	
//     btn.onclick = function(){
//         if(userOnOff && passOnOff){
//           p1.innerHTML = "! 登录成功";
//         }else{
//           p1.innerHTML = "! 登录失败";
//             p1.style.border = "1px #fc4349 solid";
//             p1.style.display = "block";
//             p1.style.width = "150px";
//             p1.style.height = "30px";
//             setInterval(function(){
//                 p1.style.display = "none";
//                 p1.style.border = "";
//             },8000)
//         }
//     }

//     btns.onclick = function(){
//         if(phoneOnOff &&  pass2OnOff){
//           p2.innerHTML = "! 注册成功";
//         }else{
//           p2.innerHTML = "! 注册失败";
//             p2.style.border = "1px #fc4349 solid";
//             p2.style.display = "block";
//             p2.style.width = "120px";
//             p2.style.height = "30px";
//             setInterval(function(){
//                 p2.style.display = "none";
//                 p2.style.border = "";
//             },2000)
//         }
//     }