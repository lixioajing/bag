// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const_ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  try{
    return await db.collection('teacher_info').doc('2fd465895fa901c6007016d600eaf100').update({
      data:{
        userName:event.userName,
        userID:event.userID,
        userPhoneNumber:event.userPhoneNumber
      }
    })
  }catch(e){
    console.error(e)
  }
}