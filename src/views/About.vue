<template>
  <div class="about">
    <div class="aboutme">
      <p class="resume">About Me</p>
        <!-- 基本信息 -->
      <div class="basic">
        <p>就读大学：电子科技大学成都学院</p>
        <p>掌握技术：</p>
        <p>
          熟练html5、css3、js、bootstrap等技术<br>
          熟练vue、node、elementUI等框架<br>
          了解spring、springMVC、mybatis<br>
        </p>
        
      </div>
      
      <el-row class="basicimg">
          <el-rol :xs="{span:3,offset:5}" :sm="{span:2,offset:5}" :md="{span:1,offset:5}">
            <img src="../assets/img/email.jpg" alt="">
          </el-rol>
          <el-rol :xs="{span:3,offset:5}" :sm="{span:2,offset:5}" :md="{span:1,offset:5}">
            <img src="../assets/img/OTE0YTAw.png" alt="">
          </el-rol>
          <el-rol :xs="{span:3,offset:5}" :sm="{span:2,offset:5}" :md="{span:1,offset:5}">
            <img src="../assets/img/fluidicon.png" alt="">
          </el-rol> 
      </el-row>
    </div>
    <!-- 个人技能树 -->
    <div class="aboutme">
      <p class="resume">个人技能</p>
      
      <el-row class="skills">
        <el-col class="skill" :xs="{span:3,offset:5}" :sm="{span:2,offset:5}" :md="{span:1,offset:5}">前端</el-col>
        <el-col class="skill_value" :xs="{span:12,offset:0}" :sm="{span:12,offset:0}" :md="{span:12,offset:1}"><el-progress :text-inside="true" :stroke-width="26" :percentage="80"></el-progress></el-col>
      </el-row>
      <el-row class="skills">
        <el-col class="skill" :xs="{span:3,offset:5}" :sm="{span:2,offset:5}" :md="{span:1,offset:5}">java</el-col>
        <el-col class="skill_value" :xs="{span:12,offset:0}" :sm="{span:12,offset:0}" :md="{span:12,offset:1}"><el-progress :text-inside="true" :stroke-width="26" :percentage="75"></el-progress></el-col>
      </el-row>
      <el-row class="skills">
        <el-col class="skill" :xs="{span:3,offset:5}" :sm="{span:2,offset:5}" :md="{span:1,offset:5}">node</el-col>
        <el-col class="skill_value" :xs="{span:12,offset:0}" :sm="{span:12,offset:0}" :md="{span:12,offset:1}"><el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress></el-col>
      </el-row>
      <el-row class="skills">
        <el-col class="skill" :xs="{span:3,offset:5}" :sm="{span:2,offset:5}" :md="{span:1,offset:5}">c语言</el-col>
        <el-col class="skill_value" :xs="{span:12,offset:0}" :sm="{span:12,offset:0}" :md="{span:12,offset:1}"><el-progress :text-inside="true" :stroke-width="26" :percentage="65"></el-progress></el-col>
      </el-row>
    </div>
    
    <!-- 项目经验 -->
    <div class="aboutme">
      <p class="resume">项目经验</p>
      <el-row>
        <el-col :span="12"></el-col>
        <el-col :span="12"></el-col>
      </el-row>
      
    </div>
    <!-- 其他信息 -->
    
    
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
}
</script>
<style scoped>
    .about{
      background: #FAFAFA;
    }
    .skills{
      margin-top: 20px;
    }
    .aboutme{
      margin-bottom: 40px;
    }
    .name{
      padding: 10px 0;
      text-align: center;
      font-size: 19px;
      font-weight: bold;
    }
    p{
      margin: 10px;
    }
    .resume{
      margin: 0;
      padding: 10px 0px;
      text-align: center;
      background: #F5F5F5;
      border: 4px solid Transparent;
      border-left-color: #C5CAE9;
      font-size: 20px;
      font-weight: bold;
    }
    .basic{
      margin:0 auto;
      width:320px;
      border:1px solid;
      text-align:left;

      /* margin-bottom: 30px;
      text-align: center;
      font-size: 18px; */
    }
    .basicimg{
      text-align: center;
    }
    .basicimg img{
      width: 5%;
      height: 5%;
      border-radius: 100%;
      margin-right: 20px;
    }
</style>
