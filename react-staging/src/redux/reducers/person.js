import { ADD_PERSON } from "../constant";


export default function countReducer(preState=[{id:'01',name:'tom',age:19}],action) {

    const {type,data} = action
    switch (type) {
        case ADD_PERSON:
           return [data,...preState]
        default:
            return preState
    }
}