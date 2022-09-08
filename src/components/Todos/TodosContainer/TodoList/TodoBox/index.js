import style from './index.module.css';

import TodoImportant from './TodoImportant';
import TodoCompleted from './TodoCompleted';
import TodoDesc from './TodoDesc';
import { useDispatch, useSelector } from 'react-redux';
import { showPanelTodo, selectTodoId } from '../../../../../storage/interface/actionsCreactor';




function TodoBox({todoId}) {

  const dispatch = useDispatch();

  const selectedTodoId = useSelector(state => state.interface.todoId)

  const isShowPanelTodo = useSelector(state => state.interface.show)

  const mode = useSelector(state => state.themes.settings.mode);
  const theme = useSelector(state => state.themes.settings[mode]);

 
  function editTodo() {
    dispatch(selectTodoId(todoId))

    if (todoId === selectedTodoId) {
      dispatch(showPanelTodo(!isShowPanelTodo));
      dispatch(selectTodoId(null));
    } else {
      dispatch(showPanelTodo(true));
    }
  }

  return (
    <li 
        className={style.todoItem}  
        style={
          selectedTodoId !== todoId
          ? {backgroundColor: theme.appBackground, color: theme.primaryColor} 
          : {backgroundColor: theme.todosStyles.onSurfaceLowBrush}
          
        }
        onClick={editTodo}
    >
      <TodoCompleted todoId={todoId} />
      <TodoDesc todoId={todoId} />
      <TodoImportant todoId={todoId} />
    </li>
  )
}

export default TodoBox;