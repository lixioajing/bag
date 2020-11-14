// pages/succeedUpdateStu/succeedUpdateStu.js

var app = getApp();

Page({
  data: {
    current:''
  },

  //监听页面显示
  onShow: function () {
      setTimeout(function(){
      wx.navigateTo({
          url: '/pages/newTabbar/newTabbar?current=2',         
      })
      },1500);
    },
  })