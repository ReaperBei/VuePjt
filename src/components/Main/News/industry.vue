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
      </div>
      <div class="company-right padding-20">
        <div class="font-20">为您推荐</div>
        <ul class="company-right-list">
          <li>
            <router-link to class="font-15">李保芳、李静仁站台，君品习酒定价1399元，习酒...</router-link>
          </li>
          <li>
            <router-link to class="font-15">从“一家独大”到“多品开花”，30家黔酒大佬齐聚...</router-link>
          </li>
          <li>
            <router-link to class="font-15">白酒企业一季度业绩全线飘红</router-link>
          </li>
          <li>
            <router-link to class="font-15">季克良知道的岩博酒怎么样？</router-link>
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
