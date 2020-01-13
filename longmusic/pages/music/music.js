// audio.js
var yu = 'http://link.hhtjim.com/163/487885426.mp3';
var ke = 'http://link.hhtjim.com/163/29759733.mp3';
var fen ='http://link.hhtjim.com/qq/0003mXKU3KZ34F.mp3';
var we ='http://link.hhtjim.com/qq/003z8Lmg3czY3q.mp3';
var src ='http://link.hhtjim.com/';
var songs=new Array(
  '',
  ''
);
Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '哪吒',
    author: '夏天Alex',
    src: 'http://link.hhtjim.com/qq/004a4n6J1rOH5J.mp3',
  },
  playYu: function (){
    console.log('鱼香'),
      this.audioCtx.setSrc(yu);
    this.audioCtx.play()
  },
  playKe: function () {
    console.log('可乐'),

      this.audioCtx.setSrc(ke);
    this.audioCtx.play()
  },
  playWe: function () {
     console.log('We Will Rock You'),

      this.audioCtx.setSrc(we);
    this.audioCtx.play()
  },
  playFen: function () {
     console.log('粉红色的回忆'),
      this.audioCtx.setSrc(fen);
    this.audioCtx.play()
  },
  
  audioPlay: function () {
    console.log('----'),
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  }
});
function playSon(id){
  console.log('可乐')
}
