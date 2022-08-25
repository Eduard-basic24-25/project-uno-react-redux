import style from './index.module.css'

import {useShowDate} from '../../../../helpers'
import { useDispatch, useSelector } from 'react-redux';
import { showPanelTodo, showConfirmWindow, } from '../../../../storage/interface/actionsCreactor'


function TodoPanelDelete({createTodoDate}){

  const dispatch = useDispatch();
  const theme = useSelector(state => state.themes.theme)
  
  function openConfirnWindow(){
    dispatch(showConfirmWindow(true))
  }


  return (
    
    <div  className={`${style.todoPanelDeleteWrapper} ${!createTodoDate ? style.hidden : ''}`} >
      <span 
        className={`${theme === 'dark' ? style.arrowIconDarkTheme : style.todoPanelArrow}`}
        onClick={() => dispatch(showPanelTodo(false))}
      ></span>
      <p>Created {useShowDate(createTodoDate)}</p>
      <span 
        className={`${theme === 'dark' ? style.deleteIconDarkTheme : style.todoPanelDelete}`}
        onClick={openConfirnWindow}
        ></span>
    </div>
  )
}

export default TodoPanelDelete;