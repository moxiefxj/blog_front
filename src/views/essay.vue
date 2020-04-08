<template>
    <div id="page">
        <el-backtop></el-backtop>
        <el-row>
            <!-- 文章详情 -->
            <el-col class="essay" :xs="{span:24,offset:0}" :sm="{span:16,offset:0}" :md="{span:16,offset:1}">
                <el-row class="et">
                     <!-- 标题 -->
                    <div class="title_t">
                        {{essay.title}}
                    </div>
                </el-row>
                <el-row class="describe">
                    <!-- 分类 -->
                    <!-- <el-col :xs="{span:4,offset:0}" :sm="{span:4,offset:0}" :md="{span:4,offset:1}">
                        <el-link class="flag" :underline="false">{{essay.kind_child}}</el-link>
                    </el-col> -->
                    <!-- 作者 -->
                    <el-col :xs="{span:5,offset:2}" :sm="{span:4,offset:2}" :md="{span:3,offset:2}">
                        <el-link href="/about" icon="el-icon-user" :underline="false">冯筱静</el-link>
                    </el-col>
                    <!-- 时间 -->
                    <el-col :xs="{span:10,offset:0}" :sm="{span:7,offset:0}" :md="{span:6,offset:0}">
                        <el-link @click="time(item.send_time)" icon="el-icon-time" :underline="false">{{essay.send_time}}</el-link>
                    </el-col>
                    <!-- 喜欢 -->
                    <el-col :xs="{span:5,offset:0}" :sm="{span:4,offset:0}" :md="{span:3,offset:0}">
                        <el-link icon="el-icon-thumb" @click="like(essay.id)" :underline="false">点赞{{essay.like}}</el-link>
                    </el-col> 
                    <!-- 浏览 -->
                    <el-col :xs="{span:0,offset:0}" :sm="{span:5,offset:0}" :md="{span:4,offset:0}">
                        <el-link icon="el-icon-link" :underline="false">浏览数{{essay.view}}</el-link>
                    </el-col>
                </el-row>      
                <el-row>
                    <div class="markdown-body content" v-html="item">
                        {{item}}
                    </div>
                </el-row>
                <!-- 评论 -->
                <el-row class="comments">
                    <el-col :span = "24">说出您的看法</el-col>
                </el-row>
                <el-row>
                    <comment-com :cid='cid' :headerimg='headerimg' :submitMessage = 'submitMessage'></comment-com>
                </el-row>
                <el-row class="comments">
                    <el-col :span="24">小天地</el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <commentlist-com :cid='cid' :commentlist = 'commentlist'></commentlist-com>
                    </el-col>
                </el-row>    
            </el-col>
            <!--小屏不显示  -->
            <el-col :xs="{span:0,offset:0}" :sm="{span:7,offset:0}" :md="{span:6,offset:1}" >
                <guess-com :detail = 'detail' :high_quality_essaylist = 'high_quality_essaylist'></guess-com>
            </el-col>
        </el-row>
    </div>
    
</template>

<script>
import showdown from 'showdown'
import 'github-markdown-css'
import guessCom from '../components/guessCom'

import breadCom from '../components/common/breadCom'
import commentlistCom from '../components/commentlistCom'
import commentCom from '../components/common/commentCom'

export default {
    components:{
        breadCom,
        guessCom,
        commentlistCom,
        commentCom
    },
    data() {
        return {
            item:null,
            essay:[],
            high_quality_essaylist:[], 
            essayreq : new this.$essayreq(),
            headerimg:[],
            comment : new this.$comment,
            commentlist:[],
            operation:new this.$operation,
        }
    },
    computed: {
        cid() {
            return this.$route.params.id;
        }
    },
    beforeMount() {
         this.initData();
         this.getHeader();
         this.getList();
         this.get_high_quality_essaylist();
    },
    watch: {
        cid: {
            handler: function(val, oldVal){
                if (val !== oldVal) {
                    this.initData();
                }
            },
        }
    },
    methods: {
        initData() {
            this.getpage()
        },
        getpage :async function(){
            var marked = require('marked')
            let response = await this.essayreq.getpage(this.$http,this.cid)
            this.essay = response.data[0]
            // 转文本
            let essay1 = new this.$essay()
            this.item = marked(this.essay.character)
            // 转时间
            this.essay.send_time = essay1.totime(this.essay.send_time) 
        },
        getHeader : async function(){
            let response = await this.comment.getHeader(this.$http);
            this.headerimg = response.data
            console.log(this.headerimg)
        },
        submitMessage : function(valid,form){
          if (valid) {
            this.$http.get('/comment/add',{
              params:{
                username:form.name,
                headerimg: form.header,
                comment: form.type,
                toid:this.cid,
              }
            }).then(response => {
              console.log(response)
            }).catch(response => {
              console.log(response)
            })
            this.$notify({
              title: '发送成功',
              type: 'success'
            });
          } else {
           this.$notify.error({
              title: '似乎出了一些问题'
            });
            return false;
          }
        },
        getList: async function(){
            let essay = new this.$essay()
            const response = await this.comment.getList(this.$http,this.cid)
            this.commentlist = response.data
            this.commentlist.forEach(element => {
                element.comment_time = essay.totime(element.comment_time)
            });
        },
        like :async function(id){
            let res = await this.operation.like(this.$http,id)
            if(res.data.status == 0){
            // 已经点过赞
            this.$message('已经点过赞了哟(＾Ｕ＾)ノ~ＹＯ');
            }
            else{
            // 未点过赞,赞+1；
            this.item.like = this.item.like +1
            this.$message('蟹蟹~ 你的喜欢(❤ ω ❤)');
            }
        },
        get_high_quality_essaylist: async function(){
            let res = await this.essayreq.get_high_quality_essaylist(this.$http)
            this.high_quality_essaylist = res.data
            console.log(this.high_quality_essaylist)
            for (let item in this.high_quality_essaylist) {
                let title = this.high_quality_essaylist[item].title
                if (title.length > 10) {
                this.high_quality_essaylist[item].title = title.substring(0,10)+'...' 
                }
            }
        },
        detail:async function(id){
            // 跳转页面前， 浏览记录+1
            this.operation.addBrowse(this.$http,id)
            // 跳转页面
            this.$router.push({
                path:'/p/'+id
            })
        },
    },
}
</script>

<style scoped>
    .essay{
        margin: 0;
        padding: 0;
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
    .comments{
      padding: 10px 30px;
      background: #F5F5F5;
      border: 4px solid Transparent;
      border-left-color: #C5CAE9;
      font-size: 18px;
      font-weight: bold;
    }
    .describe{
        width: 100%;
    }
</style>