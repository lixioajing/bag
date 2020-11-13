// pages/Class1_score/Class1_score.js
wx.cloud.init();
const db = wx.cloud.database();
const test_class = db.collection("test_class");
const student_info = db.collection("student_info")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    student_info.get().then(res=>{
      console.log(res.data)
      that.setData({
        user:res.data
      })
      db.collection('test_class').where({
        student_name:res.data[0].userName
      }).get().then(res=>{
        if(res.data.length == 0){
          console.log("未找到该记录")

          that.setData({
            user:"未查询到成绩！"
          })
        }else{
          console.log(res.data)

          that.setData({
            user:res.data
          })
        }
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})