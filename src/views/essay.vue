<template>
    <div id="page">
        <el-row>
            <!-- 文章详情 -->
            <el-col class="essay" :xs="{span:24,offset:0}" :sm="{span:16,offset:0}" :md="{span:15,offset:2}">
                <el-row class="et">
                     <!-- 标题 -->
                    <div class="title_t">
                        {{essay.title}}
                    </div>
                </el-row>
                <el-row class="">
                    <!-- 分类 -->
                    <el-col :xs="{span:0,offset:0}" :sm="{span:4,offset:0}" :md="{span:4,offset:1}">
                        <el-link class="flag" :underline="false">{{essay.kind_child}}</el-link>
                    </el-col>
                    <!-- 作者 -->
                    <el-col :xs="{span:0,offset:0}" :sm="{span:4,offset:0}" :md="{span:3,offset:0}">
                        <el-link href="/about" icon="el-icon-user" :underline="false">冯筱静</el-link>
                    </el-col>
                    <!-- 时间 -->
                    <el-col :xs="{span:10,offset:2}" :sm="{span:10,offset:0}" :md="{span:5,offset:0}">
                        <el-link @click="time(item.send_time)" icon="el-icon-time" :underline="false">{{essay.send_time}}</el-link>
                    </el-col>
                    <!-- 喜欢 -->
                    <!-- <el-col :xs="{span:4,offset:1}" :sm="{span:5,offset:0}" :md="{span:3,offset:0}">
                        <el-link icon="el-icon-thumb" :underline="false">点赞{{essay.like}}</el-link>
                    </el-col>  -->
                    <!-- 浏览 -->
                    <el-col :xs="{span:9,offset:1}" :sm="{span:14,offset:0}" :md="{span:4,offset:0}">
                        <el-link icon="el-icon-link" :underline="false">浏览数{{essay.view}}</el-link>
                    </el-col>
                </el-row>
                
                <el-row>
                    <div class="markdown-body content" v-html="item">
                        {{item}}
                    </div>
                </el-row>
                
                
            </el-col>
            <!--小屏不显示  -->
            <el-col :xs="{span:0,offset:0}" :sm="{span:7,offset:0}" :md="{span:6,offset:1}" >
                <guess-com></guess-com>
            </el-col>
        </el-row>
        
        
    </div>
</template>

<script>
import showdown from 'showdown'
import 'github-markdown-css'
import guessCom from '../components/guessCom'

import breadCom from '../components/common/breadCom'
import {totext,totime} from '../js/common/essay'

export default {
    components:{
        breadCom,
        guessCom,
    },
    data() {
        return {
            item:null,
            essay:[],
        }
    },
    beforeMount() {
        var marked = require('marked')

        this.$http.get('http://localhost:3000/essay/page',{
            params:{
                data:this.$route.params.id
            }
        }).then(response => {
            this.essay = response.data[0]
            // 转文本
            this.item = marked(this.essay.character)
            // 转时间
            this.essay.send_time = totime(this.essay.send_time) 
            console.log(this.essay) 
        }).catch(response => {
            console.log(response)
        })  
    },
}
</script>

<style scoped>
    .essay{
        background: #FAFAFA;
    }
    .title_t{
        color: #212121;
        /* background: rosybrown; */
        font-size: 40px;
        margin-left: 30px;
    }
    .content{
        margin-left: 20px;
    }
    .et{
        padding-bottom: 20px;
    }
    .flag{
        background: #E0F2F1;
        border-radius: 10px;
    }
</style>