import {ref , computed} from "vue";
export default function useEditTodo(todosRef){
    const editingTodoRef = ref(null) //当前正在修改的todo
    let originTodoTitle = null; //编辑之前的title
    const editTodo = (todo)=> {
        originTodoTitle = todo.title;
        editingTodoRef.value = todo;
    };
    const doneTodo = (todo)=>{
        editingTodoRef.value = null;
        const title = todo.title.trim();
        if(title){
            todo.title = title;
        }else{
            todosRef.value.splice(todosRef.value.indexOf(todo),1);
        }
    };
    const cancelEdit = (todo)=>{
        todo.title = originTodoTitle;
        editingTodoRef.value = null;
    };
    const setAllCompleted = (completed) =>{
        todosRef.value.forEach(todo => {
            todo.completed = completed;
        });
    }
    const allDoneRef = computed({
        get(){
            return todosRef.value.filter(it=>!it.completed).length === 0;
        },
        set(val){
            todosRef.value.forEach(it =>{
                it.completed = val;
            })
        }
    })


    return {
        editingTodoRef,
        editTodo,
        doneTodo,
        cancelEdit,
        setAllCompleted,
        allDoneRef,
    }
}