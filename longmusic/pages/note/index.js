var title = [];
var singer = [];
var sourceId = [];
var images = [];

Page({
  onLoad: function () {
    setTitle('哆啦日记');
  },
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },

  data: {
    background: ['red', 'green', 'blue'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500
  },

  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  }
});
function setTitle(title) {
  
  wx.setNavigationBarTitle({
    title: title,
  })
}
function getDiary() {
  wx.request({
    url: 'http://www.duola.vip/queryAllSongs.do?page=2',
    header: {
      'content-type': 'application/json' // 默认值
    },
    success(res) {
      var data = res.data;
      for (var i = 0; i < data.length; i++) {
        songs.push(data[i].songName);
        singer.push(data[i].singer);
        sourceId.push(data[i].sourceId);
        images.push(data[i].imgPath);
      }
      console.log(songs);
      console.log(singer);
      console.log(sourceId);
      console.log(images);
    }
  })
}