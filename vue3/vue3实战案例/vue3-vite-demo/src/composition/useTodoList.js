import * as todoStorage from "../utils/todoStorage";
import {ref,watchEffect} from "vue";
export default function useTodoList(){
    const todosRef = ref(todoStorage.fetch());
    window.todosRef = todosRef;  //用作测试
    watchEffect(()=>{  //函数内部只要用到响应式数据，响应式数据变化就会运行该函数
      todoStorage.save(todosRef.value);
    });
    return {
        todosRef,
    }
}