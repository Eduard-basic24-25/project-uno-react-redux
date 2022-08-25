import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { showDeleteListWindow, showRenameWindow } from '../../../../storage/interface/actionsCreactor'

import style from './index.module.css'

function TodoListHeader (){

  const dispatch = useDispatch();



  const selectedListId = useSelector(
    state => state.interface.listId)
  const tab = useSelector (state => state.interface.tab)
  const searchString = useSelector(state => state.interface.searchString)
    const header = useSelector(
      state => state.lists
    .content.find( list =>  list.id === selectedListId)?.header)
    
    function openRenameWindow () {
      dispatch(showRenameWindow(true))
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
          onClick={openRenameWindow}
        ></button>
        <button
          className={`${style.headingBtn} ${style.headingDelete}`}
          onClick={() => dispatch(showDeleteListWindow(true))}
        ></button>
      </div>
    </div>
  )  
}

export default TodoListHeader;