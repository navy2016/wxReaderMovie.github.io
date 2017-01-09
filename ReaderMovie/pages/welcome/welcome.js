Page({
 
  onTap:function(){
   console.log("onTap");
   wx.redirectTo({
     url: "../posts/post",
   })
  }
})