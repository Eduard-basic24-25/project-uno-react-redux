import style from './style.module.css'
import './common-styles/reset.css';

import { useSelector } from 'react-redux';
import SideBar from './components/SideBar';
import Todos from './components/Todos';
import ModalSettingsWindow from './components/Ui-kit/ModalSettingsWindow';
import { DefaltList } from './components/defaultComponents/defaultList';
import ConfirmModal from './components/Ui-kit/ConfirmModal/ConfirmModal';
import InputModal from './components/Ui-kit/InputModal/InputModal'




function UnoTodo() {

  
  const lists = useSelector(state => state.lists.content);
  const showConfirmModal = useSelector(state => state.interface.showConfirmModal);
  const showInputModal = useSelector(state => state.interface.showInputDialog);
  const showSettingModal = useSelector(state => state.interface.showSettings);

 

  return (
    <>
        <div className={style.mainConteiner}>
          <SideBar/>
          { 
            !lists.length ? <DefaltList/>:  <Todos/>
          }
          {
            showConfirmModal ? <ConfirmModal/> : undefined 
          }
          {
            showInputModal ? <InputModal/> : undefined
          }
          {
            showSettingModal ? <ModalSettingsWindow/> : undefined
          }
          {
            
          }
          
        </div>
      </>
      
  )
}

export default UnoTodo;