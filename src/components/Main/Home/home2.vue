<template>
  <div class="home-list">
    <div class="title text-cent">
      <h2>人名的小酒</h2>
    </div>
    <div class="home-line"></div>
    <p class="home-desc">为幸福生活举杯</p>
    <div class="container">
      <ul ref="list" class="home-list-bliuk flx justify-be">
        <li class="module-list" v-for="(item, index) in homelist" :key="index">
          <div class="content-img">
            <img :src="api+item.img" alt />
          </div>
          <div class="content-bulik">
            <h3 class="widget-title">{{item.title}}</h3>
            <p class="des">{{item.describ}}</p>
            <div class="content-list-foot flx justify-be flxalign-cent margin-t-30">
              <router-link to>
                <el-button type="primary">查看详情</el-button>
              </router-link>
              <div class="flx justify-be flxalign-cent">
                <i class="el-icon-view"></i>
                <span>{{item.number}}</span>
              </div>
            </div>
          </div>
        </li>
        <li class="tem-list" v-for="(item, index) in (row-homelist.length%row)" v-if="homelist.length%row>0" :key="index">
        </li>
      </ul>
      <div class="text-cent">
        <el-button class="examine">查看更多</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import {api} from 'api'
import {list} from 'api/request.js'
export default {
  data () {
    return {
      api,
      row: 4,
      homelist: []
    }
  },
  mounted () {
    list((data) => {
      this.homelist = data.data
    })
  }
}
</script>
<style lang="less" scoped>
@import "./css/index.less";
.tem-list{
  display: none;
}
</style>
