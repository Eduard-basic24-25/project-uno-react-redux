
import style from './style.module.css'

import { setActivTab } from '../../../../storage/interface/actionsCreactor'
import { useDispatch, useSelector } from 'react-redux';

function Tasks () {

   const dispatch = useDispatch()
   const tab = useSelector(state => state.interface.tab);
   const mode = useSelector(state => state.themes.settings.mode);
   const theme = useSelector(state => state.themes.settings[mode]);
   const arrow = require(`../../../../img/${theme.arrow}.svg`);


    return (
        <div className={style.tasksContainer}>
            <div className={`${style.wrapper} ${tab === 'Important' ? style.importantTodos : '' }`}  
                onClick={() => dispatch(setActivTab('Important'))}
>
                <span className={style.star}></span>
                <p className={style.name}>Important</p>
                <span className={style.arrow}
                    style={{
                        backgroundImage: `url(${arrow})`
                }}>
                </span>
            </div>
            <div className={`${style.wrapper} ${tab === 'Tasks' ? style.tasks : '' }`}  
                 onClick={() => dispatch(setActivTab('Tasks'))}>

                <span className={style.house}></span>
                <p className={style.name}>Tasks</p>
                <span className={style.arrow}
                      style={{
                            backgroundImage: `url(${arrow})`
                }}>   
                </span>
            </div>
        </div>
    )
}

export default Tasks;