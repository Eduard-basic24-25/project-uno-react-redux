import style from './index.module.css'

import { useSelector } from 'react-redux';

export const DefaultSearch = () => {

    
  const mode = useSelector(state => state.themes.settings.mode);
  const theme = useSelector(state => state.themes.settings[mode]);

    return (
       
        <div className={style.defaultWrapperTodos}
        style= {{
            background:theme.todosStyles.todosBackground
        }}>
            <h2 className={style.header}>Task not found</h2>
            <p className={style.descr}>We searched high and low but couldn't find what you're looking for</p>
        </div>
       
    )
}
