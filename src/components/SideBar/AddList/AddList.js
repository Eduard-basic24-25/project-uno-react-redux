import style from './style.module.css';

import { selectListId, showInputDialog } from '../../../storage/interface/actionsCreactor';
import { useDispatch, useSelector } from 'react-redux';
import { addList } from '../../../storage/content/actionsCreactor';
import { createDate } from '../../../helpers';



function AddList () {

    const dispatch = useDispatch();

    const inputModalConfig = {
        header: 'New list',
        placeholder: 'Enter list title',
        confirm: 'Create',
        action: addNewList,
      }


    const mode = useSelector(state => state.themes.settings.mode);
    const theme = useSelector(state => state.themes.settings[mode]);

        
    
    function addNewList (title, setTitle) {

        const dateNow = Date.now();

        dispatch(addList(title, dateNow))
        dispatch(selectListId(dateNow))
        setTitle('')
        dispatch(showInputDialog(false))
    }

  
    return ( 
        <button 
            className={style.addButton}
            onClick={() => dispatch(showInputDialog(true, inputModalConfig))}
            >New List

        </button>
    )
}

export default AddList;