require.config({
	baseUrl:"module",
	paths:{
		jq:"../../jquery.2.2.4",
		t1:"tab",

	}
})

require(["jq","t1"],(_,tab)=>{
//	console.log(_)
	
	var adiv = $(".text").children("div");
	
	var t1 = new tab.tab({
		div:adiv
	})
	t1.init();
	
	
	// var t2 = new toast.toast({
	// 	li:t1.li,
	// 	child:t1.child
	// })
	// t2.init()
	
//	弹出框和选项卡不是重点,重点是模块化的结构怎么设计
	
})