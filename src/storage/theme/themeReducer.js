import {SET_THEME} from './actions'

const initialState = {
    theme: 'light'
}

function themeReducer (state = initialState, {type,payload}) {
    switch (type){
        case SET_THEME: 
        return {
            ...state, 
            theme: payload.theme
        }
        default: return state;
    }
}

export default themeReducer;