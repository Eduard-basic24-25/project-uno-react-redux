import style from '../ModalConfirmWindow/style.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { showConfirmWindow, showPanelTodo, selectTodoId } from '../../../storage/interface/actionsCreactor';
import { deleteTodo } from '../../../storage/content/actionsCreactor'

function ModalConfirmWindow () {

    const dispatch = useDispatch();

    const showConfirm = useSelector( state => state.interface.showConfirm)

    const selectedListId = useSelector(
        state => state.interface.listId
      )
      
      const selectedTodoId = useSelector(
        state => state.interface.todoId
      )
    function removeTodo (event) {
            dispatch(deleteTodo(selectedListId, selectedTodoId))
            dispatch(selectTodoId(0))
            dispatch(showPanelTodo(false))
            dispatch(showConfirmWindow(false))
    }
    
    return (
        <div className={`${style.modalWrapper} ${showConfirm ? style.shownConfirm : ''}`}>
            <div className={style.wrapper}>
                <p className={style.title}>
                    Are you sure? 
                </p>
                <p className={style.desc}>
                    Task will be permenently deleted
                </p>

                <div className={style.buttons}>
                    <button 
                        className={style.cancel}
                        onClick={() => dispatch(showConfirmWindow(false))}
                        >Cancel
                    </button>
                    <button 
                        className={style.delete}
                        onClick={removeTodo}
                        >Delete
                    </button>
                </div>
            </div>
        </div>
    )
}


export default ModalConfirmWindow;