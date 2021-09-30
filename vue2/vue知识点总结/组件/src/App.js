export default {
    template:`<div>
    <h1>{{num}}</h1>
    <button @click="num++">num++</button>
    </div>`,
    data(){
        return {
            num: 1
        }
    }

}