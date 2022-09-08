import { CHANGE_MODE } from './actions'

function changeMode (mode) {
    return {
        type: CHANGE_MODE,
        payload: {
            mode
        }
    }
}

export { changeMode };