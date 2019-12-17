<template>
  <div>
    <div>
      <img class="column-6 vertical-mod" src="../../image/1f86578fad5d952007ddbb1eab6fe359.jpg" alt />
    </div>
    <div>
      <div class="flx justify-cent">
        <div
          class="flx justify-cent relation-tab padding-10"
          v-for="(ietm, index) in current"
          :key="index"
          v-on:click="addClass(index,$event)"
          v-bind:class="{blue:index==$store.state.login.tabIndex}"
        >
          <router-link :to="ietm.site" class="nav-tab">{{ietm.name}}</router-link>
        </div>
      </div>
      <div class="container">
        <router-view :key="key"></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import {serve} from 'api/request.js'
export default {
  data () {
    return {
      current: []
    }
  },
  methods: {
    addClass: function (index, event) {
      this.$store.state.login.tabIndex = index
    }
  },
  mounted () {
    serve((data) => {
      this.current = data.data
    })
  }
}
</script>
<style lang="less">
@import "./css/index.less";
</style>
