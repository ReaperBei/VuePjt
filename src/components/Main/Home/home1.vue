<template>
  <div>
    <div class="block">
      <el-carousel trigger="click" class="home">
        <el-carousel-item v-for="(item, index) in homeList" :key="index">
          <img class="column-6 colheight-6" :src="api+item.image" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
import {api} from 'api'
import {homeimg} from 'api/request.js'
export default {
  data () {
    return {
      api,
      homeList: []
    }
  },
  mounted () {
    homeimg(data => {
      this.homeList = data.data
    })
  },
  methods: {}
}
</script>
<style lang="less" scoped>
@import "./css/index.less";
</style>
