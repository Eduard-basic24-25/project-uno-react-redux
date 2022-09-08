import style from './index.module.css';

import TodosContainer from './TodosContainer'
import TodoPanel from './TodoPanel' 
import { useSelector } from 'react-redux'


function Todos() {
  
  const tab = useSelector( state => state.interface.tab)

  const searchString = useSelector(state => state.interface.searchString)

  const mode = useSelector(state => state.themes.settings.mode);
  const theme = useSelector(state => state.themes.settings[mode]);

  return (
    <div className={style.todos}
         style={
            searchString ? {backgroundColor: theme.todosStyles.searchBackground} 
            : tab === 'Important' ? {backgroundColor: theme.todosStyles.importantBackground} 
            : {backgroundColor: theme.todosStyles.todosBackground}
          }
          >
        
    
        <TodosContainer/>
        <TodoPanel/>
      
    </div>
  )
}

export default Todos;