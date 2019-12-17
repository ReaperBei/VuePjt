<template>
  <div>
    <div class="container">
      <div class="padding-20">
        <div v-for="(item,index) in content" :key="index">
            <p class="text-cent margin-b-10">
                <img class="max-w" :src="api+item.img" alt />
            </p>
            <div>
                <p class="line-height-30">{{item.describ}}</p>
                <p class="line-height-30">{{item.desci}}</p>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { api } from 'api'
import { merchants } from 'api/request.js'
export default {
  data () {
    return {
      api,
      content: []
    }
  },
  mounted () {
    merchants((data) => {
      this.content = data.data
    })
  }
}
</script>
<style lang="less">
</style>
