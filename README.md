<h2>项目概况</h2>

````
    项目实现星巴克内部员工可以查看加班和休假记录，也可以申请加班和休假，具有权限限制，只能星巴克内部员工才有权限去登录、注册，能提高员工的工作效率，操作简单，不会因为太多的步骤而烦恼。
 
````


<h2>技术栈</h2>

````
`vue` `vuex` `vue-router-dom` `scss` `webpack` 
````

<h2>项目运行</h2>

<h4>一、下载资源包</h4>

````
    //第一种:
    https://github.com/HRB1/starubucks.git

    //第二种：通过git
    git clone https://github.com/HRB1/starubucks.git

    cd 目录



````

<h4>二、下载第三方包和插件</h4>

  
    //下载完项目后，需要在client目录中，cmd打开终端，执行：
       npm install   ——————npm i
    //下载所有依赖的第三方包和插件
  

<h4>三、运行服务</h4>

````
//在client目录下，打开终端执行：
npm start ————————————npm run dev
````


<h2>项目结构</h2>

>client——主目录

>>>bulid—— 存放webpakc的配置文件,webpack, devServer,production

>>>config——存放公共配置，设置的代理 proxy,host,port端口

>>>src——存放项目编码的主目录

>>>>>api——配置所有接口的目录——在index.js中

>>>>>components——存放所有公共的组件目录

>>>>>plugins——存放封装的全局组件——在index.js中

>>>>>router——存放配置路由表文件——在index.js中

>>>>>static——存放静态资源目录

>>>>>>>fonts——iconfont图标资源

>>>>>>>imgs——图片资源

>>>>>>>scss——项目样式目录

>>>>>store——状态管理库目录

>>>>>>>index.js——配置文件

>>>>>>>moduls——模块目录

>>>>>utils——封装公共方法目录

>>>>>views——存放视图目录

>>>>>App.vue——视图出口文件

>>>>>main.js——项目入口文件

>>>static——存放公共的静态文件

>>>.babelrc——babel配置文件

>>>package.json—— 项目用到的第三方包或者插件信息

>>>README.md ——说明文件

>server——后台的文件目录




