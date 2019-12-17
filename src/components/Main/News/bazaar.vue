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
            <router-link to class="font-15">现场直击|| 先谈困难，再取真经，余留芬要让人民...</router-link>
          </li>
          <li>
            <router-link to class="font-15">【解读】1年从2000万到3亿！5大规划透露人民...</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { bazaar } from 'api/request.js'
export default {
  data () {
    return {
      content: []
    }
  },
  mounted () {
    bazaar((data) => {
      this.content = data.data
    })
  }
}
</script>
<style lang="less">
@import "./css/index.less";
</style>
