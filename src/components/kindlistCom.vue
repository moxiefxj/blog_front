<template>
    <div id="kindlist">
        <div class="kindlist" v-for="(item, index) in kindlist" :key="index">
          <essay-com :item = 'item'></essay-com>
        </div>
    </div>
</template>

<script>
import essayCom from '../components/common/essayCom';
export default {
    props:['kindlist'],
    components:{
      essayCom
    }
}
</script>

<style>
  .kindlist{
    background:#FAFAFA;
    margin-bottom: 20px;
  }
    
</style>