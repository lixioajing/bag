// pages/myInfo/myInfo.js
const db = wx.cloud.database();
const teacher_info = db.collection("teacher_info");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    mHidden:true,
    hasUserInfo: false,
    showModal: false,
    head:  "/images/touxiang.jpeg",
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    user:[]
  },

  headimage: function () {
    var  _this = this;
     wx.chooseImage({
       count: 1, // 默认9     
       sizeType: ['original', 'compressed'],
      // 指定是原图还是压缩图，默认两个都有     
       sourceType: ['album', 'camera'],
      // 指定来源是相册还是相机，默认两个都有   
       success: function (res) {   
         _this.setData({
           head: res.tempFilePaths
        })
      }
    })
  },

  handleClickQuit() {
    //点击跳转界面到choose
    wx.navigateTo({
      url: '/pages/choose/choose', 
    })
  },
  handleClickUpdate() {
    //点击跳转界面到updateTeacherInfo
    wx.navigateTo({
      url: '/pages/updateTeacherInfo/updateTeacherInfo', 
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    teacher_info.get().then(res=>{
      console.log(res.data)
      this.setData({
        user:res.data
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