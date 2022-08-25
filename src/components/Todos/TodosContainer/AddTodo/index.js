
import style from './index.module.css'
import { useDispatch } from 'react-redux';
import { showModalWindow } from '../../../../storage/interface/actionsCreactor'


function AddTodo(){

  const dispatch = useDispatch();


	function showModal() {
		dispatch(showModalWindow(true));
	}

  return (  
      <button 
        className={style.addButton}
        onClick={showModal}
      >Add a task</button>
    )
}

export default AddTodo;