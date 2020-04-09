<template>
    <div>
        <el-form ref="form" :rules="rules" :model="form" label-width="80px">
            <el-form-item label="标题">
                <el-input v-model="title" class="inputsize" placeholder="请输入标题"></el-input>
            </el-form-item>
            <el-form-item label="标签">
                <el-cascader
                    v-model="tag"
                    :options="options"
                    :props="{ checkStrictly: true }"
                    filterable>
                </el-cascader>
            </el-form-item>
            
            <el-form-item label="文章图片">
                <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :file-list="fileList"
                    list-type="picture">
                    <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
            </el-form-item>
        
        <mavon-editor v-model="context" :toolbars="toolbars" />
        <el-row class="submitbtn">
            <el-button type="success" @click="submitMsg()" round>提交</el-button>
            <el-button type="danger" round>取消</el-button>                
        </el-row>
    </div>
</template>
<script>

export default {
    data() {
        return {
            context: ' ',//输入的数据
            title:'',
            fileList: [],
            tag:'',
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
        async submitMsg(){
            if(this.context == '' || this.context.length <= 20){
                console.log("失败")
                this.$notify.error({
                    title: '字有点少哦'
                });
            }
            else{
                console.log(this.context)
                console.log(this.title)
                console.log(this.fileList)
                console.log(this.tag)
                
                // let res = await this.essayreq.writeEssay(this.$http,essayimg,title,context)

            }
        }
    },
}
</script>

<style>
    .submitbtn{
        margin: 20px;
        text-align: right;
    } 
</style>
