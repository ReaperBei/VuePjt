<template>
  <div>
    <div class="container">
      <ul class="video-box">
        <li class="video-list" v-for="(item, index) in content" :key="index">
          <div class="video-box-content">
            <img class="column-6" :src="api+item.img" alt />
            <div class="video-content-ation">
              <router-link to>
                <div class="video-content">
                  <div class="vertical-align-middle">
                    <span class="text-cent">{{item.time.slice(0,10)}}</span>
                    <span class="video-ledgement"></span>
                    <h3 class="font-25 margin-b-20 advertising-content">{{item.name}}</h3>
                    <div class="video-btn">
                      <span class="el-icon-caret-right font-20 video-play"></span>
                      <span>播放</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </li>
        <li class="video-show" v-for="(item, index) in (row-content.length%row)" :key="index" v-if="content.length%row>0"></li>
      </ul>
      <div class="text-cent padding-20">
        <el-pagination background layout="prev, pager, next" :total="20"></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { api } from 'api'
import { video } from 'api/request.js'
export default {
  data () {
    return {
      api,
      row: 4,
      content: []
    }
  },
  mounted () {
    video((data) => {
      this.content = data.data
      console.log(data)
    })
  }
}
</script>
<style lang="less" scoped>
@import "../css/index.less";
</style>
