import alterModel from "../components/alterModel.vue";
import Home from "../components/headers.vue";
import Footers from "../components/footers.vue";
export default {
    install(Vue){
        //header组件
        Vue.component("my-header",Home);
        Vue.component("my-footer",Footers)
        // console.log(Vue.prototype)
        //alter弹框全局组件
        Vue.prototype.alters=(text)=>{
            let AlterModel=Vue.extend(alterModel);
            let AlterComponent=new AlterModel({
                propsDtata:{
                text
                }
            })
            //产生真实的dom节点
            AlterComponent.$mount();
            console.log(AlterComponent.$el)
            document.appendChild(AlterComponent.$el);
        }
    }
}