import  { SHOW_PANEL_TODO, 
          SELECT_TODO_ID, 
          SELECT_LIST_ID, 
          SET_ACTIV_TAB,
          SHOW_SETTINGS_WINDOW,
          SEARCH_STRING,
          SHOW_CONFIRM_DIALOG,
          SHOW_INPUT_MODAL,
         } from './actions';

function showPanelTodo (show) {
    return {
        type: SHOW_PANEL_TODO,
        payload:{ 
            show,
        }
    }
}

function showConfirmDialog (showConfirmModal,modalConfig) {
    return {
        type: SHOW_CONFIRM_DIALOG,
        payload:{ 
            showConfirmModal,
            modalConfig,
        }
    }
}
function showInputDialog (showInputDialog,inputModalConfig,inputModalConfigTask) {
    return {
        type: SHOW_INPUT_MODAL,
        payload:{ 
            showInputDialog,
            inputModalConfig,
        }
    }
}

function showSettingsWindow (showSettings) {
    return {
        type: SHOW_SETTINGS_WINDOW,
        payload:{ 
            showSettings,
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
function setSearchString (searchString) {
    return {
        type: SEARCH_STRING,
        payload:{ 
            searchString,
        }
    }
}

export  {showPanelTodo, 
         selectTodoId, 
         selectListId, 
         setActivTab, 
         showSettingsWindow,
         setSearchString,
         showConfirmDialog,
         showInputDialog,
        };