// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const_ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  try{
    return await db.collection('todos').doc(event._id).update({
      data:{
        subject:event.subject,
        normal_score:event.normal_score,
        final_score:event.final_score,
        total_score:event.normal_score*0.4+event.final_score*0.6
      }
    })
  }catch(e){
    console.error(e)
  }
}