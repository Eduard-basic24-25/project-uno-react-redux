import style from './index.module.css'
import {useShowDate} from '../../../../../../helpers'
import { useSelector } from 'react-redux';

function TodoDesc({todoId}) {

  const selectedListId = useSelector(
    state => state.interface.listId)
  const theme = useSelector(state => state.themes.theme)

  const todo = useSelector(
	  state => 
	    state.lists
	      .content.find( list =>  list.id === selectedListId)
	      ?.todos.find( todoItem => todoId === todoItem.id)
  )

	return (
    <div className={style.todoDescr}>
      <h2>{todo.title}</h2>
      <span className={`${style.todoDescrParagraph} ${theme === 'dark' ? style.darkTheme : ''}`}>{todo.note} - {useShowDate(todo.date)}</span>
    </div>
	)
}
export default TodoDesc;