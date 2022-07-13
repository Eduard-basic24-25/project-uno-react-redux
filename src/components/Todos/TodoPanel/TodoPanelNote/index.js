import { useDispatch, useSelector } from 'react-redux';
import style from './index.module.css'
import { changeTodoNote } from '../../../../storage/content/actionsCreactor'

function TodoPanelNote(){
  

  const dispatch = useDispatch();

  const selectedListId = useSelector(
    state => state.interface.listId
  )
  
  const selectedTodoId = useSelector(
    state => state.interface.todoId
  )

  const todoNote = useSelector(
    state => 
    state.lists
  .content.find( list =>  list.id === selectedListId).todos.find( todo => todo.id === selectedTodoId)?.note)
  console.log(todoNote)

  return (
    <div className={style.todoPanelNote}>
      <textarea  
        className={style.todoPanelTextarea}
        placeholder='Add Note'
        onChange={(e)=> dispatch(changeTodoNote(selectedListId, selectedTodoId, e.target.value))}
        value={todoNote}
      ></textarea>
    </div>
  )
}

export default TodoPanelNote;