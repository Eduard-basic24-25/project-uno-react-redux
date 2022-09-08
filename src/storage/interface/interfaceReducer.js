import  { SHOW_PANEL_TODO, 
          SELECT_TODO_ID, 
          SELECT_LIST_ID, 
          SET_ACTIV_TAB, 
          SHOW_SETTINGS_WINDOW,
          SEARCH_STRING,
          SHOW_CONFIRM_DIALOG,
          SHOW_INPUT_MODAL,
           } from './actions';

const initialState = {
    showConfirmModal: false,
    modalConfig: {},
    showInputDialog: false,
    inputModalConfig: {},
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
        case SHOW_CONFIRM_DIALOG: 
        return {
            ...state,
            showConfirmModal: payload.showConfirmModal,
            modalConfig: payload.modalConfig
        }
        case SHOW_INPUT_MODAL: 
        return {
            ...state,
            showInputDialog: payload.showInputDialog,
            inputModalConfig: payload.inputModalConfig,
        }
        case SHOW_SETTINGS_WINDOW: 
        return {
            ...state,
            showSettings: payload.showSettings,
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