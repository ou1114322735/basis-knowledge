<template>
  <!-- <SumBtn :num="num" @click="handle($event)" /> -->
  <Test />
</template>

<script>
import SumBtn from "./components/SumBtn"
import Test from "./components/Pager/Test.vue"
export default {
  components:{
    SumBtn,
    Test
    },
    data(){
      return {
        num : 1
      }
    },
    methods:{
      handle(newVal){
        this.num = newVal
      }
    }
  
}
</script>

<style>

</style>
