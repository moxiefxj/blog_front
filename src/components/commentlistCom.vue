<template>
    <div id="commentlist">
        <div v-for="(item, index) in commentlist" :key="index">
            <el-row class="list">
                <el-row class="commentitem">
                    <el-col :xs="{span:4,offset:1}" :sm="{span:3,offset:2}" :md="{span:3,offset:1}"><img :src="item.headerimg" ></el-col>
                    <el-col :xs="{span:19,offset:0}" :sm="{span:19,offset:0}" :md="{span:20,offset:0}">{{item.comment}}</el-col>
                </el-row>
                <el-row class="nameTime">
                    <el-col :xs="{span:9,offset:2}" :sm="{span:5,offset:5}" :md="{span:5,offset:4}"><i class="el-icon-user">{{item.username}}</i></el-col>
                    <el-col :xs="{span:13,offset:0}" :sm="{span:10,offset:0}" :md="{span:10,offset:0}"><i class="el-icon-time">{{item.comment_time}}</i></el-col>
                </el-row> 
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    props:['cid','commentlist'],
    data() {
        return {
        }
    },
}
</script>

<style scoped>
    img{ 
        border-radius: 100%;
    }
    .list{
        background: #E8EAF6;
        border-radius: 20px;
        padding: 10px 5px;
        margin: 10px 5px;
    }
    .nameTime{
        width: 100%;
        position:absolute;
        color:#BDBDBD ;
        bottom: 4px;
    }
    .commentitem{
        margin-bottom: 14px;
    }
    
</style>