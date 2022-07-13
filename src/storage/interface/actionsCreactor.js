import  { SHOW_PANEL_TODO, SELECT_TODO_ID, SELECT_LIST_ID, SET_ACTIV_TAB } from './actions';

function showPanelTodo (show) {
    return {
        type: SHOW_PANEL_TODO,
        payload:{ 
            show,
        }
    }
}
function selectTodoId (id) {
    return {
        type: SELECT_TODO_ID,
        payload:{ 
            id,
        }
    }
}
function selectListId (id) {
    return {
        type: SELECT_LIST_ID,
        payload:{ 
            id,
        }
    }
}
function setActivTab (tab) {
    return {
        type: SET_ACTIV_TAB,
        payload:{ 
            tab,
        }
    }
}

export  {showPanelTodo, selectTodoId, selectListId, setActivTab};