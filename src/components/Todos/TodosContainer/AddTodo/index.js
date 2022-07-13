import {useState} from 'react';
import style from './index.module.css'
import { useDispatch,  } from 'react-redux';
import { showPanelTodo } from '../../../../storage/interface/actionsCreactor'


function AddTodo(){

  const dispatch = useDispatch();
  
	function showPanel(e) {
		e.preventDefault();
		dispatch(showPanelTodo(true));
	}


  return (  
      <button 
        type='submit'
        className={style.addButton}
        onClick={showPanel}
      >Add a task</button>
    )
}

export default AddTodo;