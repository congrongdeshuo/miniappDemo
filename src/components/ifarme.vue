<template>
  <iframe :src="url"></iframe>
</template>

<script>
export default {
  name: 'demoIframe',
  props: {
    url: {
      type: String,
      default: false
    }
  }
}
</script>

<style scope>
</style>
