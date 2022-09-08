import style from './index.module.css'

import TodoPanelHeader from './TodoPanelHeader'
import TodoPanelDate from './TodoPanelDate'
import TodoPanelNote from './TodoPanelNote'
import TodoPanelDelete from './TodoPanelDelete'
import { useSelector } from 'react-redux'


function TodoPanel(){

  const isShownPanelTodo = useSelector(state => state.interface.show);
  
  const mode = useSelector(state => state.themes.settings.mode);
  const theme = useSelector(state => state.themes.settings[mode]);


  const selectedListId = useSelector(state => state.interface.listId);
  const selectedTodoId = useSelector( state => state.interface.todoId);
  
  const todo = useSelector(state => state.lists.content.find( list => list.id === selectedListId)
    ?.todos.find( todo => todo.id === selectedTodoId))


  return (
    <section className={`${style.todoPanel} ${isShownPanelTodo ? style.isShown : ''}`}
             style={{
              backgroundColor: theme.appBackground,
              borderBottom: theme.dateInput.border
             }}>
      <TodoPanelHeader/>
      <TodoPanelDate/>
      <TodoPanelNote/>
      <TodoPanelDelete createTodoDate={todo?.createDate}/>
    </section>  
  )
}





export default TodoPanel;