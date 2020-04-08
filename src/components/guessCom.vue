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
                <!-- 文章评论数 -->
                <el-col :xs="{span:8,offset:1}" :sm="{span:9,offset:1}" :md="{span:10,offset:1}">
                  <el-link icon="el-icon-chat-round" :underline="false">评论{{item.comments}}</el-link>
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
  props:['detail','high_quality_essaylist'],
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