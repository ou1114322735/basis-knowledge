import {ref, onMounted, onUnmounted,computed} from "vue";
import {filter} from "../utils/todoStorage";

const hashArr = ["all","active","completed"];

export default function useFilter(todosRef){
    const visibilityRef = ref("all");
    const onHashChange = ()=>{
        const hash = location.hash.replace(/#\/?/,"");
        if(!hashArr.includes(hash)) {
            //无效hash
            location.hash = "";
            visibilityRef.value = "all";
        }else{
            //有效hash
            visibilityRef.value = hash;
        }
    }
    //1.组件挂在完成生命周期函数
    onMounted(()=>{
        window.addEventListener("hashchange",onHashChange)
    });
    //2.组件销毁生命周期函数
    onUnmounted(()=>{
        window.addEventListener("hashchange",onHashChange)
    });
    const filteredTodosRef = computed(()=>{
        return filter(todosRef.value,visibilityRef.value);
    });
    const reFinishRef = computed(()=>{
        return filter(todosRef.value,"active").length;
    });
    const completedRef = computed(()=>{
        return filter(todosRef.value,"completed").length;
    })

    return{
        visibilityRef,
        filteredTodosRef,
        reFinishRef,
        completedRef,
    }
}