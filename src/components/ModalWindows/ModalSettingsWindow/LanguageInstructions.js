import style from './style.module.css'
import { useSelector } from 'react-redux';

export const LanguageInstructions = () => {

    const mode = useSelector(state => state.themes.settings.mode);
    const theme = useSelector(state => state.themes.settings[mode]);
    const language = useSelector(state => state.themes.language);

    return (
    
        <div className={style.instructions}>
            <p className={style.parameters}>Language</p>
            <button className={style.btnsLang}
                    style={
                        language === 'English' 
                        ? {backgroundColor: theme.settingsWindow.activeBtns.backgroundBtn, 
                        color: theme.settingsWindow.activeBtns.btnColor}
                        : {color: theme.settingsWindow.unActiveBtn.btnColor}
                    }
                >English
            </button>
            <button className={style.btnsLang}>French</button>
            <button className={style.btnsLang}>Spanish</button>
            <p className={style.info}>Change will be applied at next app restart</p>
        </div>
    )
}