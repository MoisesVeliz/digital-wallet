import { ERROR_FECH, START_FECH, SUCCES_FECH } from './constants';

const initialState ={
    data: [],
    fetched: false,
    fetching: false
}

const createReducer = (IS, handlers) => (state= IS, action) => {
    if(handlers.hasOwsProperty(action.type)) {
        return handlers[action.type](state, action)
    }else{
        return state
    }
}

export default createReducer(initialState, {
    [START_FECH]: (state) => ({})
})

// export default (state = initialState, action) => {
//     switch(action.type){
//         case START_FECH:
//             return{
//                 ...state,
//                 fetching: true
//             }
//         case SUCCES_FECH:
//             return{
//                 ...state,
//                 fetching: false,
//                 fetched: true,
//                 data: action.payload
//             }
//         case ERROR_FECH:
//             return{
//                 ...state,
//                 fetching: false,
//                 error: action.error 
//             }
//         default:
//             return state
//     }
// }