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

const initialState = {
    showListDelete:false,
    showRename:false,
    showConfirm: false,
    addListWindow:false,
    showModal: false,
    show: false,
    showSettings:false,
    todoId : 0,
    listId: 44444,
    tab:'Tasks',
    searchString:'',
};

function interfaceReducer( state = initialState, {type, payload}) {

    switch (type) {
        case SHOW_PANEL_TODO: 
        return {
            ...state,
            show: payload.show,
        }
        case SEARCH_STRING: 
        return {
            ...state,
            searchString: payload.searchString,
        }
        case SHOW_MODAL_WINDOW: 
        return {
            ...state,
            showModal: payload.showModal,
        }
        case SHOW_ADD_LIST_WINDOW: 
        return {
            ...state,
            addListWindow: payload.addListWindow,
        }
        case SHOW_CONFIRM_WINDOW: 
        return {
            ...state,
            showConfirm: payload.showConfirm,
        }
        case SHOW_SETTINGS_WINDOW: 
        return {
            ...state,
            showSettings: payload.showSettings,
        }
        case SHOW_DELETE_LIST_WINDOW: 
        return {
            ...state,
            showListDelete: payload.showListDelete,
        }
        case SHOW_RENAME_WINDOW: 
        return {
            ...state,
            showRename: payload.showRename,
        }
        case SELECT_TODO_ID: 
        return {
            ...state,
            todoId: payload.id,
        }
        case SELECT_LIST_ID: 
        return {
            ...state,
            listId: payload.id,
        }
        case SET_ACTIV_TAB: 
        return {
            ...state,
            tab: payload.tab,
        }
        default: return state
    }
}

export default interfaceReducer; 