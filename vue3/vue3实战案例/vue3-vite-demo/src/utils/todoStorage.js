const LOCAL_KEY = "todomvc";


//获取目前所有任务
export function  fetch(){
    let result = localStorage.getItem(LOCAL_KEY);
    if(result) {
        return JSON.parse(result);
    }
    return [];
}


//保存所有任务
export function save(todo){
      localStorage.setItem(LOCAL_KEY , JSON.stringify(todo));
}



//任务的唯一id
export function getId(){
    return +new Date();
}


//根据筛选方式返回不同数据
export function filter(todos,visibilityRef="all") {
    if(visibilityRef === "all") {
        return todos;
    }else if(visibilityRef === "active") {
        return todos.filter((it)=>{
            return !it.completed;
        });
    }else if(visibilityRef === "completed"){
        return todos.filter(it=>{
            return it.completed;
        });
    }else {
        throw new Error("invilid visibilityRef");
    }
}