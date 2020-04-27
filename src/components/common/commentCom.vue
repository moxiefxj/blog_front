<template>
    <div id="comment">
        <el-form ref="form" :rules="rules" :model="form" label-width="80px">
            <el-form-item label="昵称" prop="name">
                <el-input class="inputsize" v-model="form.name" placeholder="请输入昵称"></el-input>
            </el-form-item>
            <el-form-item label="头像" prop='header'>
                <el-col 
                v-for="(item, index) in headerimg" :key="index"
                :xs="{span:5,offset:1}" :sm="{span:3,offset:2}" :md="{span:3,offset:2}">
                  <img :class="index == idx?'hover':''"  @click="chooseimg(item,index)" :src="item.headerimg" alt="加载中">
                </el-col>
            </el-form-item>
            <el-form-item label="您的想法" prop="type">
              <el-input type="textarea" v-model="form.type" placeholder="尽情吐槽吧！！"></el-input>
            </el-form-item>

            <el-form-item class="submitbox">
              <el-button type="primary" @click="submitForm('form')">提交</el-button>
              <el-button @click="resetForm('form')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>      
</template>
<script>
  export default {
    props:['cid','headerimg','submitMessage'],
    data() {
      return {
        idx:0,
        form: {
          name: '',
          header: '',
          type: '',
          toid:this.cid,
        },
        rules: {
          name: [
            { required: true, message: '请输入昵称', trigger: 'blur' },
            { min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur' }
          ],
          type: [
            { required: true, message: '写点什么吧!', trigger: 'blur' },
            {max: 255 , message: '吐槽的话过多哟', trigger: 'blur'}
          ],
        }
      }
    },
    watch: {
      headerimg (val,olval) {
        if(val != olval){
          this.form.header = val[0].headerimg
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          this.submitMessage(valid,this.form)
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      chooseimg(item,index){
        this.idx = index
        this.form.header = item.headerimg
      }
    },
  }
</script>
<style scoped>
    .inputsize{
        width: 200px;
    }
    #comment{
        padding: 10px 30px;
    }
    img{
      border-radius: 100%;
    }
    .submitbox{
      float: right;
    }
    .hover{
      border:aquamarine 2px solid;
    }
</style> 
