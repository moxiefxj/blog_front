<template>
    <!-- 留言模块 -->
    <div>
        <el-row class="comments">
            <el-col :span = "24">给我留言</el-col>
        </el-row>
        <el-row>
            <!-- 留言模块 -->
            <comment-com></comment-com>
        </el-row>
        
        
    </div>
</template>

<script>
import commentCom from '../components/common/commentCom'
export default {
    components:{
        commentCom
    }
}
</script>

<style scoped>
    .comments{
      padding: 10px 30px;
      background: #F5F5F5;
      border: 4px solid Transparent;
      border-left-color: #C5CAE9;
      font-size: 18px;
      font-weight: bold;
    }
</style>