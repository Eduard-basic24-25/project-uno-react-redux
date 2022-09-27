import style from './index.module.css';

import {DefaultTodos} from '../../../defaultComponents/defaultTodos'
import TodoBox from './TodoBox';
import { useSelector } from 'react-redux';


function TodoList() {

  const selectedListId = useSelector(state => state.interface.listId) 
  
  const todos = useSelector(state => 
      state.lists.content.find( list => list.id === selectedListId)?.todos) 
     


  const tab = useSelector( state => state.interface.tab);

  const searchString = useSelector(state => state.interface.searchString)

  const completedTodos = useSelector( state => 
    state.lists.content?.find( list => list.id === selectedListId)?.todos.filter( todo => todo.completed));
   

  const importantTodos = useSelector( state =>
    state.lists.content.find( list => list.id === selectedListId)?.todos.filter( todo => todo.important));
   

    let renderTodos = [];

    if(searchString) {
      const lowSearchString = searchString.toLowerCase();
      renderTodos = todos.filter(todo => todo.title.toLowerCase().includes(lowSearchString)) 
    } else {
      if(tab === 'Completed'){
        renderTodos = completedTodos ;
      } else if (tab === 'Important') {
        renderTodos = importantTodos 
      } else {
        renderTodos = todos;
      }
    }

   
  return (

  
     <ul className={style.todoList}>
        { 
          !todos?.length 
          ? <DefaultTodos/>
          : renderTodos.map(todo => {
            return <TodoBox key={todo.id} todoId={todo.id}/>
        })}
    </ul>
  )
}

export default TodoList;