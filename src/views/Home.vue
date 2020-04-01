<template>
  <div id="home">
    <el-row class="slideshow">
      <slide-com></slide-com>
    </el-row>
    
    <el-row class="main" :gutter="20">
      <el-col :xs="{span:24,offset:0}" :sm="{span:16,offset:0}" :md="{span:16,offset:2}">
        <div>
          <essaylist-com :essaylist = 'essaylist'></essaylist-com>
        </div>
        </el-col>
      <el-col :xs="{span:0,offset:0}" :sm="{span:7,offset:0}" :md="{span:6,offset:0}" >
        <div>
          <guess-com></guess-com>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import guessCom from '../components/guessCom'
import essaylistCom from '../components/essaylistCom';
import slideCom from '../components/slideCom'
import {totext,totime} from '../js/common/essay'

export default {
  name: 'Home',
  components:{
    guessCom,
    essaylistCom,
    slideCom
  },
  data() {
    return {
      essaylist:[],
      high_quality_essaylist:[],

    }
  },
  async beforeCreate() {
    this.$http.get('http://localhost:3000/essay/list').then(response => {
      this.essaylist = response.data
      
      for (let item in this.essaylist) {
        // 标准文章
        this.essaylist[item].character = totext(this.essaylist[item].character)
        // 标准化时间
        this.essaylist[item].send_time = totime(this.essaylist[item].send_time)
      }
      }).catch(response => {
          console.log(response)
      })    
  },
}
</script>

