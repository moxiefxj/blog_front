<template>
  <el-carousel  indicator-position="outside">
    <el-carousel-item  v-for="item in list" :key="item">
      <div @click="detail(item.id)">
        <el-row>
          <el-col :xs="{span:0,offset:0}" :sm="{span:6,offset:4}" :md="{span:4,offset:3}">
            <h3 >{{ item.title }}</h3>
          </el-col>
          <el-col :xs="{span:24,offset:0}" :sm="{span:14,offset:0}" :md="{span:10,offset:2}">
            <img :src="item.essayimg">
          </el-col>
        </el-row>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  props:["essaylist","detail"],
  data() {
    return {
      list:[],
    }
  },
  watch: {
    essaylist (val,olval) {
        if(val != olval){
          // 选择net类别
          this.essaylist.forEach(element => {
            if(element.kind_child == "net"){
              this.list.push(element)
            }
          });
        }
      }
  },
}
</script>
<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  } 
  .el-carousel__item {
    background-color: #E8EAF6;
  }
  img{
    background: orangered;
    width: 100%;
    height: 304px;
  }
</style>