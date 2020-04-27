<template>
    <div id="login">
            <el-form :rules="rules" :model="form" ref="form" label-width="80px">
                <el-form-item label="手机号" prop='tel'>
                    <el-input class="input" v-model="form.number" placeholder="手机号"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop='pwd'>
                    <el-input class="input" v-model="form.password" placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-button type="primary" @click="submitForm('form')">登录</el-button>
                    <el-button @click="resetForm('form')">回到主页</el-button>
                </el-form-item> 
            </el-form>
    </div>
</template>
<script>
export default {
    data() {
        var checkPhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        } else {
          const reg = /^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/
          console.log(reg.test(value));
          if (reg.test(value)) {
            callback();
          } else {
            return callback(new Error('请输入正确的手机号'));
          }
        }
      };
        return {
            form:{
                number:"",
                password:""
            },
            rules:{
                tel: [
                     {validator: checkPhone, trigger: 'blur'}
                ],
                pwd:[
                    {min:6,message:'长度不小于6',trigger:"blur"}
                ]

            },
            login:new this.$login(),
        }
    },
    methods: {
        submitForm(form){
            this.$refs[form].validate((valid) => {
                if(valid){
                    if(form.number == ""){

                    }
                    console.log(this.form)
                    this.login.login1(this.$http,this.form)
                }
            })
        },
    },
}
</script>

<style scoped>
    .input{
        width: 200px;
    }
    #login{
        
    }
    
</style>