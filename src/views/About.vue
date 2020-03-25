<template>
  <div class="about">
    <div class="aboutme">
      <p class="resume">个人简介</p>
      <p class="name">冯筱静</p>
       <!-- 基本信息 -->
       <div class="basic">
        <p>Email:</p>
        <p>wechat:</p>
        <p>Github:</p>
        <p>blog:</p>
      </div>
    </div>
    <!-- 个人技能树 -->
    <div class="aboutme">
      <p class="resume">个人技能</p>
      
      <el-row class="skills">
        <el-col class="skill" :xs="{span:3,offset:5}" :sm="{span:2,offset:5}" :md="{span:1,offset:5}">前端</el-col>
        <el-col class="skill_value" :xs="{span:12,offset:0}" :sm="{span:12,offset:0}" :md="{span:12,offset:1}"><el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress></el-col>
      </el-row>
      <el-row class="skills">
        <el-col class="skill" :xs="{span:3,offset:5}" :sm="{span:2,offset:5}" :md="{span:1,offset:5}">java</el-col>
        <el-col class="skill_value" :xs="{span:12,offset:0}" :sm="{span:12,offset:0}" :md="{span:12,offset:1}"><el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress></el-col>
      </el-row>
      <el-row class="skills">
        <el-col class="skill" :xs="{span:3,offset:5}" :sm="{span:2,offset:5}" :md="{span:1,offset:5}">node</el-col>
        <el-col class="skill_value" :xs="{span:12,offset:0}" :sm="{span:12,offset:0}" :md="{span:12,offset:1}"><el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress></el-col>
      </el-row>
    </div>
    
    
    <!-- 项目经验 -->
    <div class="aboutme">
      <p class="resume">项目经验</p>
    </div>
    <!-- 其他信息 -->
    
    
  </div>
</template>

<style scoped>
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
      text-align: center;
      background: #E8EAF6;
      font-size: 18px;
    }
    .basic p{
      padding-bottom: 10px;
    }
</style>
