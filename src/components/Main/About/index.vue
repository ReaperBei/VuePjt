<template>
  <div>
    <div>
      <comImg />
      <div class='about-nav'>
        <div class="flx justify-cent">
          <div
            class="flx justify-cent relation-tab padding-10"
            v-for="(ietm, index) in content"
            :key="index"
            v-on:click="addClass(index,$event)"
            v-bind:class="{ blue:index==$store.state.login.tabIndex}"
          >
            <router-link :to="ietm.site" class="nav-tab font-16">{{ietm.name}}</router-link>
          </div>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import {api} from 'api'
import {summtab} from 'api/request.js'
import comImg from './common/index'
export default {
  data () {
    return {
      api,
      content: []
    }
  },
  components: {
    comImg
  },
  methods: {
    addClass (index, event) {
      this.$store.state.login.tabIndex = index
    }
  },
  mounted () {
    summtab((data) => {
      this.content = data.data
    })
  }
}
</script>
<style lang='less' scoped>
@import './css/index.less';
</style>
