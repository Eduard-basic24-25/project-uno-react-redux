import style from './index.module.css'

import {useShowDate} from '../../../../helpers'
import { useDispatch, useSelector } from 'react-redux';
import {deleteTodo} from '../../../../storage/content/actionsCreactor'
import { showPanelTodo, showConfirmWindow, showConfirmDialog, selectTodoId, } from '../../../../storage/interface/actionsCreactor'


function TodoPanelDelete({createTodoDate}){

  const dispatch = useDispatch();
  
  const modalConfig = { 
    header: 'Are you sure?',
    description: 'Task will be permenently deleted',
    confirm: 'Delete', 
    action: removeTodo,
  }
  const selectedListId = useSelector(
    state => state.interface.listId
  )
  
  const selectedTodoId = useSelector(
    state => state.interface.todoId
  )
  const mode = useSelector(state => state.themes.settings.mode);
  const theme = useSelector(state => state.themes.settings[mode]);

  const deleteIcon = require(`../../../../img/${theme.deleteIcon}.svg`);
  const arrowIcon = require(`../../../../img/${theme.arrow}.svg`);
  
  function removeTodo () {
    dispatch(deleteTodo(selectedListId, selectedTodoId))
    dispatch(selectTodoId(0))
    dispatch(showPanelTodo(false))
    dispatch(showConfirmDialog(false))
}

  return (
    
    <div  className={`${style.todoPanelDeleteWrapper} ${!createTodoDate ? style.hidden : ''}`} >
      <span 
        className={style.todoPanelArrow}
        style={{
            backgroundImage: `url(${arrowIcon})`
        }}
        onClick={() => dispatch(showPanelTodo(false))}
      ></span>
      <p className={style.date}
         style={{
          color: theme.primaryColor
         }} 
         >Created {useShowDate(createTodoDate)}
      </p>
      <span 
        className={style.todoPanelDelete}
        style={{
          backgroundImage: `url(${deleteIcon})`
      }}
        onClick={() => dispatch(showConfirmDialog(true, modalConfig))}
        ></span>
    </div>
  )
}

export default TodoPanelDelete;