// pages/choose/choose.js
wx.cloud.init();
const db = wx.cloud.database();
const teacher_info = db. collection("teacher_info");
const student_info = db. collection("student_info");

Page({
  /**
   * 页面的初始数据
   */
  data: {
    judge:[]
  },
  judgeTeacher:function(e){
    var that = this;
    db. collection('teacher_info'). get({
    success: res => {
        console.log(res.data)  
        that.setData({
         judge: res.data
        })
        if (!this.data.judge[0].userName == '' && !this.data.judge[0].userID == '' && !this.data.judge[0].userPhoneNumber == '') {
          wx.switchTab({
            url: '/pages/teacher/teacher',
          })
        } else if (this.data.judge[0].userName == '' || this.data.judge[0].userID == '' || this.data.judge[0].userPhoneNumber == '') {
          wx.navigateTo({
            url: '/pages/fillTeacherInfo/fillTeacherInfo',
          })
        }
      }
    })
  },
  judgeStudent:function(e){
    var that = this;
    db. collection('student_info'). get({
    success: res => {
        console.log(res.data)  
        that.setData({
         judge: res.data
        })
        if (!this.data.judge[0].userName == '' && !this.data.judge[0].userID == '' && !this.data.judge[0].userPhoneNumber == '') {
          wx.navigateTo({
            url: '/pages/newTabbar/newTabbar',
          })
        } else if (this.data.judge[0].userName == '' || this.data.judge[0].userID == '' || this.data.judge[0].userPhoneNumber == '') {
          wx.navigateTo({
            url: '/pages/fillStudentInfo/fillStudentInfo',
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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