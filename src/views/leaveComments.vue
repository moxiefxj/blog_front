<template>
    <!-- 留言模块 -->
    <div class="commentbg">
      <el-row>
        <el-col class="title">给我留言</el-col>
        <!-- 留言模块 -->
        <el-col>
            <comment-com :cid='cid' :headerimg='headerimg' :submitMessage = 'submitMessage'></comment-com>
        </el-col>
      </el-row>
        <el-row>
            <el-col class="title">小天地</el-col>
        </el-row>
        <!-- 留言列表 -->
        <div>
            <commentlist-com :cid='cid' :commentlist = 'commentlist'></commentlist-com>
        </div>
    </div>
</template>

<script>
import commentCom from '../components/common/commentCom'
import commentlistCom from '../components/commentlistCom'
export default {
    components:{
        commentCom,
        commentlistCom
    },
    data() {
        return {
            cid:-1,
            headerimg:[],
            comment : new this.$comment,
            commentlist:[],
        }
    },
    beforeMount() {
        this.getHeader();
        this.getList()
    },
    methods: { 
        handleComment() {
            
        },
        getHeader : async function(){
            let response = await this.comment.getHeader(this.$http);
            this.headerimg = response.data
        },
        submitMessage : function(valid,form){
          if (valid) {
            this.$http.get('/comment/add',{
              params:{
                // ...form,
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
        }
    },
}
</script>

<style scoped>
    .title{
      padding: 10px 30px;
      background: #F5F5F5;
      border: 4px solid Transparent;
      border-left-color: #C5CAE9;
      font-size: 18px;
      font-weight: bold;
    }
    .commentbg{
        padding-top: 10px;
        background: #FAFAFA;
    }

</style>