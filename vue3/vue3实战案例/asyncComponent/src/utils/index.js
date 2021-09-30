

export function delay(duration = 3000){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve();
        }, duration);
    })
}

//得到一部页面
import {defineAsyncComponent} from "vue";
import Loading from "../components/Loading.vue";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
NProgress.configure({
  trickleSpeed: 50,
  showSpinner: false,
});
export function getAsyncPage(path) {
    return defineAsyncComponent({
      loader: async () => {
        NProgress.start();
        await delay();
        const comp = await import(path);
        NProgress.done();
        return comp;
      },
      loadingComponent: Loading, // 当promise在pending状态时，将显示这里的组件
    });
  }