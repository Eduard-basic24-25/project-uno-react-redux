import { useDispatch, useSelector } from 'react-redux';
import style from './index.module.css'
import { changeTodoNote } from '../../../../storage/content/actionsCreactor'
import { useTheme } from '../../../../helpers';

function TodoPanelNote(){
  

  const dispatch = useDispatch();

  const selectedListId = useSelector(
    state => state.interface.listId
  )
  
  const selectedTodoId = useSelector(
    state => state.interface.todoId
  )
  const theme = useSelector(state => state.themes.theme);
  const todoNote = useSelector(
    state => 
    state.lists
  .content.find( list =>  list.id === selectedListId)?.todos.find( todo => todo.id === selectedTodoId)?.note)
  
  return (
   /*  <div className={style.todoPanelNote}> */
      <textarea  
        className={`${style.todoPanelTextarea} ${theme === 'dark' ? style.darkTheme : ''}`}
        placeholder='Add Note'
        onChange={(e)=> dispatch(changeTodoNote(selectedListId, selectedTodoId, e.target.value))}
        value={todoNote}
      ></textarea>
  /*   </div> */
  )
}

export default TodoPanelNote;