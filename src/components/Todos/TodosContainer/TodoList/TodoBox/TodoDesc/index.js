import style from './index.module.css'
import {useShowDate} from '../../../../../../helpers'
import { useSelector } from 'react-redux';

function TodoDesc({todoId}) {

  const mode = useSelector(state => state.themes.settings.mode);
  const theme = useSelector(state => state.themes.settings[mode]);
  
  const selectedListId = useSelector(
    state => state.interface.listId)


  const todo = useSelector(
	  state => 
	    state.lists
	      .content.find( list =>  list.id === selectedListId)
	      ?.todos.find( todoItem => todoId === todoItem.id)
  )

	return (
    <div className={style.todoDescr}
         style={{

         }}>
         
      <h2>{todo.title}</h2>
      <span 
          className={style.todoDescrParagraph}
          style={{
            color: theme.secondaryColor
          }}>
          {todo.note} - {useShowDate(todo.date)}
      </span>
    </div>
	)
}
export default TodoDesc;