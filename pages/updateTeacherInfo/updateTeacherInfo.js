// pages/updateTeacherInfo/updateTeacherInfo.js
wx.cloud.init();
const db = wx.cloud.database();
const teacher_info = db.collection("teacher_info");

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  formSubmit:function(event){
    console.log(event.detail.value);
      if (event.detail.value.userName == '' || event.detail.value.userID == '' || event.detail.value.userPhoneNumber == '') {
        wx.showToast({
          title: '请将信息填写完整',
          icon: 'none',
          duration: 1500
        })
        return false
      }else if (!event.detail.value.userName == '' && !event.detail.value.userID == '' && !event.detail.value.userPhoneNumber == '') {
        wx.navigateTo({
          url: '/pages/succeedUpdateTea/succeedUpdateTea',
        })
        wx.cloud.callFunction({
          name: 'update_teacherinfo',
          data: {
            userName:event.detail.value.userName,
            userID:event.detail.value.userID,
            userPhoneNumber:event.detail.value.userPhoneNumber,
          },
          success: res => {
            console.log('更新数据成功',res)
          }
    })
  }
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