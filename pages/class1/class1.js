// pages/class1/class1.js
wx.cloud.init();
const db = wx.cloud.database();
const test_class = db.collection("test_class");

Page({
  data:{
    student:[],
    class_ID:''
  },

  onLoad:function (options) {
    let that = this
    wx.cloud.callFunction({
      name:"gettest_class",
      success(res){
        console.log("请求云函数成功",res)
        that.setData({
          student:res.result.data,
          class_ID:res.result.data[0].class_ID
        })
      },
      fail(res){
        console.log("请求云函数失败",res)
      }
    })
  }
})