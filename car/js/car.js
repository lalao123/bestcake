class Car{
    constructor(){
        this.tbody = document.querySelector("tbody");
        this.url = "http://localhost/1905/bestcake/index/json/goods1.json";

        this.init();
        // 1.删除：绑定删除按钮的事件
        this.addEvent();
    }
    addEvent(){
        var that = this;
        this.tbody.onclick = function(){
            console.log(event.target)

            if(event.target.className == "del"){
                // console.log(id)
                // 2.获取点击商品的id
                that.id = event.target.parentNode.parentNode.getAttribute("index");
                // 3.删除DOM元素
                
                event.target.parentNode.parentNode.remove();
                // 4.删除localstorage的数据
                that.setData(function(i){
                    that.goods.splice(i,1);
                });
            }
        }
        // 8.修改数量：事件委托绑定输入框的事件
        this.tbody.oninput = function(){
            if(event.target.className == "changeNum"){
                // 9.存储修改的商品的id
                that.id = event.target.parentNode.parentNode.getAttribute("index");
                // 10.修改localstorage的数据
                that.setData(function(i){
                    that.goods[i].num = event.target.value;
                });
            }
        }
    }
    setData(callback){
        // 5.遍历数据，查找相同id
        for(var i=0;i<this.goods.length;i++){
            if(this.goods[i].id == this.id){
                // 6.执行回调函数：删除时传进来的是删除，修改时传进来的是修改
                callback(i);
            }
        }
        // 7.再存回去
        localStorage.setItem("goods",JSON.stringify(this.goods));
    }
    
    init(){
        var that = this;
        ajaxPost(this.url,function(res){
            // console.log(res)
            that.res = JSON.parse(res)
            that.getData();
        })
    }
    getData(){
        this.goods = localStorage.getItem("goods") ? JSON.parse(localStorage.getItem("goods")) : [];
          
        this.display();    
    }
    display(){
        var str = "";
        for(var i=0;i<this.res.length;i++){
            for(var j=0;j<this.goods.length;j++){
                // console.log(this.res[i].goodsId,this.goods[j].id)
                if(this.res[i].goodsId == this.goods[j].id){
                    str += `<tr index="${this.res[i].goodsId}">
                                <td><img src="${this.res[i].src}" alt=""></td>
                                <td>${this.res[i].name}</td>
                                <td>${this.res[i].price}</td>
                                <td><input type="number" value="${this.goods[j].num}" min=1 class="changeNum"></td>
                                <td>无优惠</td>
                                <td ><img src="../car/img/cuo.png" class="del" alt=""></td>
                            </tr>`
                }
            }
        }
        // console.log(str)
        this.tbody.innerHTML = str;
    }
}
new Car;




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