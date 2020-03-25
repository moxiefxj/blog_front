<template>
    <div id="kinds">
        <el-row :gutter="20">
            <el-col :xs="{span:24,offset:0}" :sm="{span:16,offset:4}" :md="{span:16,offset:2}">
                <div>
                    <kindlist-com  :kindlist = 'kindlist'></kindlist-com>
                </div>
            </el-col>
            <el-col :xs="{span:24,offset:0}" :sm="{span:16,offset:4}" :md="{span:6,offset:0}">
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
        var marked = require('marked')
        this.$http.get('http://localhost:3000/essay/kind',{
            params:{
                kind_child:this.kind_child
            }
        }).then(response => {
            this.kindlist = response.data
            for (let item in this.kindlist) {
                let html = marked(this.kindlist[item].character)
                this.kindlist[item].character = this.totext(html)
            }
        }).catch(response => {
            console.log(response)
        })
        
    },
    methods: {
        totext: function(HTML){
            var input = HTML;
            let result = input.replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi,'').replace(/<[^>]+?>/g,'').replace(/\s+/g,' ').replace(/ /g,' ').replace(/>/g,' ');  
            if(result.length >45){
                result = result.substring(0,45)+'...'
            }
            return result
        },
    },
    watch: {
        $route(to,from){
            location.reload()
        }
    },
}
</script>