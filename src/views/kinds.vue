<template>
    <div id="kinds">
        <el-row :gutter="20">
            <el-col :xs="{span:24,offset:0}" :sm="{span:16,offset:0}" :md="{span:16,offset:2}">
                <div>
                    <kindlist-com :kindlist = 'kindlist'></kindlist-com>
                </div>
            </el-col>
            <el-col :xs="{span:24,offset:0}" :sm="{span:7,offset:0}" :md="{span:6,offset:0}">
                <div>
                    <guess-com></guess-com>
                </div>
            </el-col>
        </el-row>      
    </div>
</template>
<script>

import kindlistCom from '../components/kindlistCom';
import guessCom from '../components/guessCom'
import {totext,totime} from '../js/common/essay'
export default {
    components:{
        kindlistCom,
        guessCom,
    },
    data() {
        return {
            kindlist:[],
        }
    },
    props:['kind','kind_child'],
    beforeMount() {
        this.$http.get('http://localhost:3000/essay/kind',{
            params:{
                kind_child:this.kind_child
            }
        }).then(response => {
            this.kindlist = response.data
            for (let item in this.kindlist) {
                this.kindlist[item].character = totext(this.kindlist[item].character)
                this.kindlist[item].send_time = totime(this.kindlist[item].send_time)
            }
        }).catch(response => {
            console.log(response)
        })
        
    },
}
</script>