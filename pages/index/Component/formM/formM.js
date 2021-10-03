// pages/index/Component/form/form.js
Page({
    data:{
        allvalue:""
    },
    bindsubmit:function(e){
        this.setData({
            allvalue:e.detail.value
        })
        wx.request({
          url: 'url',
          method:"post",
          data:allvalue
        })
        this.setData({allvalue:""})
    }
})