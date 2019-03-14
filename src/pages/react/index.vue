<template>
  <div>
    <div class="vue">
      <img src="/static/images/react_1.png" alt="vue" >
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
          name: 'React',
          url: 'https://zh-hans.reactjs.org/',
          color: '#b2d68c',
          desc: '用于构建用户界面的 JavaScript 库'
        },
        {
          name: 'Vue Router',
          color: '#c077af',
          url: 'https://router.vuejs.org/zh/',
          desc: '路由管理器'
        },
        {
          name: 'Vuex',
          color: '#efe946',
          url: 'https://redux.js.org/introduction/getting-started',
          desc: '状态管理'
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
