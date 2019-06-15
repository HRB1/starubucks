import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const router= new Router({
    mode:"history",
    routes:[
        {
            path:"/home",
            name:"home",
            meta:{
                title:"加班/休假"
            },
            component:()=>import("../views/home/home.vue"),
        },
        {
            path:"/",
            redirect:"/home"
        },
        
        {
            path:"/login",
            meta:{
                title:"登录"
            },
            component:()=>import("../views/login/login.vue")
        },
        {
            path:"/search",
            meta:{
                title:"搜索"
            },
            component:()=>import("../views/search/serach.vue")
        },
        {
            path:"/detail/:type/:id",
            meta:{
                title:"详情"
            },
            name:"detail",
            component:()=>import("../views/detail/index.vue")
        },
        {
            path:"/commit/:type",
            meta:{
                title:"提交"
            },
            name:"commit",
            component:()=>import("../views/home/commit/index.vue")
        }

    ]
})

router.beforeEach((to,from,next)=>{
    document.title=to.meta.title;
    next();
})

export default router;
