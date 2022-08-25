
import style from './index.module.css'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import TodoListHeader from './TodoListHeader'
import { useDispatch, useSelector } from 'react-redux';
import { setActivTab } from '../../../storage/interface/actionsCreactor'

import ModalWindow from '../../Ui-kit/ModalWindow/ModalWindow';
import ModalConfirmWindow from '../../Ui-kit/ModalConfirmWindow/ModalConfirmWindow';



function TodosContainer() {

  const dispatch = useDispatch();

  const tab = useSelector( state => state.interface.tab);
  const showPanel = useSelector (state => state.interface.show);
  const searchString = useSelector(state => state.interface.searchString)
  
  return (
    <>
      <main className={`${style.todosContainer} ${showPanel ? style.showPanel : ''}`}>
        <section className={style.todosSection}>
         
          <div>

            <TodoListHeader/>
            {
              tab === 'Important' || searchString ?   
                undefined   
               : ( <div className={style.wrapper}>
                  <button
                    className={`${style.todosBtn} ${tab === 'Todo' ? style.active : ''}`}
                    onClick={() => dispatch(setActivTab('Todo'))}
                  >To Do
                  </button>
                  <button
                    className={`${style.todosBtn} ${tab === 'Completed' ? style.active : ''}`}
                    onClick={() => dispatch(setActivTab('Completed'))}
                  >Completed</button>
               </div>
            )}
         
            <TodoList/>
            
          </div>
            <AddTodo/>
            <ModalWindow/>
            <ModalConfirmWindow/>
     
        </section>
      </main>
    </>
  )
}

export default TodosContainer;