<template>
  <div>
    <div class="container">
      <div class="summarize-box">
        <div v-for="(item,index) in content" :key="index">
            <div class="text-cent margin-b-10">
                <img class="max-w" :src="api+item.img" alt />
            </div>
            <div class="margin-b-10 title">
                <div class="title-box text-indent">
                    {{item.describ}}
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { api } from 'api'
import { summarize } from 'api/request.js'
export default {
  data () {
    return {
      api,
      content: []
    }
  },
  mounted () {
    summarize(data => {
      this.content = data.data
    })
  }
}
</script>
<style lang="less">
@import "../css/index.less";
</style>
