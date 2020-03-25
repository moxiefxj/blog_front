<template>
    <div id="page">
        <!-- 空白 -->
        <div class="left"></div>

        <!-- 主干 -->
        <div class="centerleft">
            <!-- 标题 -->
            <div class="title">
                {{essay.title}}
            </div>
            <!-- 分类、赞、浏览 -->
            <div class="msg"></div>
            <!-- 内容 -->
            <div class="markdown-body" v-html="item">
                {{item}}
            </div>
        </div>

        <!-- 推荐 -->
        <div class="centerright"></div>
        <!-- 空白 -->
        <div class="right"></div>
        
        
    </div>
</template>

<script>
import showdown from 'showdown'
import 'github-markdown-css'
export default {
    data() {
        return {
            item:null,
            essay:[],
        }
    },
    beforeMount() {
        this.$http.get('http://localhost:3000/essay/page',{
            params:{
                data:this.$route.params.id
            }
        }).then(response => {
            this.essay = response.data[0]
            var marked = require('marked')
            this.item = marked(this.essay.character)
        }).catch(response => {
            console.log(response)
        })    
    },
}
</script>

<style>


    #page{
        display: flex;
        margin: 10px;
        padding: 0;
        width: 100vm;
    }
    .left{
        float: left;
        width: 10%;
    }
    .centerleft{
        float: left;
        width: 60%;
        margin: 10px;
    }
    .centerright{
        float: left;
        width: 25%;
        background: chartreuse;
    }
    .centerleft .title{
        font-size: 30px;

    }
    
</style>