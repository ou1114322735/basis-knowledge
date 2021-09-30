export default function useDeleteTodo(todosRef){
    const deleteTodo = (todo)=>{
        todosRef.value.splice(todosRef.value.indexOf(todo),1)
    };
    const clearCompleted = ()=>{
       todosRef.value = todosRef.value.filter((it)=>{
           return !it.completed
       })
    };
    return {
        deleteTodo,
        clearCompleted,
    }
}