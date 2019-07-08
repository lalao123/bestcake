define(()=>{
class Tab1{
    constructor(options){
      this.li = $("#box1").children("ul");
      this.child = options.div;
    }
    init(){
       var that = this;
      
       this.ul.on("mouseover",function(){
    
        $(this).addClass("active").siblings().removeClass("active");
        
        that.child.eq($(this).index()).show().siblings().hide();
      })
        this.ul.on("mouseout",function(){
    
        
        that.child.eq($(this).index()).hide();
      })
    }
  }
    return {
      tab1:Tab1
    }
})