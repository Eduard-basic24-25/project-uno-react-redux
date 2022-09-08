import { useDispatch, useSelector } from 'react-redux';
import style from './index.module.css'
import { changeTodoNote } from '../../../../storage/content/actionsCreactor'


function TodoPanelNote(){
  

  const dispatch = useDispatch();

  const mode = useSelector(state => state.themes.settings.mode);
  const theme = useSelector(state => state.themes.settings[mode]);

  const selectedListId = useSelector(
    state => state.interface.listId
  )
  
  const selectedTodoId = useSelector(
    state => state.interface.todoId
  )

  const todoNote = useSelector(
    state => 
    state.lists
  .content.find( list =>  list.id === selectedListId)?.todos.find( todo => todo.id === selectedTodoId)?.note)
  
  return (
      <textarea  
        className={style.todoPanelTextarea}
        style={{
          backgroundColor: theme.appBackground,
          color: theme.primaryColor,
          borderBottom: theme.dateInput.border
        }}
        placeholder='Add Note'
        onChange={(e)=> dispatch(changeTodoNote(selectedListId, selectedTodoId, e.target.value))}
        value={todoNote}
      ></textarea>

  )
}

export default TodoPanelNote;