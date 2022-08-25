import style from './index.module.css';

import TodoImportant from './TodoImportant';
import TodoCompleted from './TodoCompleted';
import TodoDesc from './TodoDesc';
import { useDispatch, useSelector } from 'react-redux';
import { showPanelTodo, selectTodoId } from '../../../../../storage/interface/actionsCreactor';
import { useTheme } from '../../../../../helpers';



function TodoBox({todoId}) {

  const dispatch = useDispatch();

  const selectedTodoId = useSelector(state => state.interface.todoId)

  const isShowPanelTodo = useSelector(state => state.interface.show)
  const theme = useSelector(state => state.themes.theme)
 
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
        className={`${style.todoItem} ${selectedTodoId === todoId ? style.selected : ''} ${theme === 'dark' ? style.darkTheme : ''}`} 
        onClick={editTodo}
    >
      <TodoCompleted todoId={todoId} />
      <TodoDesc todoId={todoId} />
      <TodoImportant todoId={todoId} />
    </li>
  )
}

export default TodoBox;