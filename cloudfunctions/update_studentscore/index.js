// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const_ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  try{
    return await db.collection('test_class').doc(event._id).update({
      data:{
        subject:event.subject,
        normal_score:event.normal_score,
        final_score:event.final_score
      }
    })
  }catch(e){
    console.error(e)
  }
}