<template>
  <div class="card">
    <h3 class="card-title">{{cardInfo.name}}</h3>
    <p class="card-content">
      <text>{{cardInfo.desc}}</text>
    </p>
    <div>
      <button
        class="card-btn"
        v-bind:style="{backgroundColor: cardInfo.color}"
        type="primary"
        bindtap="primary"
        @click.stop="click"
      >
        查 看
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demoCard',
  props: {
    cardInfo: ['cardInfo']
  },
  methods: {
    click () {
      this.$emit('click', this.cardInfo)
    }
  }
}
</script>

<style scope>
.card {
  padding: 7px 10px;
  margin: 10px 5px;
  background-color: #eee;
  border-radius: 4px;
  font-size: 14px;
}

.card-content {
  position: relative;
  height: 80px;
  width: 100%;
  padding: 5px;
  margin: 5px 3px 3px;
  line-height: 1.7em;
}
.card-btn {
  font-size: 14px;
  font-weight: bold;
  animation:change 10s linear 0s infinite;
}
@keyframes change{0%{color:#b51921;}25%{color:#f45f7c;}50%{color:#076a66;}75%{color:#9597ca;}100% {color:#b8a1a9;}}
.card-title {
  font-size: 16px;
  font-weight: bold;
  color: #0376c2;
  text-align: center;
}
</style>
