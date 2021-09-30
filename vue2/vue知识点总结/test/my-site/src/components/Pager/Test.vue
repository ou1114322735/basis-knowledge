<template>
  <div class="test-container">
      <Pager 
      :current="current"
      @pageChange="handlePageChange"
       />
  </div>
</template>

<script>
import Pager from "./index.vue"
export default {
    components:{
        Pager,
    },
    data(){
        return {
            current:1
        }
    },
    methods:{
        handlePageChange(newPage){
            this.current = newPage
        }
    }
}
</script>

<style>

</style>