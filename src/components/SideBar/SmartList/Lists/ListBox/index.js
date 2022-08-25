import style from './style.module.css'
import { selectListId } from '../../../../../storage/interface/actionsCreactor';
import { useDispatch, useSelector } from 'react-redux';


    
function ListBox ({listId, listHeader}) {


    const dispatch = useDispatch();

    
    const selectedListId = useSelector(state => state.interface.listId)

    function addSelected () {
        dispatch(selectListId(listId))     
    }


    return (
        <div className={`${style.list} ${selectedListId === listId ? style.selected : ''}`}
            onClick={addSelected}>
            <span className={style.listIcon}></span>
            <p className={style.listName}>{listHeader}</p>
        <span className={style.arrow}></span>
    </div>
    )
}


export default ListBox;


