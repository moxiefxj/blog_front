<template>
    <div id="kinds">
        <el-row :gutter="20">
            <el-col :xs="{span:24,offset:0}" :sm="{span:16,offset:0}" :md="{span:16,offset:2}">
                <div class="kindlist" v-for="(item, index) in kindlist" :key="index">
                    <essay-com :item = 'item' :gokind = 'gokind' :like = 'like' :detail = 'detail'></essay-com>
                </div>
            </el-col>
            <el-col :xs="{span:24,offset:0}" :sm="{span:7,offset:0}" :md="{span:6,offset:0}">
                <div>
                    <guess-com :detail = 'detail' :high_quality_essaylist = 'high_quality_essaylist'></guess-com>
                </div>
            </el-col>
        </el-row>      
    </div>
</template>
<script>

import essayCom from '../components/common/essayCom';
import guessCom from '../components/guessCom'
export default {
    components:{
        essayCom,
        guessCom,
    },
    data() {
        return {
            kindlist:[],
            high_quality_essaylist:[],
            essayreq : new this.$essayreq(),
            operation : new this.$operation(),
        }
    },
    props:['kind','kind_child'],
    beforeMount() {
       this.getkindlist();
       this.get_high_quality_essaylist(); 
    },
    methods: {
        getkindlist: async function(){
            let response = await this.essayreq.getkindlist(this.$http,this.kind_child)
            let essay = new this.$essay()
            this.kindlist = response.data
            for (let item in this.kindlist) {
                this.kindlist[item].character = essay.totext(this.kindlist[item].character)
                this.kindlist[item].send_time = essay.totime(this.kindlist[item].send_time)
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
        gokind : function(kind,kind_child){
            this.$router.push({
            path:'/kinds/'+kind+'/'+kind_child
        })
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
        }

    },
}
</script>