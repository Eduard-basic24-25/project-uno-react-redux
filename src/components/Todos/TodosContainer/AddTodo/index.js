
import style from './index.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { showInputDialog } from '../../../../storage/interface/actionsCreactor'
import { addImportantTodo, addTodo } from '../../../../storage/content/actionsCreactor';


function AddTodo(){

  const dispatch = useDispatch();

  const mode = useSelector(state => state.themes.settings.mode);
  const theme = useSelector(state => state.themes.settings[mode]);
  const tab = useSelector (state => state.interface.tab);
  const selectedListId = useSelector(state => state.interface.listId);

  const inputModalConfig = {
    header: 'Add task',
    placeholder: 'Add a task',
    confirm: 'Add',
    action: addNewTodo,
  }
 
  function addNewTodo (title,setTitle) {
    if (tab === 'Important'){
     dispatch(addImportantTodo(title,selectedListId))
     setTitle('')
    } else {
        dispatch(addTodo(title,selectedListId))
     setTitle('')
    }
    setTitle('')
    dispatch(showInputDialog(false))
  
 }


  



  return (  
      <button 
        className={style.addButton}
        style={{
          backgroundColor: theme.addButton.addBackground
        }}
        onClick={() => dispatch(showInputDialog(true, inputModalConfig))}
      >Add a task</button>
    )
}

export default AddTodo;