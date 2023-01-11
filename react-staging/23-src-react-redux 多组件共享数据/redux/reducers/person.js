import { ADD_PERSON } from "../constant";


export default function countReducer(preState=[{id:'01',name:'tom',age:19}],action) {

    const {type,data} = action
    switch (type) {
        case ADD_PERSON:
            // 老版本：如下方法虽然数据更新了，但是由于内部比较实用的是浅比较
            // const p = preState.unshift(data)
            // return p;
           return [data,...preState]
        default:
            return preState
    }
}