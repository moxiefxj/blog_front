<template>
    <div id="guess">
        <el-row class="guess_title"> 
            <el-col :span="24">热门文章</el-col>
        </el-row>
        
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
                <el-col :xs="{span:9,offset:1}" :sm="{span:14,offset:0}" :md="{span:12,offset:0}">
                  <el-link icon="el-icon-link" :underline="false">浏览数{{item.view}}</el-link>
                </el-col>
                <!-- 文章赞数 -->
                <el-col :xs="{span:8,offset:1}" :sm="{span:9,offset:1}" :md="{span:10,offset:1}">
                  <el-link @click="like(item.id,index)" icon="el-icon-thumb"  :underline="false">点赞{{item.like}}</el-link>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
    </div>
</template>

<script>
import {addBrowse} from '../js/browse_like'
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
        if (title.length > 10) {
          this.high_quality_essaylist[item].title = title.substring(0,10)+'...'
          
        }
      }
      }).catch(response => {
          console.log(response)
      })
    },
    methods:{
        detail : function(id){
          // 跳转页面前， 浏览记录+1
          addBrowse(this.$http,id)
          // 跳转页面
            this.$router.push({
            path:'/p/'+id
        })
        },
        like : function(id,index){
          this.$http.get('http://localhost:3000/like/add',{
              params:{
                  id:id
              }
          }).then(response => {
            if(response.data.status == 0){
              // 已经点过赞
              this.$message('已经点过赞了哟(＾Ｕ＾)ノ~ＹＯ');
            }
            else{
              // 未点过赞,赞+1
              this.high_quality_essaylist[index].like +=1 
              this.$message('蟹蟹~ 你的喜欢(❤ ω ❤)');
            }
          }).catch(response => {
              console.log(response)
          })
        }
    },
    watch: {
      high_quality_essaylist(newValue, oldValue) {
      },
    },
}
</script>

<style scoped>
  .guess_title{
    padding: 5px;
    padding-left: 20px;
    margin-bottom: 20px;
    background: #F5F5F5;
    border: 4px solid Transparent;
    border-left-color: #C5CAE9;
  }
  .guesslist{
    margin-bottom: 10px;
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
    
</style>