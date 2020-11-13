// pages/creatClass/creatClass.js
wx.cloud.init();
const db = wx.cloud.database();
const todos = db.collection("todos");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:''
  },
  formSubmit:function(event){
    console.log(event.detail.value);
      if (event.detail.value.class_ID == '' || event.detail.value.class_name == '' || event.detail.value.teacher_name == '' || event.detail.value.teacher_PhoneNumber == '') {
        wx.showToast({
          title: '请将信息填写完整',
          icon: 'none',
          duration: 1500,
        })
        return false
      }else if (!event.detail.value.class_ID == '' && !event.detail.value.class_name == '' && !event.detail.value.teacher_name == '' && !event.detail.value.teacher_PhoneNumber == '') {
        wx.navigateTo({
          url: '/pages/succeedCreat/succeedCreat',
        })
        wx.cloud.callFunction({
          name:'create_database',
          data:{
            class_ID:event.detail.value.class_ID
          },
          success:res=>{
            console.log('创建班级成功',res)
          }
        }),
        wx.cloud.callFunction({
          name: 'update_classinfo',
          data: {
            class_ID:event.detail.value.class_ID,
            class_name:event.detail.value.class_name,
            teacher_PhoneNumber:event.detail.value.teacher_PhoneNumber,
            teacher_name:event.detail.value.teacher_name
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