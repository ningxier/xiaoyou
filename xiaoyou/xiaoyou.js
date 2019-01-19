Page({
  data: {
    name: "",
    number:"",
    tel: "",
    email: ""
  },
  nameinput: function (e) {
    this.setData({
      name: e.datail.value
    })
  },
  numberinput:function(e){
    this.setData({
      number:e.datail.valie
    })
  },
  telinput: function (e) {
    this.setData({
      tel: e.detail.value
    })
  },
  emailinput: function (e) {
    this.setData({
      email: e.detail.value
    })
  },
  signin2: function () {
    var that = this;
    var name = that.data.name
    var number=that.data.number
    var tel = that.data.tel
    var email=that.data.email
    wx.request({
      url: 'http://140.143.121.74/application/index/regist',
      data: {
        name: name,
        number:number,
        tel: tel,
        email:email
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      dataType: "json",
      success: function (res) {
        console.log("响应的数据" + res.data)
        wx.showModal({
          title: "信息提示",
          content: "注册成功"
        }),
          wx.switchTab({
            url: "../index/index"
          })

      },
      fail: function (res) {
        wx: wx.showToast({
          title: '服务器网络错误，请稍后重试',
          icon: 'loading',
          duration: 1500,
        })
      },
      complete: function (res) {

      }
    })
    if (that.data.name == "") {
      wx.showModal({
        title: "信息提示",
        content: "姓名不能为空"
      })
    } else if(that.data.number==""){
      wx.showModal({
        title: '信息提示',
        content: '学号不能为空',
      })
    }else if (that.data.tel == "") {
      wx.showModal({
        title: "信息提示",
        content: "电话号不能为空",
      })
    } else if (that.data.email == "") {
      wx.showModal({
        title: '信息提示',
        content: '请填写邮箱地址',
      })
    } 
  }
})