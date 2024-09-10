export const ADD_CAKE ='ADD_CAKE'

export function addCake(text){
    return{
        type:ADD_CAKE,
        text
    }
}