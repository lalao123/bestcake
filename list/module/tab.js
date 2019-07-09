define(()=>{

class Tab{
    constructor(options){
      this.li = $("#box").children("li");
      this.tea= $("#box").siblings(".text").children(".leave")
      this.child = options.div;
    }
    init(){
      var that = this;
      
      this.li.on("mouseenter",function(){
    
        $(this).addClass("active").siblings().removeClass("active");
        
        that.child.eq($(this).index()).show().siblings().hide();
        // console.log(0)
      })
      this.tea.on("mouseleave",function(){
        // console.log(this.pt)
        that.child.eq($(this).index()).hide();
        // console.log(1)

      })
    }
  }

  return {
    tab:Tab
  };
})