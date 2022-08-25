import style from './style.module.css';
import { showAddListWindow } from '../../../storage/interface/actionsCreactor';
import { useDispatch } from 'react-redux';


function AddList () {

    const dispatch = useDispatch();

    return ( 
        <button 
            className={style.addButton}
            onClick={() => dispatch(showAddListWindow(true))}
            >New List

        </button>
    )
}

export default AddList;