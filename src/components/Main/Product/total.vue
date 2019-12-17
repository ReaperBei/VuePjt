<template>
  <div>
    <ul class="home-list-bliuk flx justify-be">
      <li class="module-list" v-for="(item, index) in content" :key="index">
        <div class="content-img">
          <img :src="api+item.img" alt />
        </div>
        <div class="content-bulik">
          <div class="font-20">{{item.title}}</div>
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
      <li
        class="tem-list"
        v-for="(item, index) in (row-content.length%row)"
        :key="index"
        v-if="content.length%row>0"
      ></li>
    </ul>
    <div class="text-cent padding-20">
      <el-pagination background layout="prev, pager, next" :total="20"></el-pagination>
    </div>
  </div>
</template>
<script>
import { api } from 'api'
import { total } from 'api/request.js'
export default {
  data () {
    return {
      api,
      row: 4,
      content: []
    }
  },
  mounted () {
    total((data) => {
      this.content = data.data
    })
  }
}
</script>
<style lang="less">
</style>
