import style from './index.module.css'

import TodoImportant from '../../TodosContainer/TodoList/TodoBox/TodoImportant'
import { useDispatch, useSelector } from 'react-redux';
import { changeTodoTitle, todoComplete } from '../../../../storage/content/actionsCreactor'



function TodoPanelHeader(){

  const dispatch = useDispatch();

  const selectedListId = useSelector(state => state.interface.listId)
  
  const todoId = useSelector(state => state.interface.todoId)

  const title = useSelector(
    state => 
    state.lists
  .content.find( list =>  list.id === selectedListId)?.todos.find( todo => todo.id === todoId)?.title)


  const completed = useSelector(
    state => 
      state.lists
        .content.find( list =>  list.id === selectedListId)
        ?.todos.find( todoItem => todoId === todoItem.id)?.completed
  )
  const theme = useSelector(state => state.themes.theme)
  
  return (

    <div className={`${style.todoPanelHeader} ${theme === 'dark' ? style.darkTheme : ''}`}>
      <input 
        className={style.checkBox}
        type='checkbox' 
        value={completed !== undefined ? completed : false} 
        checked={completed} 
        onChange={() => dispatch(todoComplete(selectedListId, todoId))} 
      />

      <input 
        type='text'  
        value={title ? title : ''} 
        onChange={(e)=>dispatch(changeTodoTitle(selectedListId,
          todoId, e.target.value))} 
      />

      <TodoImportant  todoId={todoId}/>

    </div>
  )
}

export default TodoPanelHeader;