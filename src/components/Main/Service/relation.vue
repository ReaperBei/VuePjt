<template>
  <div>
    <div class="container">
      <div class="padding-20">
        <p class="text-cent margin-b-10">
          <img class="max-w" src="../../image/1557758553963351.jpg" alt />
        </p>
        <ul class="relation-box flx justify-be">
          <li class="relation-content padding-b-10">
            <div class="title font-20">■ 官方客服热线</div>
            <div class="content padding-tb-15">
              <p>全国范围</p>
              <p>招商咨询、品牌合作、售前售后与其他服务。</p>
              <p>官方热线：400-623-1999</p>
            </div>
            <div class="dashed"></div>
          </li>
          <li class="relation-content padding-b-10" v-for="(item, index) in content" :key="index">
            <div class="title font-20">{{item.topography}}</div>
            <div class="content padding-tb-15">
              <p>{{item.scope}}</p>
              <p>区域代表：{{item.name}}</p>
              <p>联系方式：{{item.tel}}</p>
            </div>
            <div class="dashed"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { relation } from 'api/request.js'
export default {
  data () {
    return {
      content: []
    }
  },
  mounted () {
    relation((data) => {
      this.content = data.data
    })
  }
}
</script>
<style lang="less">
@import "./css/index.less";
</style>
