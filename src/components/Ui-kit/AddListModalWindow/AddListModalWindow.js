import style from './style.module.css'
import { addList } from '../../../storage/content/actionsCreactor'
import { showAddListWindow } from '../../../storage/interface/actionsCreactor'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function AddListModalWindow () {

    
    const [title, setTitle] = useState('')

    const dispatch = useDispatch()
    const isAddListWindowShown = useSelector(state => state.interface.addListWindow);



   const theme = useSelector(state => state.themes.theme)
  const selectedListId = useSelector(
    state => state.interface.listId)
    

    function AddNewList () {
       dispatch(addList(title))
       setTitle('')
       dispatch(showAddListWindow(false))
    }




    return (
        <div className={`${style.modalWrapper} ${isAddListWindowShown ? style.shownModal : ''}`}>
            <div className={`${style.wrapper} ${theme === 'dark' ? style.darkTheme : ''}`}>
                <p className={style.title}>Add a List</p>
                <input 
                    className={`${style.input} ${theme === 'dark' ? style.inputDarkTheme : ''}`}
                    type="text" 
                    placeholder="Add a list" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value) }
                />
                <div className={style.buttons}>
                    <button 
                        className={style.cancel}
                        onClick={() => dispatch(showAddListWindow(false))}>Cancel
                    </button>
                    <button 
                        className={`${style.add} ${!title ? style.disabled : ''}`}
                        onClick={AddNewList}
                        disabled={!title}>+ Create
                        
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddListModalWindow;