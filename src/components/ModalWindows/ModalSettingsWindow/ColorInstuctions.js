import style from './style.module.css'
import { useSelector } from 'react-redux';

export const ColorInstuctions = () => {

    
    const mode = useSelector(state => state.themes.settings.mode);
    const theme = useSelector(state => state.themes.settings[mode]);
    const color = useSelector(state => state.themes.color);


    return (
    
        <div className={style.instructions}>
            <p className={style.parameters}>Color palette</p>
            <button className={style.btns}
                style={
                    color === 'purple' 
                    ? {backgroundColor: theme.settingsWindow.activeBtns.backgroundBtn, 
                    color: theme.settingsWindow.activeBtns.btnColor}
                    : {color: theme.settingsWindow.unActiveBtn.btnColor}
                }
                    >Purple
            </button>
            <button className={style.btns}>Blue</button>
            <button className={style.btns}>Yellow</button>
        </div>
       
    )
}