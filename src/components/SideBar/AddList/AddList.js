import style from './style.module.css';

import { showInputDialog } from '../../../storage/interface/actionsCreactor';
import { useDispatch, useSelector } from 'react-redux';
import { addList } from '../../../storage/content/actionsCreactor';



function AddList () {


    const inputModalConfig = {
        header: 'New list',
        placeholder: 'Enter list title',
        confirm: 'Create',
        action: addNewList,
      }
    const dispatch = useDispatch();

    
    const mode = useSelector(state => state.themes.settings.mode);
    const theme = useSelector(state => state.themes.settings[mode]);

        
    
    function addNewList (title, setTitle) {
        dispatch(addList(title))
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