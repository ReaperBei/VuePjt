<template>
  <div>
    <div class="container">
      <div class="home-list">
        <div class="title text-cent">
          <h2>企业优势</h2>
        </div>
        <div class="home-line"></div>
      </div>
      <el-carousel
        class="journalism-text-box firm-box"
        indicator-position="outside"
        :autoplay="false"
      >
        <el-carousel-item v-for="(item, index) in content" :key="index">
          <div class="flx firm-list">
            <div class="column-3 firm-left">
              <img class="column-6" :src="api+item.img" alt />
            </div>
            <div class="column-3 firm-right home-there-box padding-l-25">
              <h3>
                {{item.title}}
                <span v-if="index<=9">/0{{index+1}}</span>
                <span v-else>/{{index}}</span>
              </h3>
              <div class="line-height-30">{{item.describ}}</div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
import {api} from 'api'
import {homebst} from 'api/request.js'
export default {
  data () {
    return {
      lis: false,
      api,
      content: []
    }
  },
  mounted () {
    homebst((data) => {
      this.content = data.data
    })
  }
}
</script>
<style lang="less" scoped>
@import "./css/index.less";
</style>
