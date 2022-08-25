import style from './index.module.css';

import TodosContainer from './TodosContainer'
import TodoPanel from './TodoPanel' 
import { useSelector } from 'react-redux'


function Todos() {
  
  const tab = useSelector( state => state.interface.tab)
  const theme = useSelector(state => state.themes.theme)
  const searchString = useSelector(state => state.interface.searchString)

  return (
    <div className={`${style.todos} ${tab === 'Important' && !searchString ? style.importantTodo : ''}
                    ${theme === 'dark' ? style.darkTheme : ''} 
                    ${theme === 'dark' && tab === 'Important' ? style.importantTodo : ''} 
                    ${searchString ? style.search : ''} `}>
    
        <TodosContainer/>
        <TodoPanel/>
      
    </div>
  )
}

export default Todos;