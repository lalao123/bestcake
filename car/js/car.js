// console.log(1)
class Judg{
    constructor(){
      this.url='http://localhost/1905/bestcake/car/json/goods1.json';
      this.goods=JSON.parse(localStorage.getItem('goods'));
      this.count=0
      this.init()
      this.addEvent()
  
    };
    addEvent(){
      let that=this;
      $('.low').on('click','.del',function(event){
        that.id= $(event.target).parent().parent().attr('index')
        // console.log(that.id)
        $(event.target).parent().parent().remove();
        that.setDate()
        that.setPrice()
      });
      $('.check1').change(function(){
        if($('.check1').is(":checked")){
          for(let i=0;i<$('.judg').length;i++){
            $('.judg').eq(i).prop('checked',true)
          }
          that.setPrice()
       
        }
      })
      $('.low').on('change','.judg',function(event){
        if($(this).is(":checked")){
       
          that.setPrice()
        }
        if($(this).is(":checked")==false){
        
          $('.check1').prop('checked',false)
    
  
          that.setPrice()
        
        }
      });
      $('.low').on('click','.reduce',function(){
        console.log(1)
        if(Number($(this).next().val())==1){
          $(this).next().val(1)
        }else{
          $(this).next().val(parseFloat($(this).next().val())-1)

        }
        // console.log(parseFloat($(this).next().val())-1)
        that.num=parseFloat($(this).next().val())
        that.id=$(this).parent().parent().parent().attr('index')
        // console.log(that.id)
        $(this).parent().next().html((parseFloat($(this).parent().prev().html().substr(1))*that.num).toFixed(2)) 
 
          that.setPrice()
        
        that.changeLocal()
      });
  
  
  
      $('.low').on('click','.up',function(){
        $(this).prev().val(parseFloat($(this).prev().val())+1)
        that.num=parseFloat($(this).prev().val())
        that.id=$(this).parent().parent().parent().attr('index')
        $(this).parent().next().html((parseFloat($(this).parent().prev().html().substr(1))*that.num).toFixed(2)) ;
//   g(that.count)
        that.setPrice()
        
        that.changeLocal()
  
  
  
  
  
      });
      $('.low').on('click','.cont1',function(){
        $(this).focus()
        $(this).keydown(function(event){
          if(event.keyCode>57 ||event.keyCode<48){
            if(event.keyCode!=37&&event.keyCode!=39 && event.keyCode!=8&& event.keyCode!=116){
              event.preventDefault()
            }
          }
      
    })
  
        $(this).blur(function(){
          // if(parseFloat($(this).val())==0 || $(this).val()==''){
          //   $(this).val(1)
          // }
          if(parseFloat($(this).val())==0 ||$(this).val()==''){
            // console.log(1)
            $(this).val(1)
          }
          that.id=$(this).parent().parent().parent().attr('index')
          that.num=parseInt($(this).val()) ;
          $(this).parent().next().html((parseFloat($(this).parent().prev().html().substr(1))*that.num).toFixed(2)) 
        // ount=parseFloat($(this).parent().next().html())
            that.setPrice()
         
          that.changeLocal()
          
        })
      })
  
      
    };
    changeLocal(){
  
      for(let i=0;i<this.goods.length;i++){
        if(this.goods[i].id==this.id){
          this.goods[i].num=this.num
       
        }
      }
  
    localStorage.setItem('goods',JSON.stringify(this.goods))
    }
    setPrice(){
      this.count=0
      for(let i=0;i<$('.judg').length;i++){
        if($('.judg').eq(i).is(":checked")){
          this.count+=parseFloat($('.judg').eq(i).parent().parent().children().eq(5).html())
        }
      }
      $('.total1').html((this.count).toFixed(2))
     
    }
    setDate(){
      for(var i=0;i<this.goods.length;i++){
        if(this.goods[i].id==this.id){
            this.goods.splice(i,1)
        }
    }
    localStorage.setItem('goods',JSON.stringify(this.goods))
    };
    init(){
        // console.log(this.goods)
      let that=this;
      $.ajax({
        url:this.url,
        success:function(res){
          that.res=res;
          that.display()
        }
      })
    };
    display(){
        // console.log(2)
      let str=''
      for(let i=0;i<this.res.length;i++){
          for(let k=0;k<this.goods.length;k++){
            if(this.goods[k].id==this.res[i].goodsId){
            str+=`
              <div class="load${k} load" index=${this.goods[k].id}>
              <ul>
              <li> <input type="checkbox" class="judg"></li>
              <li><img src="${this.res[i].src}" alt=""></li>
              <li> <p> ${this.res[i].name}</p></li>
              <li>${this.res[i].price}</li>
              <li> <button class="reduce">-</button> <input type="text" class="cont1" value=${this.goods[k].num}><button class="up">+</button></li>
              <li class="jisuan jisuan${k}">${parseFloat(this.res[i].price.substr(1)*1*this.goods[k].num).toFixed(2)}</li>
              <li class='del'>删除</li>
              </ul>
              </div>
            `
          }
        }
      }
      $('.low').html(str)
    };
  }
  new Judg()




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