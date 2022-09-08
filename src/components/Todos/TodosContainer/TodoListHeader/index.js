import { useDispatch, useSelector } from 'react-redux';

import { selectListId, showDeleteListWindow, showRenameWindow } from '../../../../storage/interface/actionsCreactor'
import { deleteList, changeHeader } from '../../../../storage/content/actionsCreactor';
import { showConfirmDialog, showInputDialog } from '../../../../storage/interface/actionsCreactor';
import style from './index.module.css'

function TodoListHeader () {

  const dispatch = useDispatch();

  const mode = useSelector(state => state.themes.settings.mode);
  const theme = useSelector(state => state.themes.settings[mode]);

  const selectedListId = useSelector(state => state.interface.listId)
  const tab = useSelector (state => state.interface.tab)
  const lists = useSelector(state => state.lists.content);
  const searchString = useSelector(state => state.interface.searchString)
  
  const header = useSelector(
      state => state.lists
    .content.find( list =>  list.id === selectedListId)?.header)


  
    const modalConfig = { 
      header: 'Are you sure?',
      description: 'List will be permenently deleted',
      confirm: 'Delete', 
      action: removeList,
  }
    const inputModalConfig = {
      header: 'Rename list',
      placeholder: 'Rename list',
      confirm: 'Rename',
      action: changeTodoListHeader,
    }
        
    function changeTodoListHeader(title) {
      dispatch(changeHeader(selectedListId,title))
      dispatch(showInputDialog(false))
}
    function removeList () {
      if (lists.length>1) { 
          if (selectedListId == lists[0].id){
              dispatch(selectListId(lists[1].id))
              console.log(selectedListId, lists[1].id)
          } else {
              dispatch(selectListId(lists[0].id))
              console.log(selectedListId, lists[0].id)
          }
      } else{
          
      }
      dispatch(deleteList(selectedListId))
      dispatch(showConfirmDialog(false))
}
 
  if(searchString){
    return (
      <div className={style.headingWrapper}>

        <p className={style.todosHeading}>
          Search
        </p>
     
    </div>
  )
  }  
  if(tab === 'Important'){
    return (
      <div className={style.headingWrapper}>

        <p className={style.todosHeading}>
          {tab}
        </p>
     
    </div>
  )
  }  
  return (
    <div className={style.headingWrapper}>
      
      <p className={style.todosHeading}>
        {header}
      </p>
      <div className={style.headingBtnWrapper}>
        <button
          className={`${style.headingBtn} ${style.headingEdit}`}
          onClick={() => dispatch(showInputDialog(true, inputModalConfig))}>
        </button>
        <button
          className={`${style.headingBtn} ${style.headingDelete}`}
          onClick={() => dispatch(showConfirmDialog(true, modalConfig))}
        ></button>
      </div>
    </div>
  )  
}

export default TodoListHeader;