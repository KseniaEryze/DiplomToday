import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    name:null,
    desctiprion: null,
    cost: null,
    category: null,
    image: null,
    id: null
}

const cakeSlice = createSlice({
    name:'cake',
    initialState,
    reducers:{
        setCake(state, action){
            state.name = action.payload.name;
            state.desctiprion = action.payload.desctiprion;
            state.cost = action.payload.cost;
            state.category = action.payload.category;
            state.image = action.payload.image;
            state.id = action.payload.id;
        }

    }

})
console.log(cakeSlice.actions)

export const {setCake} = cakeSlice.actions;

export default cakeSlice.reducer;