var app = getApp();
const db = wx.cloud.database();
const student_info = db.collection("student_info");
var app = getApp();

Component({

  /* 开启全局样式设置 */
  options: {
    addGlobalClass: true,
  },

  /* 组件的属性列表 */
  properties: {
    name: {
      type: String,
      value: 'studentInfo'
    }
  },

  /* 组件的初始数据 */
  data: {
    userInfo: {},
    mHidden:true,
    hasUserInfo: false,
    showModal: false,
    head:  "/images/touxiang.jpeg",
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    user:[]
  },

  /* 组件声明周期函数 */
  lifetimes: {
    attached: function () {
        student_info.get().then(res=>{
          console.log(res.data)
          this.setData({
            user:res.data
          })
        })
    },
    moved: function () {

    },
    detached: function () {

    },
  },

  /* 组件的方法列表 */
  methods: {
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
      //点击跳转界面到updateStudentInfo
      wx.navigateTo({
        url: '/pages/updateStudentInfo/updateStudentInfo',
      })
    },
  }

})