import style from './style.module.css'
import './common-styles/reset.css';

import { useSelector } from 'react-redux';
import SideBar from './components/SideBar';
import Todos from './components/Todos';
import RenameModalWindow from './components/Ui-kit/ListHeaderWindows/RenameModalWindow/RenameModalWindow';
import AddListModalWindow from './components/Ui-kit/AddListModalWindow/AddListModalWindow';
import DeleteListWindow from './components/Ui-kit/ListHeaderWindows/DeleteListWindow/DeleteListWindow';
import ModalSettingsWindow from './components/Ui-kit/ModalSettingsWindow';
import { DefaltList } from './components/defaultComponents/defaultList';



function UnoTodo() {

  
  const lists = useSelector(state => state.lists.content);
  const addListModal = useSelector(state => state.interface.addListWindow)
  const renameModalWindow = useSelector (state => state.interface.showRename)
  const theme = useSelector (state => state.themes.theme)


  return (
      <div className={`${style.mainConteiner} ${theme == 'dark' ? style.darkTheme : ''}`}>
        <SideBar/>
        { 
          !lists.length ? <DefaltList/>:  <Todos/>
        }
        {
          addListModal ? <AddListModalWindow/> : undefined
        } 
        {
          renameModalWindow ?   <RenameModalWindow/> : undefined
        } 
          <DeleteListWindow/>
          <ModalSettingsWindow/>
      </div>
      
  )
}

export default UnoTodo;