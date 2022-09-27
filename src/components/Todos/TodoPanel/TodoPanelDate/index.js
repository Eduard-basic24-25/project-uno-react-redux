import { useDispatch, useSelector } from 'react-redux';
import style from './index.module.css'
import {changeDate} from '../../../../storage/content/actionsCreactor'


function TodoPanelDate(){

  const dispatch = useDispatch();

  const selectedListId = useSelector(state => state.interface.listId)

  const selectedTodoId = useSelector(state => state.interface.todoId)
  const mode = useSelector(state => state.themes.settings.mode);
  const theme = useSelector(state => state.themes.settings[mode]);

  
  const date = useSelector(
    state => 
      state.lists
        .content.find( list =>  list.id === selectedListId)
        ?.todos.find( todoItem => selectedTodoId === todoItem.id)?.date
  )

  return (
    <div className={style.todoPanelDate}
         style={{
          borderBottom: theme.dateInput.border
         }} >
      <input 
        style={{
          backgroundColor:theme.appBackground,
          colorScheme: theme.dateInput.shemeColor,
        }}
        type='date' 
        placeholder='Add Deu Date'
        value={date}  
        onChange={(e) => dispatch(changeDate(selectedListId, selectedTodoId, e.target.value))}
      /> 
    </div>
  )
}

export default TodoPanelDate;