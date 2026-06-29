import { nanoid } from "nanoid"
function taskReducer(state=[],action){
   switch (action.type) {
    case 'ADD_TASK':
        return [...state,
            {...action.payload,id:nanoid(),completed:false}
        ]
    case 'DELETE_TASK':
        return state.filter(t=>t.id!==action.payload.id)
   
    default:
        return state
   }
}

export {taskReducer}