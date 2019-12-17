<template>
  <div>
    <div class="flx justify-be">
      <div class="company-left">
        <ul class="padding-20">
          <li v-for="(item, index) in content" :key="index">
            <h4 class="padding-b-20">
              <router-link class="font-22" to>{{item.name}}</router-link>
            </h4>
            <p class="padding-b-10 font-16">
                {{item.describ}}
            </p>
            <p class="info padding-b-20">
              <span class="font-16">
                <i class="el-icon-time font-16" aria-hidden="true"></i>
                {{item.teim.slice(0,10)}}
              </span>
              <span class="font-16">
                <i class="el-icon-user-solid font-16" aria-hidden="true"></i>
                admin
              </span>
              <span class="font-16">
                <i class="el-icon-view font-16" aria-hidden="true"></i>
                {{item.number}}
              </span>
            </p>
          </li>
        </ul>
        <div class="text-cent padding-20">
          <el-pagination background layout="prev, pager, next" :total="20"></el-pagination>
        </div>
      </div>
      <div class="company-right padding-20">
        <div class="font-20">为您推荐</div>
        <ul class="company-right-list">
          <li>
            <router-link to class="font-15">栉风沐雨二十载，春华秋实铸清酱</router-link>
          </li>
          <li>
            <router-link to class="font-15">岩博酒业|荣获贵州省科学技术奖省科技进步二等奖</router-link>
          </li>
          <li>
            <router-link to class="font-15">多彩贵州风·黔酒中国行|人民小酒飘香洪城南昌</router-link>
          </li>
          <li>
            <router-link to class="font-15">人民小酒将在浙江嘉兴如何扎根生长？</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { company } from 'api/request.js'
export default {
  data () {
    return {
      content: []
    }
  },
  mounted () {
    company((data) => {
      this.content = data.data
    })
  }
}
</script>
<style lang="less">
@import "./css/index.less";
</style>
