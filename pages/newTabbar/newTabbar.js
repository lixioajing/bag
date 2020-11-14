let app = getApp()

Page({
  data: {
    currentTab: 0,
    items: [
      {
        "selectedIconPath": "/images/class_select.png",
        "iconPath": "/images/class.png",
        "text": "班级列表"
      },
      {
        "selectedIconPath": "/images/fun_select.png",
        "iconPath": "/images/fun.png",
        "text": "加入班级"
      },
      {
        "selectedIconPath": "/images/info_select.png",
        "iconPath": "/images/info.png",
        "text": "我的信息"
      }
    ]
  },
  swichNav: function (e) {
    let that = this;
    if (that.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  onLoad(options){
	  console.log(options);
	  let that = this;
	  let currentTab = options.current;
	  that.setData({
		  currentTab
	  })
  }
})
