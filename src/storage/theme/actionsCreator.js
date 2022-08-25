import {SET_THEME} from './actions'

function setTheme (theme) {
    return {
        type: SET_THEME,
        payload: {
            theme
        }
    }
}

export {setTheme};