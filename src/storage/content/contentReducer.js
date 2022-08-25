import { TODO_COMPLETE, 
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

import { createDate } from '../../helpers';



const initialState = {
  content: [
    {
      id: 44444, 
      header: 'Task list',
      todos: [
        {
          id: '11111',
          title: 'Todo 1',
          note: 'Do something important',
          date: createDate(),
          createDate: createDate(),
          completed: true,
          important: true,
          selected: false,
        },
        {
          id: '22222',
          title: 'Todo 2',
          note: 'Do something important',
          date: createDate(),
          createDate: createDate(),
          completed: true,
          important: true,
          selected: false,
        },
        {
          id: '33333',
          title: 'Todo 3',
          note: 'Do something',
          date: createDate(),
          createDate: createDate(),
          completed: true,
          important: true,
          selected: false,
        },
      ]
    },
    {
      id: 44442,
      header: 'Second Task list',
      todos: [
        {
          id: '11111',
          title: 'Todo 3',
          note: 'Do something important',
          date: createDate(),
          createDate: createDate(),
          completed: true,
          important: true,
          selected: false,
        },
        {
          id: '22222',
          title: 'Todo 4',
          note: 'Do something important',
          date: createDate(),
          createDate: createDate(),
          completed: true,
          important: true,
          selected: false,
        },
        {
          id: '33333',
          title: 'Todo 5',
          note: 'Do something',
          date: createDate(),
          createDate: createDate(),
          completed: true,
          important: true,
          selected: false,
        },
      ]
    },
    {
      id: 44443,
      header: 'Third Task list',
      todos: [
        {
          id: '11111',
          title: 'Todo 6',
          note: 'Do something important',
          date: createDate(),
          createDate: createDate(),
          completed: true,
          important: true,
          selected: false,
        },
        {
          id: '22222',
          title: 'Todo 7',
          note: 'Do something important',
          date: createDate(),
          createDate: createDate(),
          completed: true,
          important: true,
          selected: false,
        },
        {
          id: '33333',
          title: 'Todo 8',
          note: 'Do something',
          date: createDate(),
          createDate: createDate(),
          completed: true,
          important: true,
          selected: false,
        },
      ]
    },
  ]
}

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