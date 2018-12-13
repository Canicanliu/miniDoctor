Page({

  /**
   * 页面的初始数据
   */
  data: {
    select: false,
    hospital: '红棉社康'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bindShowMsg() {
    this.setData({
      select: !this.data.select
    })
  },
  mySelect(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      hospital: name,
      select: false
    })
  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
