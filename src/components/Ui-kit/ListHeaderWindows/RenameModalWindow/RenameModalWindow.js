import style from '../RenameModalWindow/style.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { showRenameWindow } from '../../../../storage/interface/actionsCreactor'
import { useTextInput } from '../../../../helpers';
import { changeHeader } from '../../../../storage/content/actionsCreactor'
import { useState } from 'react';


function RenameModalWindow () {


    const dispatch = useDispatch()

    const isRenameWindowShow = useSelector(state => state.interface.showRename);
    

  
    const selectedListId = useSelector(
      state => state.interface.listId)
      const header = useSelector(
          state => 
          state.lists
          .content.find( list =>  list.id === selectedListId).header)
            const [title, setTitle, bindTitle] = useTextInput(header);
        //   const [title, setTitle] = useState(header)
    
   

    
    function changeTodoListHeader(event){
        event.preventDefault();
            dispatch(changeHeader(selectedListId,title))
            dispatch(showRenameWindow(false))
    }

    return (
        <div className={`${style.modalWrapper} ${isRenameWindowShow ? style.shownModal : ''}`}>
            <div className={style.wrapper}>
                <p className={style.title}>Rename list</p>
                    <input 
                        className={style.input}
                        type="text" 
                        placeholder="Rename list" 
                        {...bindTitle}
                        // value= {title}
                        // onChange={((event) => setTitle(event.target.value))}
                    />
                    <div className={style.buttons}>
                        <button 
                            className={style.cancel}
                            onClick={() => dispatch(showRenameWindow(false))}>Cancel
                        </button>
                        <button 
                            className={`${style.add} ${!title ? style.disabled : ''}`}
                            onClick={changeTodoListHeader}
                            disabled={!title}>Rename
                            
                        </button>
                    </div>
            </div>
        </div>
    )
}

export default RenameModalWindow;