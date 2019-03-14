<template>
  <div class="test">
    <div class="mini">
      <img src="/static/images/xiaochengxu_1.png" alt="vue" >
    </div>
    <!-- 交互能力 -->
    <div class="mini">
      <div class="title">
        接口测试
      </div>
      <div>
        <div class="btn"></div>
        <button @click="getTest">get请求</button>
        <button @click="postTest">post请求</button>
      </div>
    </div>

    <!-- 媒体组件 -->
    <div class="mini">
      <div class="title">
        音频
      </div>
      <div>
        <button @click="audioInit">播放音频</button>
      </div>
    </div>
    <div class="mini">
      <div class="title">
        视频
      </div>
      <div>

      </div>
    </div>
    <div class="mini">
      <div class="title">
        背景音频
      </div>
      <div>

      </div>
    </div>
    <div class="mini">
      <div class="title">
        实时音视频
      </div>
      <div>

      </div>
    </div>
    <div class="mini">
      <div class="title">
        录音
      </div>
      <div>

      </div>
    </div>
    <div class="mini">
      <div class="title">
        相机
      </div>
      <div>

      </div>
    </div>
    <!-- 地图组件 -->
    <div class="mini">
      <div>
        地图组件
      </div>
      <div>

      </div>
    </div>
    <!-- 开放能力 -->
    <div class="mini">
      <div class="mini">
        开放能力
      </div>
      <div>

      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      innerAudioContext: ''
    }
  },

  methods: {
    getTest () {
      this.$store.dispatch('getTest')
    },

    postTest () {

    },

    audioInit () {
      this.innerAudioContext = wx.createInnerAudioContext()
      this.innerAudioContext.autoplay = true
      this.innerAudioContext.src = 'http://zhangmenshiting.qianqian.com/data2/music/26ae1bde9f9d6e3325d9cad96b847747/612314778/612314778.mp3?xcode=1a5f265b02c7c91925903e2d9e216d08'
      this.innerAudioContext.onPlay(() => {
        console.log('开始播放')
      })
      this.innerAudioContext.onError((res) => {
        console.log(res.errMsg)
        console.log(res.errCode)
      })
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
.test {
  padding: 0 10px;
}
.mini {
  text-align: center;
  margin: 10px 0;
}
.mini .title {
 color: #4ba946;
 font-size: 14px;
 font-weight: 600;
 padding: 10px;
}
.mini img {
  width: 40px;
  height: 40px;
  background-size:contain;
}
</style>
