import style from './index.module.css'

import Account from './Account/Account';
import AddList from './AddList/AddList';
import Search from './Search/Search';
import SmartList from './SmartList/SmartList';


function SideBar() {




  return (
     <div className={style.sidebarWrapper}> 
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