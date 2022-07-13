import style from './index.module.css'

import TodoPanelHeader from './TodoPanelHeader'
import TodoPanelDate from './TodoPanelDate'
import TodoPanelNote from './TodoPanelNote'
import TodoPanelDelete from './TodoPanelDelete'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'

function TodoPanel({
  selectedList,
  lists, 
  selectedTodo, 
}){
  const isShownPanelTodo = useSelector(state => state.interface.show);

  const todo = useMemo(
    () => {
      const todo = lists[selectedList].todos.find(item => item.id === selectedTodo);
      if(todo) {
        return todo;
      } else {
        return lists[selectedList].todos[0];
      }
    }, [selectedTodo]
  )

  return (
    <section className={`${style.todoPanel} ${isShownPanelTodo ? style.isShown : ''}`}>
      <TodoPanelHeader/>
      <TodoPanelDate/>
      <TodoPanelNote/>
      <TodoPanelDelete createTodoDate={todo.createDate}/>
    </section>  
  )
}





export default TodoPanel;