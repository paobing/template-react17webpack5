// 页面组件
import APP from "../../pages/App";
import Comp1 from "../../pages/params/comp1";
import Comp2 from "../../pages/params/comp2";
import Comp3 from "../../pages/params/comp3";

// 权限控制页面
export const permissionsPage= [

];

//非权限控制页面
export const noPermissionsPage=[
    { id: "", path: "/app", component: APP, paramName: "" },
    { id: "", path: "/comp1", component: Comp1, paramName: "" },
    { id: "", path: "/comp2", component: Comp2, paramName: "" },
    { id: "", path: "/comp3", component: Comp3, paramName: "" },
];

// 路径默认跳转
export const pageIndex= [
    { id: "", path: '/', component: APP }
];

 //无create权限的页面
export const hidePermissionsPage=[

]
