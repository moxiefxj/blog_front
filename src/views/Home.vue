<template>
  <div id="home">
    <b-container class="bv-example-row">
      <b-row class="text-center">
        <b-col lg="1"></b-col>
        <b-col cols="8" class="se">
          <b-row class="essay content" v-for="(item, index) in essaylist" :key="index">
            <b-col class="essayimg" cols="4">
              <img :src="item.essayimg">
            </b-col>
            <b-col class="character">
              <b-row class="title" @click="detail(item.id)">{{item.title}}</b-row>
              <b-row class="brief" v-html="item.character">{{item.character}}</b-row>
              <b-row class="comment">
                <img src="../assets/img/comment.png" alt=“comment>
                <span>{{item.like}}</span>
              </b-row>
            </b-col>
          </b-row>

          <!-- 文章列表 -->
          <!-- 
                <div class="comment">
                  <img src="../assets/img/comment.png" alt=“comment>
                  <span>{{item.like}}</span>
                </div>
              </div>
            </div> 
          </div> -->

        </b-col>
        <b-col col class="t">
          <!-- 高质量文章 -->
          <div class="high_quality_essay">
            <div class="guess_like">
              <p>猜你喜欢</p>
              <hr>
            </div>
            <div class="content" v-for="(item, index) in high_quality_essaylist" :key="index">
              <div class="img">
                <img :src="item.essayimg">
              </div>
              <div class="title">
                <h3 @click="detail(item.id)">{{item.title}}</h3>
              </div>
            </div>
          </div>
          <!-- 分类 -->
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      essaylist:[],
      high_quality_essaylist:[],
      character:[],

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
    this.$http.get('http://localhost:3000/essay/high_qualitylist').then(response => {
      this.high_quality_essaylist = response.data
      }).catch(response => {
          console.log(response)
      })
    
  },
  methods: {
    detail : function(id){
      this.$router.push({
        path:'/p/'+id
      })
    },
    totext: function(HTML){
      var input = HTML;
      let result = input.replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi,'').replace(/<[^>]+?>/g,'').replace(/\s+/g,' ').replace(/ /g,' ').replace(/>/g,' ');  
      if(result.length >110){
        result = result.substring(0,110)+'...'
      }
      return result
    }
  }

}
</script>

<style scoped>
    .se{
    }
    .t{
      background: greenyellow;
    }
    #home{
      margin: 20px;
      padding: 0;
    }
    .content{
      height: 160px;
      padding: 10px;
    }
    .essayimg{
      height: 100%;
    }
    .essayimg img{
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
    .character{
    }
    .character .title{
      margin: 10px;
      width: 100vm;
      height: 20%;
      font-size: 20px;
    }
    .character .brief{
      margin-left: 10px;
      margin-right: 10px;
      width: 100vm;
      font-size: 13px;
      height: 45%;
      color:#999;
    }
    /* .character .comment{
      float: right;
      margin-right: 10px;
      margin-left: 10px;
      background: chocolate;
      height: 15%;
      width: 10%;
    }
    .character .comment span{
      margin-left: 5px;
      padding: 0px;
      font-size: 1opx;
    } */
    .high_quality_essay .content{
      width: 100%;
      height: 80px;
      padding: 5px;
    }
    .high_quality_essay .title{
      width: 60%;
      height: 80px;
      float: left;
    }
    .high_quality_essay .img{
      width: 40%;
      height: 80px;
      float: left;
    }

    .high_quality_essay .img img{
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
    
  
</style>
