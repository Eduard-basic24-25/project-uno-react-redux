import { 
    TODO_COMPLETE, 
    TODO_IMPORTANT, 
    TODO_SELECTED, 
    CHANGE_HEADER, 
    CHANGE_DATE,
    DELETE_TODO,
    DELETE_LIST,
    CHANGE_TODO_TITLE,
    CHANGE_TODO_NOTE,
    ADD_TODO,
    ADD_IMPORTANT_TODO,
    ADD_LIST,
    SHOW_ALL_TODOS,
} from './actions';




export const initialState = {
  content: []
};

function contentReducer(state = initialState, {type, payload}) {
  switch(type){
    case SHOW_ALL_TODOS:
      return {
        ...state, content: state.content.map( list => {
          if(list.id === payload.listId) {
            list.todos.map()
          }
        })
      }
    case TODO_COMPLETE:
      return {
        ...state,
          content: state.content.map(list => {
            if(list.id === payload.listId) {
              list.todos.map(todo => {
                if(todo.id === payload.todoId){
                  todo.completed = !todo.completed;
                }
              })
            }
            return list;
          })
        }

    case TODO_IMPORTANT:
      return {
        ...state,
        content: state.content.map(list => {
            if(list.id === payload.listId) {
              list.todos.map(todo => {
                if(todo.id === payload.todoId){
                  todo.important = !todo.important;
                }
              })
            }
            return list;
          })
        }
       
    case TODO_SELECTED:
      return {...state, content: [...state.content.todos, payload]
      }    
      case CHANGE_HEADER:
        return {
          ...state,
            content: state.content.map(list => {
              if(list.id === payload.listId) {
                
                list.header = payload.header
              }
              return list;
            })
          }    

      case CHANGE_DATE:
        return {
          ...state,
            content: state.content.map(list => {
              if(list.id === payload.listId) {
                list.todos.map(todo => {
                  if(todo.id === payload.todoId){
                    todo.date = payload.date;
                  }
                })
              }
              return list;
            })
          } 
      case DELETE_TODO:
        return {
          ...state,
            content: state.content.map(list => {
              if(list.id === payload.listId) {
                list.todos = list.todos.filter( todo => 
                  todo.id !== payload.todoId)
              }
              return list;
            })
          } 
      case DELETE_LIST:
        return {
          ...state,
            content: state.content.filter(list => {
            return list.id !== payload.listId;
            })
          } 
      case CHANGE_TODO_TITLE:
        return {
          ...state,
            content: state.content.map(list => {
              if(list.id === payload.listId) {
                list.todos = list.todos.map( todo => {
                  if(todo.id === payload.todoId){
                  todo.title = payload.title
                  } 
                  return todo
                })
              }
              return list;
            })
          } 
      case CHANGE_TODO_NOTE:
        return {
          ...state,
            content: state.content.map(list => {
              if(list.id === payload.listId) {
                list.todos = list.todos.map( todo => {
                  if(todo.id === payload.todoId){
                  todo.note = payload.note
                  } 
                  return todo;
                })
              }
              return list;
            })
          } 
      case ADD_TODO:
        return {
          ...state,
            content: state.content.map(list => {
              if(list.id === payload.selectedListId) {
                list.todos.push(payload.todo);
              }
              return list;
            })
          } 
      case ADD_IMPORTANT_TODO:
        return {
          ...state,
            content: state.content.map(list => {
              if(list.id === payload.selectedListId) {
                list.todos.push(payload.todo);
              }
              return list;
            })
          } 
      case ADD_LIST:
        return {
          ...state, content:[...state.content, payload] 
        }

    default: return state;    
  }
}

  export {contentReducer}; 