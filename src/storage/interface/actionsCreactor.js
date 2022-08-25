import  { SHOW_PANEL_TODO, 
          SELECT_TODO_ID, 
          SELECT_LIST_ID, 
          SET_ACTIV_TAB,
          SHOW_MODAL_WINDOW,
          SHOW_CONFIRM_WINDOW,
          SHOW_RENAME_WINDOW,
          SHOW_DELETE_LIST_WINDOW,
          SHOW_ADD_LIST_WINDOW,
          SHOW_SETTINGS_WINDOW,
          SEARCH_STRING,
         } from './actions';

function showPanelTodo (show) {
    return {
        type: SHOW_PANEL_TODO,
        payload:{ 
            show,
        }
    }
}
function showModalWindow (showModal) {
    return {
        type: SHOW_MODAL_WINDOW,
        payload:{ 
            showModal,
        }
    }
}
function showAddListWindow (addListWindow) {
    return {
        type: SHOW_ADD_LIST_WINDOW,
        payload:{ 
            addListWindow,
        }
    }
}
function showConfirmWindow (showConfirm) {
    return {
        type: SHOW_CONFIRM_WINDOW,
        payload:{ 
            showConfirm,
        }
    }
}
function showDeleteListWindow (showListDelete) {
    return {
        type: SHOW_DELETE_LIST_WINDOW,
        payload:{ 
            showListDelete,
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
function showRenameWindow (showRename) {
    return {
        type: SHOW_RENAME_WINDOW,
        payload:{ 
            showRename,
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
         showModalWindow, 
         showConfirmWindow,
         showRenameWindow,
         showDeleteListWindow,
         showAddListWindow,
         showSettingsWindow,
         setSearchString,
        };