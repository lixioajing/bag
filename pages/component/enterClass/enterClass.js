// pages/student/student.js
wx.cloud.init();
const db = wx.cloud.database();
const test_class = db.collection("test_class");
const todos = db.collection("todos");
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
      value: 'enterClass'
    }
  },

  /* 组件的初始数据 */
  data: {
    
  },

  /* 组件声明周期函数 */
  lifetimes: {
    attached: function () {
   
    },
    moved: function () { 

    },
    detached: function () { 

    },
  },

  /* 组件的方法列表 */
  methods: {
    formSubmit:function(event){
      console.log(event.detail.value);
      if (event.detail.value.class_ID == '' || event.detail.value.class_name == '' || event.detail.value.student_name == '' || event.detail.value.student_number == '') {
        wx.showToast({
          title: '请将信息填写完整',
          icon: 'none',
          duration: 1500
        })
        return false
      }else if (!event.detail.value.class_ID == '' && !event.detail.value.class_name == '' && !event.detail.value.student_name == '' && !event.detail.value.student_number == '') {
        wx.navigateTo({
          url: '/pages/succeedAdd/succeedAdd',
        })
        if(event.detail.value.class_ID == '201910601'){
        test_class.add({
          data:{
            class_ID:event.detail.value.class_ID,
            class_name:event.detail.value.class_name,
            student_name:event.detail.value.student_name,
            student_number:event.detail.value.student_number,
            subject_number:'',
            normal_score:0,
            final_score:0
          }
        }).then(res=>{
          console.log(res)
        })
      }else{
        todos.add({
          data:{
            class_ID:event.detail.value.class_ID,
            class_name:event.detail.value.class_name,
            student_name:event.detail.value.student_name,
            student_number:event.detail.value.student_number,
            subject:'',
            normal_score:0,
            final_score:0
          }
        }).then(res=>{
          console.log(res)
        })
      }
      }
  }
  }
  
})