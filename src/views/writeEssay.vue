<template>
    <div>
        <el-form ref="form" :rules="rules" :model="form" label-width="80px">
            <el-form-item label="标题" prop='title'>
                <el-input v-model="form.title" class="inputsize" placeholder="请输入标题"></el-input>
            </el-form-item>
            <el-form-item label="标签">
                <el-cascader
                    v-model="form.tag"
                    :options="options"
                    :props="{ checkStrictly: true }"
                    filterable>
                </el-cascader>
            </el-form-item>
            
            <el-form-item label="文章图片">
                <el-upload
                    with-credentials = 'true'
                    :on-change="loadJsonFromFile"
                    class="avatar-uploader"
                    :action="$http.defaults.baseURL + '/upload'"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    
                    :file-list="form.fileList"
                    list-type="picture">
                    <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
                <!-- <el-upload
                    class="avatar-uploader"
                    :action="$http.defaults.baseURL + '/upload'"
                    :show-file-list="false"
                    :on-success="afterUpload"
                >
                </el-upload> -->
            </el-form-item>
            <el-form-item label="内容">
                <mavon-editor v-model="form.context" :toolbars="toolbars" />
            </el-form-item>
            <el-form-item class="submitbox">
              <el-button type="success"  @click="submitMsg('form')" round>提交</el-button>
              <el-button type="danger" @click="resetForm('form')" round>取消</el-button>      
            </el-form-item>
        </el-form>
    </div>
</template>
<script>

export default {
    data() {
        return {
            
            form:{
                context: ' ',//输入的数据
                title:'',
                tag:'',
                fileList: [],
            },
            fileSizeIsSatisfy:'',
            rules:{
                title: [
                    { required: true, message: '请输入标题', trigger: 'blur' },
                ],

            },
            toolbars: {
                bold: true, // 粗体
                italic: true, // 斜体
                header: true, // 标题
                underline: true, // 下划线
                mark: true, // 标记
                superscript: true, // 上角标
                quote: true, // 引用
                ol: true, // 有序列表
                link: true, // 链接
                imagelink: true, // 图片链接
                help: true, // 帮助
                code: true, // code
                subfield: true, // 是否需要分栏
                fullscreen: true, // 全屏编辑
                readmodel: true, // 沉浸式阅读
                /* 1.3.5 */
                undo: true, // 上一步
                trash: true, // 清空
                /* 1.4.2 */
                navigation: true // 导航目录
            },
            essayreq : new this.$essayreq(),
            options: [{
                value: 'front',
                label: 'front',
                children: [{
                    value: 'vue',
                    label: 'vue',
                },{
                    value: 'css',
                    label: 'css',
                },{
                    value: 'js',
                    label: 'js',
                }]
            },{
                value: 'back',
                label: 'back',
                children: [{
                    value: 'ssm',
                    label: 'ssm',
                },{
                    value: 'springboot',
                    label: 'springboot',
                },{
                    value: 'node',
                    label: 'node',
                }]
            },{
                value: 'test',
                label: 'test',
                children: [{
                    value: 'unit',
                    label: 'unit',
                },{
                    value: 'box',
                    label: 'box',
                },{
                    value: 'performance',
                    label: 'performance',
                }]
            },{
                value: 'basics',
                label: 'basics',
                children: [{
                    value: 'dataStrure',
                    label: 'dataStrure',
                },{
                    value: 'net',
                    label: 'net',
                }]
            },{
                value: 'other',
                label: 'other',
                children: [{
                    value: 'doucument',
                    label: 'doucument',
                }]
            }] 
        }
    },
    beforeMount() {
    },
    methods: {
        loadJsonFromFile(file, fileList) {
            this.form.fileList = fileList[0].raw
            // 限制文件大小
            var sizeIsSatisfy = file.size < 2 * 1024 * 1024 ? true : false;
            if (sizeIsSatisfy) {
                return true;
            } else {
                this.fileSizeIsSatisfy = true;
                return false;
            }
        },
        submitMsg(formName){
            this.$refs[formName].validate((valid) => {
                if(valid){
                    if(this.form.tag == ''){
                        this.$message.error('请选择类别');
                        return;
                    }
                    if(this.form.context == '' || this.form.context.length <= 20){
                        this.$message.error("内容字有点少");
                        return;
                    }
                    console.log(this.form)
                    this.essayreq.writeEssay(this.$http,this.form)
                }
            })
        },
        processFile(){

        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
    },
}
</script>

<style>
    .submitbox{
        margin: 20px;
        text-align: right;
    } 
</style>
