<template>
  <div id="home">
    <el-row class="main" :gutter="20">
      <el-col :xs="{span:24,offset:0}" :sm="{span:16,offset:0}" :md="{span:16,offset:2}">
        <div>
          <essaylist-com :essaylist = 'essaylist'></essaylist-com>
        </div>
        </el-col>
      <el-col :xs="{span:24,offset:0}" :sm="{span:7,offset:0}" :md="{span:6,offset:0}" >
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

export default {
  name: 'Home',
  components:{
    guessCom,
    essaylistCom
  },
  data() {
    return {
      essaylist:[],
      high_quality_essaylist:[],

    }
  },
  async beforeCreate() {
    var marked = require('marked')
    this.$http.get('http://localhost:3000/essay/list').then(response => {
      this.essaylist = response.data
      // console.log(this.essaylist[0])
      for (let item in this.essaylist) {
        let html = marked(this.essaylist[item].character)
        this.essaylist[item].character = this.totext(html)
      }
      }).catch(response => {
          console.log(response)
      })
    
    
  },
  methods: {
    totext: function(HTML){
      var input = HTML;
      let result = input.replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi,'').replace(/<[^>]+?>/g,'').replace(/\s+/g,' ').replace(/ /g,' ').replace(/>/g,' ');  
      if(result.length >45){
        result = result.substring(0,45)+'...'
      }
      return result
    },
  }
}
</script>

