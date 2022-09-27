import style from './style.module.css'

import { useSelector, useDispatch } from 'react-redux';
import { showSettingsWindow } from '../../../storage/interface/actionsCreactor';

export const CancelAndSaveBtns = () => {
    
    const dispatch = useDispatch();

    const mode = useSelector(state => state.themes.settings.mode);
    const theme = useSelector(state => state.themes.settings[mode]);


    return (
        <div className={style.cancelAndSaveBtns}>
            <button 
                className= {style.cancel}
                style={{
                    color: theme.iconStyles.iconBackground
                }} 
                onClick={() => dispatch(showSettingsWindow(false))}
                >Cancel
            
            </button>
            <button 
                className={style.save}
                style={{
                    backgroundColor: theme.iconStyles.iconBackground
                }} 
                onClick={() => dispatch(showSettingsWindow(false))}
                >Save
            </button>
        </div>
    )
}