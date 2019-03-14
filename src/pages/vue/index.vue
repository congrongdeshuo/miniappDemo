<template>
  <div>
    <div class="vue">
      <img src="/static/images/Vue.png" alt="vue" >
    </div>
    <div class="vues">
      <demoCard clss="vues-item" v-for="(item, key) of vueInfo" :key="key" :cardInfo="item" @click="showDetail"></demoCard>
    </div>
  </div>
</template>

<script>
import demoCard from '@/components/card'

export default {
  components: {
    demoCard
  },

  data () {
    return {
      motto: 'Hello miniprograme',
      vueInfo: [
        {
          name: 'VUE',
          url: 'https://cn.vuejs.org',
          color: '#b2d68c',
          desc: '渐进式JavaScript 框架'
        },
        {
          name: 'Vue Router',
          color: '#c077af',
          url: 'https://router.vuejs.org/zh/',
          desc: '路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌'
        },
        {
          name: 'Vuex',
          color: '#efe946',
          url: 'https://vuex.vuejs.org/zh/',
          desc: 'Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化'
        },
        {
          name: 'mpvue',
          color: '#f67e2a',
          url: 'http://mpvue.com/mpvue/',
          desc: '使用 Vue.js 开发小程序的前端框架。框架基于 Vue.js 核心，mpvue 修改了 Vue.js 的 runtime 和 compiler 实现'
        }
      ]
    }
  },

  methods: {
    showDetail (info = Object) {
      console.log(info)
      const url = '../log/main'
      this.$store.commit('SET_DETAILURL', info.url)
      debugger
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
.vue {
  text-align: center
}
.vue img {
  width: 40px;
  height: 40px;
  background-size:contain;
}
</style>
