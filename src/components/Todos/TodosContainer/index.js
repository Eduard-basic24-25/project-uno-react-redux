
import style from './index.module.css'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import TodoListHeader from './TodoListHeader'
import { useDispatch, useSelector } from 'react-redux';
import { setActivTab } from '../../../storage/interface/actionsCreactor'


function TodosContainer(
  {
  
    showPanelTodo,
  }) {


  const dispatch = useDispatch();

  const tab = useSelector( state => state.interface.tab);

  return (
    <>
      <main className={`${style.todosContainer} ${showPanelTodo ? style.showPanel : ''}`}>
        <section className={style.todosSection}>
          <TodoListHeader/>

          <div>
            <button
              className={`${style.todosBtn} ${tab === 'Todo' ? style.active : ''}`}
              onClick={() => dispatch(setActivTab('Todo'))}
            >To Do</button>
            <button
              className={`${style.todosBtn} ${tab === 'Completed' ? style.active : ''}`}
              onClick={() => dispatch(setActivTab('Completed'))}
            >Completed</button>
          </div>

          <TodoList/>
          <AddTodo/>
        </section>
      </main>
    </>
  )
}

export default TodosContainer;