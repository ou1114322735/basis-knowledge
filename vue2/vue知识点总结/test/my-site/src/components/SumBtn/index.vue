<template>
  <div>
  <button @click="handleClick(num - 1)">-</button>
  <span>{{num}}</span>
    <button @click="handleClick(num + 1)">+</button>
    </div>
</template>

<script>
export default {
    props:["num"],
    methods:{
        handleClick(newVal){
            this.$emit("click",newVal)
        }
    }
}
</script>

<style>

</style>