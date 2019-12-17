<template>
  <div>
    <div>
      <div>
        <img
          src="../../image/b07c285f4a372313e256a98a5c83cf4d.jpg"
          alt
          class="column-6 vertical-mod"
        />
      </div>
    </div>
    <div class="flx justify-cent">
      <div
        class="flx justify-cent relation-tab padding-10"
        v-for="(ietm, index) in content"
        :key="index"
        v-on:click="addClass(index,$event)"
        v-bind:class="{ blue:index==($store.state.login.tabIndex)}"
      >
        <router-link :to="ietm.site" class="nav-tab font-16">{{ietm.name}}</router-link>
      </div>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { api } from 'api'
import { tabtotal } from 'api/request.js'
export default {
  data () {
    return {
      api,
      content: []
    }
  },
  methods: {
    addClass: function (index, event) {
      this.$store.state.login.tabIndex = index
    }
  },
  mounted () {
    tabtotal((data) => {
      this.content = data.data
    })
  }
}
</script>
<style lang="less">
@import '../Home/css/index.less';
@import './css/index.less';
</style>
