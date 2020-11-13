// pages/student/student.js
const db = wx.cloud.database();
const test_class = db.collection("test_class");
const todos = db.collection("todos");
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
      value: 'student'
    }
  },

  /* 组件的初始数据 */
  data: {
    class1:'',
    class2:'',
    user:[]
  },

  /* 组件声明周期函数 */
  lifetimes: {
    ready: function () {
        var that = this;
        student_info.get().then(res=>{
          console.log(res.data[0].userName)
          that.setData({
            user:res.data[0].userName
          })
          db.collection('test_class').where({
            student_name:this.data.user
          }).get().then(res=>{
            if(res.data.length == 0){
              console.log("未找到该记录")
    
              that.setData({
                class1:"暂未加入其他班级"
              })
            }else{
            console.log(res.data[0].class_name)
    
            that.setData({
              class1:res.data[0].class_name
            })
          }
          }),
          db.collection('todos').where({
            student_name:this.data.user
          }).get().then(res=>{
            if(res.data.length == 0){
              console.log("未找到该记录")
    
              that.setData({
                class2:"暂未加入其他班级"
              })
            }else{
            console.log(res.data[0].class_name)
    
            that.setData({
              class2:res.data[0].class_name
            })
          }
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
    handleClickClass1(){
      wx.navigateTo({
        url: '/pages/Class1_score/Class1_score',
      })
      wx.setNavigationBarTitle({
        title: this.data.class1,
      })
    },
    
    handleClickClass2(){
      wx.navigateTo({
        url: '/pages/Class2_score/Class2_score',
      })
      wx.setNavigationBarTitle({
        title: this.data.class2,
      })
    },
  }

})