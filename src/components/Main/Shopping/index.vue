<template>
  <div>
    <div>
      <img class="column-6 vertical-mod" src="../../image/616e3d509a06bc266d4a4afbeeb8e036.jpg" alt />
    </div>
    <div class="container">
      <div class="padding-20">
        <div class="Shopping-box">
          <div
            class="Shopping-conent"
            v-for="(item, index) in content"
            :key="index"
            :class="item.addclss"
          >
            <div class="left">
              <div class="wechat-bag">
                <img class="column-6 vertical-mod" :src="api+item.img" alt />
              </div>
              <div>{{item.test}}</div>
              <div>{{item.shopping}}</div>
              <div>{{item.text}}</div>
            </div>
            <div class="right">
              <div class="att_item_code text-cent">
                <img class="column-6" :src="api+item.scan_img" alt />
                <div class="margin-auto">{{item.scan}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { api } from 'api'
import { shopping } from 'api/request.js'
export default {
  data () {
    return {
      api,
      content: []
    }
  },
  mounted () {
    shopping((data) => {
      this.content = data.data
    })
  }
}
</script>
<style lang="less">
@import "./css/Shopping.less";
</style>
