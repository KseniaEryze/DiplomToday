import { SET_CAKE, ADD_CAKE } from "actions";
let datas = [
    {id:1, title: 'Торт обычный', derection: 'из чего состоит', cost: 6, img:categery_tort, category:'cake'},
    {id:2, title: 'Торт обычный2', derection: 'из чего состоит2', cost: 6, img:categery_tort, category:'cake'},
    {id:3, title: 'Торт обычный3', derection: 'из чего состоит', cost: 6, img:categery_tort, category:'cupcake'},
    {id:4, title: 'Торт обычный4', derection: 'из чего состоит', cost: 6,  img:categery_tort, category:'mochi'},
    {id:5, title: 'Торт обычный5', derection: 'из чего состоит', cost: 6,  img:categery_motty, category:'mochi'},
    {id:6, title: 'Торт обычный', derection: 'из чего состоит', cost: 6, img:categery_tort, category:'cake'},
    {id:7, title: 'Торт обычный2', derection: 'из чего состоит2', cost: 6, img:categery_tort, category:'cake'},
    {id:8, title: 'Торт обычный3', derection: 'из чего состоит', cost: 6, img:categery_tort, category:'cupcake'},
    {id:9, title: 'Торт обычный4', derection: 'из чего состоит', cost: 6,  img:categery_tort, category:'mochi'},
    {id:10, title: 'Торт обычный5', derection: 'из чего состоит', cost: 6,  img:categery_motty, category:'mochi'},
    {id:11, title: 'Торт обычный11', derection: 'из чего состоит', cost: 6,  img:categery_motty, category:'mochi'},
  
  ]
  
  

function cakes(state = [], action)
    switch(action.type){
        case SET_CAKE:
            return[...state]
        case ADD_CAKE:
            return[...state, action.text]
        default:
            return state
    }


export default cakes