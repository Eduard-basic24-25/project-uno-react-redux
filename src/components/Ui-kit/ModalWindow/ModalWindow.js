import { useDispatch, useSelector } from 'react-redux';
import style from '../ModalWindow/style.module.css'
import { showModalWindow } from '../../../storage/interface/actionsCreactor'
import { useState } from 'react';
import { addImportantTodo, addTodo } from '../../../storage/content/actionsCreactor';

function AddModalWindow () {
    const [title, setTitle] = useState('')

    const dispatch = useDispatch()
    const isModalShow = useSelector(state => state.interface.showModal);

   
  const selectedListId = useSelector(
    state => state.interface.listId)
  const tab = useSelector(state => state.interface.tab)  


    function AddNewTodo () {
       if (tab === 'Important'){
        dispatch(addImportantTodo(title,selectedListId))
        setTitle('')
       } else {
           dispatch(addTodo(title,selectedListId))
        setTitle('')
       }
       setTitle('')
       dispatch(showModalWindow(false))
    }


    return (
        <div className={`${style.modalWrapper} ${isModalShow ? style.shownModal : ''}`}>
            <div className={style.wrapper}>
                <p className={style.title}>Add a task</p>
                <input 
                    className={style.input}
                    type="text" 
                    placeholder="Add a task" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <div className={style.buttons}>
                    <button 
                        className={style.cancel}
                        onClick={() => dispatch(showModalWindow(false))}>Cancel
                    </button>
                    <button 
                        className={`${style.add} ${!title ? style.disabled : ''}`}
                        onClick={AddNewTodo}
                        disabled={!title}>+ Add
                        
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddModalWindow;