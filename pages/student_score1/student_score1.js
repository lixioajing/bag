// pages/student_score1/student_score1.js
wx.cloud.init();
const db = wx.cloud.database();
const todos = db.collection("todos");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    score:{},
    total_score:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)

    let id = options.id;
    todos.doc(id).get().then(res=>{
      console.log(res.data);

      this.setData({
        score:res.data
      })
    })
  },

  formSubmit:function(event){
    console.log(event.detail.value);
      if (event.detail.value.subject == '' || event.detail.value.normal_score == '' || event.detail.value.final_score == '') {
        wx.showToast({
          title: '请将信息填写完整',
          icon: 'none',
          duration: 1500
        })
        return false
      }else if (!event.detail.value.subject == '' && !event.detail.value.normal_score == '' && !event.detail.value.final_score == '') {
        wx.navigateBack({
          delta: 0,
        })
        wx.cloud.callFunction({
          name: 'update_studentscore1',
          data: {
            _id:this.data.score._id,
            subject:event.detail.value.subject,
            normal_score:event.detail.value.normal_score,
            final_score:event.detail.value.final_score,
            total_score:event.detail.value.normal_score*0.4+event.detail.value.final_score*0.6,
          },
          success: res => {
            console.log('更新数据成功',res)
          }
    })
  }
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