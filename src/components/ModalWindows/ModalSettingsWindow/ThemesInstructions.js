import style from './style.module.css'

import { useSelector, useDispatch } from 'react-redux';
import { changeMode } from '../../../storage/theme/actionsCreator';

export const ThemesInstructions = () => {

    
    const dispatch = useDispatch();

    const mode = useSelector(state => state.themes.settings.mode);
    const theme = useSelector(state => state.themes.settings[mode]);


    return (
        <div className={style.instructions}>
            <p className={style.parameters}>Mode</p>
            <button 
                className={style.btnLight}
                style={
                    mode === 'lightTheme' 
                    ? {backgroundColor: theme.settingsWindow.activeBtns.backgroundBtn, 
                    color: theme.settingsWindow.activeBtns.btnColor}
                    : {color: theme.settingsWindow.unActiveBtn.btnColor}
                }
                onClick={() => dispatch(changeMode('lightTheme'))}
                >Light
            </button> 
            <button 
                className= {style.btnDark} 
                style={
                    mode === 'darkTheme' 
                    ? {backgroundColor: theme.settingsWindow.activeBtns.backgroundBtn, 
                    color: theme.settingsWindow.activeBtns.btnColor}
                    : {color: theme.settingsWindow.unActiveBtn.btnColor}
                }
                onClick={() => dispatch(changeMode('darkTheme'))}
                >Dark
            </button>
        </div>
    )
}