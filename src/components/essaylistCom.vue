<template>
    <div id="essaylist">
        <div class="essaylist" v-for="(item, index) in essaylist" :key="index">
          <!-- 文章列表 -->
          <el-row :gutter="20">
            <!-- img -->
            <el-col :span="6" class="essayimg">
              <img :src="item.essayimg">
            </el-col>
            <!-- 详情 -->
            <el-col :span="18">
              <!-- title -->
              <el-row><el-link class="title" @click="detail(item.id)" :underline="false">{{item.title}}</el-link></el-row>
              <!-- essay -->
              <el-row class="essay" v-html="item.character">{{item.character}}</el-row>
              <!-- comments -->
              <el-row class="comments" :gutter="20">
                <!-- 作者 -->
                <el-col :span="4">
                  <el-link href="/about" icon="el-icon-user" :underline="false">冯筱静</el-link>
                </el-col>
                <!-- 分类 -->
                <el-col :span="12">
                  <el-link @click="kind(item.kind,item.kind_child)" icon="el-icon-collection-tag" :underline="false">{{item.kind_child}}</el-link>
                </el-col>
                <!-- 评论 -->
                <el-col :span="4">
                  <el-link icon="el-icon-chat-round" :underline="false">评论{{item.comments}}</el-link>
                </el-col>
                <!-- 喜欢 -->
                <el-col :span="4">
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
    props:['essaylist'],
    methods: {
        detail : function(id){
            this.$router.push({
            path:'/p/'+id
        })
        },
        kind : function(kind,kind_child){
            this.$router.push({
            path:'/kinds/'+kind+'/'+kind_child
        })
        }
    },
}
</script>

<style scoped>
    .essaylist{
    background:#F2F6FC;
    margin-bottom: 20px;
  }
  .essayimg{
    height: 170px;
  }
  img{
    margin: 20px;
    width: 80%;
    height: 80%;
    border-radius: 5px;
  }
  .title{
    color: #303133;
    margin: 10px;
    font-size: 25px;
    font-weight: bold;
  }
  .essay{
    margin-left: 20px;
    color: #909399;
    font-size: 17px;
  }
  .comments{
    padding: 0;
    margin-top: 20px;
    margin-left: 20px ;
  }
</style>