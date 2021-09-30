<template>
  <div class="home-container">
    <div class="component">组件1
      <button @click="visibility = true">打开蒙层</button>
      <Teleport to="body">
        <Modal v-if="visibility">
          <button @click="visibility = false">关闭蒙层</button>
        </Modal>
      </Teleport>
    </div>
    <div class="component"><block2 /></div>
    <div class="component">组件2</div>
  </div>
</template>

<script >
import Loading from "../components/Loading.vue";
import {defineAsyncComponent,ref} from "vue";
import {delay} from "../utils";
import Modal from "../components/modal.vue";
const block2 = defineAsyncComponent({
        loader: async () => {
          await delay();
          const comp =  import("./block2.vue");
          return comp;
        },
        loadingComponent:  Loading,  //promise为pending状态时加载的组件
      });
export default {
  components: { block2,Modal },
  setup(){
    const visibility = ref(false);
    return {
      visibility,
    }
  }
};
</script>


<style scoped>
.home-container {
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
}
.component {
  border: 2px solid black;
  box-sizing: border-box;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
