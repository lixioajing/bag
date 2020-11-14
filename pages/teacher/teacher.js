// pages/teacher/teacher.js
const db = wx.cloud.database();
const todos = db.collection("todos");
const test_class = db.collection("test_class");
const teacher_info = db.collection("teacher_info");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    class1Msg: '2019级听说K07班',
    user:''
  },
  handleClickClass1() {
    //点击跳转界面到class1
    wx.navigateTo({
      url: '/pages/class1/class1',
    })
    wx.setNavigationBarTitle({
      title: this.data.class1Msg,  
     })
  },
  handleClickClass2() {
    //点击跳转界面到class2
      wx.navigateTo({
        url: '/pages/class2/class2',
      })
      wx.setNavigationBarTitle({
        title: this.data.user,  
       })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    teacher_info.get().then(res=>{
      console.log(res.data[0].userName)
      db.collection('todos').where({
        teacher_name:res.data[0].userName
      }).get().then(res=>{
        if(res.data.length == 0){
          console.log("未找到该记录")
          that.setData({
           user:"暂未创建其他班级"
          })
        }else{
        console.log(res.data[0].class_name)
        that.setData({
          user:res.data[0].class_name
        })
      }
      })
  })
  },
})
