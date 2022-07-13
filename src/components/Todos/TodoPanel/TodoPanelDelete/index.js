import style from './index.module.css'
import {useShowDate} from '../../../../helpers'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../../../../storage/content/actionsCreactor'
import { showPanelTodo } from '../../../../storage/interface/actionsCreactor'

function TodoPanelDelete({
  createTodoDate,
}){

  const dispatch = useDispatch();

  const isShownPanelTodo = useSelector(state => state.interface.show);

  const selectedListId = useSelector(
    state => state.interface.listId
  )
  
  const selectedTodoId = useSelector(
    state => state.interface.todoId
  )

  

  


  function removeTodo(){
    dispatch(deleteTodo(selectedListId, selectedTodoId))
    dispatch(showPanelTodo(false))
  }



  return (
    <div className={style.todoPanelDeleteWrapper}>
      <span 
        className={style.todoPanelArrow}
        onClick={() => dispatch(showPanelTodo(false))}
      ></span>
      <p>Created {useShowDate(createTodoDate)}</p>
      <span 
        className={style.todoPanelDelete}
        onClick={() => {removeTodo()}}
        ></span>
    </div>
  )
}

export default TodoPanelDelete;