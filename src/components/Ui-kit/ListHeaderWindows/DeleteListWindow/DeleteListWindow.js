import style from '../DeleteListWindow/style.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectListId, showDeleteListWindow} from '../../../../storage/interface/actionsCreactor';
import { deleteList } from '../../../../storage/content/actionsCreactor'

function DeleteListWindow () {

    const dispatch = useDispatch();

    const showListDelete = useSelector( state => state.interface.showListDelete)
    
    const selectedListId = useSelector(
        state => state.interface.listId)
      
      const selectedTodoId = useSelector(
        state => state.interface.todoId
      )
      const lists = useSelector(state => state.lists.content);

    function removeList () {
            // Если лист только один, то тогда показать заглушку(завести состояния,)
            // В протвном случае, нужно выбрать пред лист(выберать первый лист) 
            // console.log(selectedListId, lists[0], lists[1])


            if (lists.length>1) { 
                if (selectedListId == lists[0].id){
                    dispatch(selectListId(lists[1].id))
                    console.log(selectedListId, lists[1].id)
                } else {
                    dispatch(selectListId(lists[0].id))
                    console.log(selectedListId, lists[0].id)
                }
            } else{
                
            }
            // console.log(selectedListId, lists[0], lists[1])
            dispatch(deleteList(selectedListId))
            dispatch(showDeleteListWindow(false))
           

    }
    
    return (
        <div className={`${style.modalWrapper} ${showListDelete ? style.shownConfirm : ''}`}>
            <div className={style.wrapper}>
                <p className={style.title}>
                    Are you sure? 
                </p>
                <p className={style.desc}>
                    List will be permenently deleted
                </p>

                <div className={style.buttons}>
                    <button 
                        className={style.cancel}
                        onClick={() => dispatch(showDeleteListWindow(false))}
                        >Cancel
                    </button>
                    <button 
                        className={style.delete}
                        onClick={removeList}
                        >Delete
                    </button>
                </div>
            </div>
        </div>
    )
}


export default DeleteListWindow;