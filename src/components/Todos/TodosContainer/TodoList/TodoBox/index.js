import style from './index.module.css';

import TodoImportant from './TodoImportant';
import TodoCompleted from './TodoCompleted';
import TodoDesc from './TodoDesc';
import { useDispatch, useSelector } from 'react-redux';
import { showPanelTodo, selectTodoId } from '../../../../../storage/interface/actionsCreactor';



function TodoBox({todoId}) {

  const dispatch = useDispatch();

  // const isShow = useSelector( state => state.interface.show);
  const selectedTodoId = useSelector(state => state.interface.todoId)

  // const selectedListId = useSelector(state => state.interface.listId).id



  const isShowPanelTodo = useSelector(state => state.interface.show)

  function editTodo() {
    dispatch(selectTodoId(todoId))

    if (todoId === selectedTodoId) {
      dispatch(showPanelTodo(!isShowPanelTodo));
    } else {
      dispatch(showPanelTodo(true));
    }
  }



  return (
    <li className={style.todoItem} onClick={editTodo}>
      <TodoCompleted todoId={todoId} />
      <TodoDesc todoId={todoId} />
      <TodoImportant todoId={todoId} />
    </li>
  )
}

export default TodoBox;