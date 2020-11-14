// pages/class2/class2.js
wx.cloud.init();
const db = wx.cloud.database();
const todos = db.collection("todos");

Page({
  data:{
    student:[],
    class_ID:''
  },

  onLoad:function (options) {
    let that = this
    wx.cloud.callFunction({
      name:"gettest_class1",
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