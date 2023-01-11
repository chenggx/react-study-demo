import { ADD_PERSON } from "../constant";
// 该文件专门为 Count 组件生成 action 对象
export const createAddPersonAction = data=>({type:ADD_PERSON,data})