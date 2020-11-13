// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

exports.main = async (event, context) => {
  return cloud.database().collection("todos").get({
    success(res){
      return res
    },
    fail(err){
      return err
    }
  })
}