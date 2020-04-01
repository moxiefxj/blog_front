<template>
    <div id="essaylist">
        <div class="essaylist" v-for="(item, index) in essaylist" :key="index">
            <essay-com :item = 'item'></essay-com> 
        </div>
    </div>
</template>

<script>
import essayCom from '../components/common/essayCom';

export default {
    props:['essaylist'],
    components:{
      essayCom
    },
    
    
}
</script>

<style>
  .essaylist{
    background: #FAFAFA;
    margin-bottom: 10px;
  }
</style>