<template>
    <div id="footer">
        <el-row class="footer_class">
            <el-col :xs="{span:10,offset:2}" :sm="{span:7,offset:6}" :md="{span:4,offset:8}">青辰 版权所有</el-col>
            <el-col :xs="{span:10,offset:0}" :sm="{span:7,offset:0}" :md="{span:4,offset:0}">
                <el-link :underlin="false" href="http://www.beian.miit.gov.cn/" target="_blank">蜀ICP备20010593号</el-link>
            </el-col>
        </el-row>
        
    </div>
</template>
<style scoped>
    #footer{
        background: #C5CAE9;
    }
    .footer_class{
        height: 60px;
        padding: 20px;
        color: #606266;
    }
</style>