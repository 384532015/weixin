// pages/index/Component/form/form.js
Page({
    data:{
        allvalue:""
    },
    formSubmit:function(e){
        var that = this
        this.setData({
            allvalue:e.detail.value
        })
        wx.request({
          url: 'url',
          method:"post",
          data:allvalue,
          success(res){
              that.setData({
                  Name:"",
                  Id:"",
                  Phone:"",
                  Cord:""
              })
          }
        });      
    }
})