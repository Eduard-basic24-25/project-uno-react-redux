import style from './index.module.css'

import Account from './Account/Account';
import AddList from './AddList/AddList';
import Search from './Search/Search';
import SmartList from './SmartList/SmartList';
import { useSelector } from 'react-redux';


function SideBar() {

  const mode = useSelector(state => state.themes.settings.mode);

  const theme = useSelector(state => state.themes.settings[mode]);



  return (
     <div 
          className={style.sidebarWrapper}
          style={{
            backgroundColor: theme.appBackground,
            color: theme.primaryColor
          } 

          }
          > 
      <div className={style.conteiner}>
        <Account/>
        <Search/>
        <SmartList/>
      </div>
        <AddList/>
    </div>
  )
}

export default SideBar; 