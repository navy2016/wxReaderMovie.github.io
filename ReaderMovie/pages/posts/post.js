var postsData=require('../../data/posts-data.js')

Page({
  data: {

  },


  onLoad: function (options) {
    // Do some initialize when page load.
 
    this.setData({post_key:postsData.postlist });
  }
  ,
  onposttap:function(event){
    var postid=event.currentTarget.dataset.postid;
    console.log("on post id is "+postid);
     wx.navigateTo({
      url:"post-detail/post-detail"
    })
  }
  
})