<template>
    <el-calendar v-model="value">
      <template
       slot="dateCell"
       slot-scope="{date, data}">
        <!--自定义内容-->
          <div>
            <div class="calendar-day">{{ data.day.split('-').slice(2).join('-') }}</div>

            <div v-for="(item,index) in timelist" :key="index"> 
                <div v-if="item.month == data.day.split('-').slice(1)[0]">
                  <div v-if="item.day == data.day.split('-').slice(2).join('-')">
                    <!-- 内容，以及悬浮内容 -->
                      <el-tooltip class="item" effect="dark" :content="item.kind_child" placement="left">
                            <div  @click="detail(item.id)" class="is-selected">{{item.title}}</div>
                      </el-tooltip>
                    </div>
                </div>
            </div>
          </div>
      </template>
  </el-calendar>
</template>


<script>
  export default {

    
    data() {
      return {
        timelist:[],
        value: new Date()
      }
    },

    // 从数据库中获取（year,month,day,title,kinds）
    beforeMount() {
        this.$http.get('http://localhost:3000/time/timekinds').then(response => {
            let result = response.data
            for (let item in result) {
              this.tolist(result[item])
            }
        }).catch(response => {
            console.log(response)
        })    
    },
    methods: {
      tolist : function(item){
        let d = new Date(item.send_time)
        let year = d.getFullYear()
        let month = d.getMonth() + 1
        let day = d.getDate()
        let time = {id:item.id,year:year,month:month,day:day,title:item.title,kind:item.kind,kind_child:item.kind_child}
        this.timelist.push(time)
      },
      detail : function(id){
            this.$router.push({
            path:'/p/'+id
        })
      }
    },
    
  }
</script>

<style>
    .is-selected{
      padding: 3px;
      color: #3E2723;
      font-size: 14px;
    }
    .is-selected:hover{
      background: #FFCCBC;
      border-radius: 20px;
    }
  
</style>