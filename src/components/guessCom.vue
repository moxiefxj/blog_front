<template>
    <div id="guess">
        <el-row class="guess_title"> 
            <el-col :span="24">猜你喜欢</el-col>
        </el-row>
        <hr>
        <div class="guesslist" v-for="(item, index) in high_quality_essaylist" :key="index" >
          <el-row >
            <!-- 文章图片 -->
            <el-col class="img" :span="6">
              <img :src="item.essayimg">
            </el-col>
            <!-- 文章详情 -->
            <el-col :span="18">
              <!-- 文章标题 -->
              <el-row>
                  <el-link class="title" @click="detail(item.id)" :underline="false">{{item.title}}</el-link>
              </el-row>
              <el-row>
                <!-- 文章浏览数 -->
                <el-col class="view" :span="16">
                  <el-link icon="el-icon-link" :underline="false">浏览数{{item.view}}</el-link>
                </el-col>
                <!-- 文章赞数 -->
                <el-col :span="8">
                  <el-link icon="el-icon-thumb" :underline="false">点赞({{item.like}})</el-link>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        high_quality_essaylist:[],
      }
    },
    beforeCreate() {
      var marked = require('marked')
      this.$http.get('http://localhost:3000/essay/high_qualitylist').then(response => {
      this.high_quality_essaylist = response.data
      for (let item in this.high_quality_essaylist) {
        let title = this.high_quality_essaylist[item].title
        if (title.length > 5) {
          this.high_quality_essaylist[item].title = title.substring(0,5)+'...'
          
        }
      }
      }).catch(response => {
          console.log(response)
      })
    },
    methods:{
        detail : function(id){
            this.$router.push({
            path:'/p/'+id
        })
        },
    },
}
</script>

<style>
  .guess_title{
    padding: 5px;
    padding-left: 20px;
  }
  #guess{
      background: #E8EAF6;
  }
  .guesslist{
    margin-bottom: 10px;
  }
  .essayimg{
    height: 170px;
  }
  img{
    margin: 10px;
    width: 80%;
    height: 80%;
    border-radius: 5px;
  }
  .title{
    color: #303133;
    margin: 20px;
    font-size: 16px;
    font-weight: bold;
  }
  .view{
    padding-left: 50px;
  }
    
</style>