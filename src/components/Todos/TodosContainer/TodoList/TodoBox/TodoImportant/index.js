import style from './index.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { todoImportant } from '../../../../../../storage/content/actionsCreactor.js';


function TodoImportant({todoId}) {
  
  const dispatch = useDispatch();

  const selectedListId = useSelector(
    state => state.interface.listId)
  

  function importantClick(e) {
    e.stopPropagation();
    dispatch(todoImportant(selectedListId,todoId))
  }

  const important = useSelector(
    state => 
      state.lists
        .content.find( list =>  list.id === selectedListId)
        ?.todos.find( todoItem => todoId === todoItem.id)?.important
  )

  return(
    <span 
      className={`${style.todoImportant} ${important ? style.isImportant : ''}`}
      onClick={importantClick}
    >
    </span>
  )
}

export default TodoImportant;