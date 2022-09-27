import style from './index.module.css'

import TodoList from './TodoList'
import AddTodo from './AddTodo'
import TodoListHeader from './TodoListHeader'
import { useDispatch, useSelector } from 'react-redux';
import { setActivTab } from '../../../storage/interface/actionsCreactor'



function TodosContainer() {

  const dispatch = useDispatch();

  const tab = useSelector( state => state.interface.tab);

  const mode = useSelector(state => state.themes.settings.mode);
  const theme = useSelector(state => state.themes.settings[mode]);

  const showPanel = useSelector (state => state.interface.show);
  const searchString = useSelector(state => state.interface.searchString)
  
  
  return (
    <>
      
      <main className={`${style.todosContainer} ${showPanel ? style.showPanel : ''}`}>
        
        <section className={style.todosSection}>
         
          <div>
          
          
            <TodoListHeader/>
            {
              tab === 'Important' || searchString 
              ? undefined   
               : ( <div className={style.wrapper}>
                  <button
                    className={style.todosBtn}   
                    style= {
                       tab === 'Todo' || tab === 'Tasks'
                      ? {color: theme.tabsStyles.activeTab.tabsColor, 
                        borderBottom: theme.tabsStyles.activeTab.borderBottom}
                      : {color: theme.tabsStyles.unActiveTab.tabsColor, 
                        borderBottom: theme.tabsStyles.unActiveTab.borderBottom}
                    }
  
                    onClick={() => dispatch(setActivTab('Todo'))}
                  >To Do
                  </button>
                  <button
                    className={style.todosBtn}
                    style= {
                      tab === 'Completed'
                     ? {color: theme.tabsStyles.activeTab.tabsColor,
                       borderBottom: theme.tabsStyles.activeTab.borderBottom}
                     : {color: theme.tabsStyles.unActiveTab.tabsColor, 
                       borderBottom: theme.tabsStyles.unActiveTab.borderBottom}
                   }
                    onClick={() => dispatch(setActivTab('Completed'))}
                  >Completed</button>
               </div>
            )}
           
            <TodoList/>

          </div>

            <AddTodo/>

        </section>
      </main>
    </>
  )
}

export default TodosContainer;