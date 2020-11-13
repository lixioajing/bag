// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const_ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  try{
    return await db.collection('todos').doc('3dfe72d65fae34bc00a64d715cd2972c').update({
      data:{
        class_ID:event.class_ID,
        class_name:event.class_name,
        teacher_PhoneNumber:event.teacher_PhoneNumber,
        teacher_name:event.teacher_name
      }
    })
  }catch(e){
    console.error(e)
  }
}