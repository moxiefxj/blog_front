<template>
    <div>
        <!-- title -->
        <el-row class="titlebg">
        <el-link class="flag" @click="kind(item.kind,item.kind_child)"  :underline="false">{{item.kind_child}}</el-link>
        <el-link class="title" @click="detail(item.id)" :underline="false">{{item.title}}</el-link>
        </el-row>
        <!-- 文章列表 -->
        <el-row class="essay_body">
        <!-- img -->
        <el-col :xs="{span:24,offset:0}" :sm="{span:4,offset:0}" :md="{span:6,offset:0}" class="essayimg">
            <img :src="item.essayimg">
        </el-col>
        <!-- 详情 -->
        <el-col :xs="{span:24,offset:0}" :sm="{span:20,offset:0}" :md="{span:16,offset:0}">
            <!-- essay -->
            <el-row class="essay" v-html="item.character">{{item.character}}</el-row>
            <!-- comments -->
            <el-row class="comment">
            <!-- 作者 -->
            <el-col :xs="{span:0,offset:0}" :sm="{span:4,offset:0}" :md="{span:3,offset:1}">
                <el-link href="/about" icon="el-icon-user" :underline="false">冯筱静</el-link>
            </el-col>
            <!-- 时间 -->
            <el-col :xs="{span:10,offset:0}" :sm="{span:10,offset:0}" :md="{span:6,offset:1}">
                <el-link icon="el-icon-time" :underline="false">{{item.send_time}}</el-link>
            </el-col>
            <!-- 评论 -->
            <el-col :xs="{span:5,offset:0}" :sm="{span:4,offset:1}" :md="{span:3,offset:0}">
                <el-link icon="el-icon-chat-round" :underline="false">评论{{item.comments}}</el-link>
            </el-col>
            <!-- 喜欢 -->
            <el-col :xs="{span:6,offset:0}" :sm="{span:5,offset:0}" :md="{span:3,offset:1}">
                <el-link :plain = "true" @click="like(item.id)" icon="el-icon-thumb" :underline="false">点赞{{item.like}}</el-link>
            </el-col> 
            </el-row>
        </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    props:['item','kind','like','detail'],
    watch: {
      data(val,newval){
        console.log(val)
        console.log(newval)
      }
    },
}
</script>

<style>
  .kindlist{
    background:#FAFAFA;
    margin-bottom: 20px;
  }
  .essaylist{
    background: #FAFAFA;
    margin-bottom: 10px;
  }
   img{
    width: 70%;
    height: 70%;
    border-radius: 5px;
  }
  .title{
    color: #303133 !important;
    margin: 0 !important;
    padding: 10px 20px !important;
    font-size: 20px !important;
    font-weight: bold !important;
  }
  .title:hover{
    color: #C5CAE9 !important;
  }
  .titlebg{
    /* background: red; */
    border: 2px solid Transparent;
  }
  .essay{
    margin-left: 20px;
    color: #909399;
    font-size: 15px;
    margin-bottom: 50px;
  }
  .essayimg{
    margin-left: 20px;
  }
  .comment{
    padding: 0;
    margin-top: 20px;
    position: absolute;
    width: 100%;
    bottom: 5px;
  }
  .flag{
    padding: 5px 10px !important;
    background: #E0F2F1;
    border-radius: 10px;
  }
    
</style>