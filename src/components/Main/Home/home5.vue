<template>
  <div>
    <div class="container home-list">
      <div class="home-list">
        <div class="title text-cent">
          <h2>友情连接</h2>
        </div>
        <div class="home-line"></div>
      </div>
      <ul class="flx friendship-box justify-be">
        <li v-for="(ietm,index) in content" :key="index" class="margin-b-10 friendship-bulik">
          <div>
            <img class="max-w" :src="api+ietm.img" alt />
          </div>
        </li>
        <li class="friendship-show margin-b-10" v-for="(item, index) in (row-content.length%row)" v-if="content.length%row>0" :key="index"></li>
      </ul>
    </div>
  </div>
</template>
<script>
import { api } from 'api'
import { homelks } from 'api/request.js'
export default {
  data () {
    return {
      api,
      row: 4,
      content: []
    }
  },
  mounted () {
    homelks(data => {
      this.content = data.data
    })
  }
}
</script>
<style lang="less" scoped>
@import "./css/index.less";
</style>
