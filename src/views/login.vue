<template>
    <div id="login">
        <el-row>
            <el-col :xs="{span:20,offset:3}" :sm="{span:10,offset:7}" :md="{span:10,offset:9}">
                <el-form :rules="rules" :model="form" ref="form" label-width="80px">
                    <el-form-item label="手机号" prop='tel'>
                        <el-input class="input" v-model="form.tel" placeholder="手机号"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop='password'>
                        <el-input class="input" v-model="form.password" placeholder="密码"></el-input>
                    </el-form-item>
                    <el-form-item label="">
                        <el-button type="primary" @click="submitForm('form')">登录</el-button>
                        <el-button @click="resetForm()">回到主页</el-button>
                    </el-form-item> 
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    props:['changeButton'],
    data() {
        var checkPhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        } else {
          const reg = /^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/
          if (reg.test(value)) {
            callback();
          } else {
            return callback(new Error('请输入正确的手机号'));
          }
        }
      };
        return {
            form:{
                tel:"",
                password:"",
            },
            rules:{
                tel: [
                     {validator: checkPhone, trigger: 'blur'}
                ],
                password:[
                    {min:6,message:'长度不小于6',trigger:"blur"}
                ]

            },
            login:new this.$login(),
        }
    },
    methods: {
        submitForm(form){
            this.$refs[form].validate(async (valid) => {
                if(valid){

                    var res =await this.login.login1(this.$http,this.form)
                    if(res.data.length == 1){
                        // 修改登录按钮
                        this.changeButton(res.data[0].username);
                        // 登录成功提醒
                        this.$message.success("欢迎"+res.data[0].username+"再次回来")
                        // 返回首页
                        this.$router.push({
                            path:'/'
                        })
                    }else{
                        this.$message.error("密码或手机号错误");
                        this.$refs[form].resetFields();
                    }
                    
                }
            })
        },
        resetForm(){
            this.$router.push({
                path:'/'
            })
        }
    },
}
</script>

<style scoped>
    .input{
        width: 200px;
    }
    
</style>