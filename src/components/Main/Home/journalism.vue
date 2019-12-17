<template>
  <div>
    <div class="container home-journalism">
      <div class="home-list">
        <div class="title text-cent">
          <h2>新闻动态</h2>
        </div>
        <div class="home-line"></div>
        <div class="flx justify-be padding-t-30">
          <div class="column-3 journalism-left">
            <div class="padding-b-10">
              <div class="title flx title-border justify-be flxalign-cent">
                <h2 class="journalism-title">要闻推荐</h2>
                <span class="more">更多</span>
              </div>
            </div>
            <el-carousel class="journalism-text-box" indicator-position="outside">
              <el-carousel-item v-for="(item, index) in carousel" :key="index">
                <div class="journalism-img">
                  <img class="column-6" :src="api+item.img" alt />
                </div>
                <div class="journalism-text">
                  <h3 class="text">{{item.title}}</h3>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="column-3 journalism-right padding-l-30">
            <div class="padding-b-10">
              <div class="title flx title-border justify-be flxalign-cent">
                <h2 class="journalism-title">最新动态</h2>
                <span class="more">更多</span>
              </div>
            </div>
            <div>
              <ul class="news-list-bulik">
                <li v-for="(item, index) in conent" :key="index">
                  <div>
                    <div class="title flx margin-t-5">
                      <span>{{item.time.slice(0,10)}}</span>
                      <div class="margin-l-10">{{item.title}}</div>
                    </div>
                    <div class="content padding-tb-10">
                        {{item.describ}}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="news-bg">
        <img class="max-w" src="../../image/6ef2d38d3abcca4e787d3874dd19041b.jpg" alt />
      </div>
    </div>
  </div>
</template>
<script>
import {api} from 'api'
import {homenews, newscar} from 'api/request.js'
export default {
  data () {
    return {
      api,
      carousel: [],
      conent: []
    }
  },
  mounted () {
    newscar(data => {
      this.carousel = data.data
    })
    homenews(data => {
      console.log(data)
      this.conent = data.data
    })
  }
}
</script>
<style lang="less" scoped>
@import "./css/index.less";
</style>
