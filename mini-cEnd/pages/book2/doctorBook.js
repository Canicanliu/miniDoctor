const app = getApp()
Page({
  data: {
    select: false,
    hospital: '红棉社康',
    selDate:'sss',
    routers: [
      {
        name: '2018-12-10',
        key1:"上午",
        value1:"12",
        key2:"下午",
        value2:"满"
      },
      {
        name: '2018-12-11',
        key1: "上午",
        value1: "2",
        key2: "下午",
        value2: "10"
      },
      {
        name: '2018-12-12',
        key1: "上午",
        value1: "21",
        key2: "下午",
        value2: "满"
      },
      {
        name: '2018-12-13',
        key1: "上午",
        value1: "12",
        key2: "下午",
        value2: "满"
      },
      {
        name: '2018-12-14',
        key1: "上午",
        value1: "12",
        key2: "下午",
        value2: "21"
      },
      {
        name: '2018-12-15',
        key1: "上午",
        value1: "休",
        key2: "下午",
        value2: "休"
      },
      {
        name: '2018-12-16',
        key1: "上午",
        value1: "休",
        key2: "下午",
        value2: "休"
      },
      {
        name: '2018-12-17',
        key1: "上午",
        value1: "休",
        key2: "下午",
        value2: "休"
      },
      {
        name: '2018-12-18',
        key1: "上午",
        value1: "休",
        key2: "下午",
        value2: "休"
      }
    ]
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
  onLoad: function () {
    console.log('onLoad')
    var that = this
  }
})  
