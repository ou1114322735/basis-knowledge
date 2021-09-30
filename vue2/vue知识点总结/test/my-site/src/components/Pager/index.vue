<template>
  <div class="pager-container">
    <span :class="{
      disabled: current === 1
    }" @click="handleClick(1)">|&lt;&lt;</span>
    <span :class="{
      disabled: current === 1
    }" @click="handleClick(current - 1)">&lt;&lt;</span>

    <span 
    v-for="(item,i) in number" 
    :key="i"
    @click="handleClick(item)"
    :class="{
      active: item === current
    }"
    >{{item}}</span>

    <span :class="{
      disabled: current === pageNumber
    }" @click="handleClick(current + 1)">&gt;&gt;</span>
    <span :class="{
      disabled: current === pageNumber
    }" @click="handleClick(pageNumber)">&gt;&gt;|</span>
  </div>
</template>

<script>
export default {
  props:{
    current:{
      type:Number,
      default: 1,
    },
    total:{
      type:Number,
      default: 200,

    },
    limit:{
      type:Number,
      default: 10,

    },
    panerNumber:{
      type:Number,
      default:5
    }
  },
  computed:{
    // 总页数
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    min(){
      let min;
      if(this.pageNumber - this.panerNumber / 2 > this.current){
           min = this.current - Math.floor(this.panerNumber / 2)
      }else{
        min = this.pageNumber - this.panerNumber
      }
      if(min < 1){
        min = 1
      }
      return min
    },

    max(){
      let max = this.min + this.panerNumber - 1
      if(max > this.pageNumber){
        max = this.pageNumber
      }
      return max
    },
    number(){
      let numArr = [];
      for(let i = this.min; i<= this.max;i++ ){
        numArr.push(i)
      }
      return numArr
    }
  },
  methods:{
    handleClick(newPage){
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.pageNumber) {
        newPage = this.pageNumber;
      }
      if (newPage === this.current) {
        return;
      }
      this.$emit("pageChange",newPage)
    }
  }
}
</script>

<style scoped>
  span {
    margin: 0 10px;
    cursor: pointer;
  }
  .active {
    color: #f40;
  }
  .disabled {
    color: #ccc;
  }
</style>