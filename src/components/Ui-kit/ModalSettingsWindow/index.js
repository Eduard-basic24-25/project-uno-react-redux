import style from './style.module.css'

import { useDispatch, useSelector } from 'react-redux';
import { showSettingsWindow } from '../../../storage/interface/actionsCreactor';
import { setTheme,changeMode} from '../../../storage/theme/actionsCreator';

function ModalSettingsWindow () {

   

    const dispatch = useDispatch()
 
    const mode = useSelector(state => state.themes.settings.mode);
    const theme = useSelector(state => state.themes.settings[mode]);
    const language = useSelector(state => state.themes.language);
    const color = useSelector(state => state.themes.color);



     
    return (
        <div className={style.blur}>

            <div className={style.container}
                 style={{ 
                    backgroundColor: theme.appBackground,
                    color: theme.primaryColor
                 }}
                >
                <div className={style.header}>
                    <span 
                        className={style.closeBtn}
                        onClick={() => dispatch(showSettingsWindow(false))}
                        >X
                    </span>
                    <span className={style.headerName}>Settings</span>
                </div>
                    <div className={style.userInformation}>
                        <p className={style.icon}
                            style={{
                                backgroundColor:theme.iconStyles.iconBackground,
                                color: theme.iconStyles.iconColor
                            }}>AB
                        </p>
                        <p className={style.name}>Antonio Bonilla</p>
                        <p className={style.email}
                            style={{
                                color:theme.secondaryColor
                            }}
                            >antonio.bonilla@horus.com.uy
                        </p>
                        <button className={style.btnSignOut}
                                style={{
                                    
                                }}
                            >Sign Out
                        </button>
                    </div>
                    <div className={style.wrapperGeneral}
                        >
                        <h4 className={style.settingsHeader}
                            style={{
                                color: theme.iconStyles.iconBackground
                            }}
                            >General</h4>

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
                    </div>
               
                    <h4 className={style.settingsHeader}
                        style={{
                            color: theme.iconStyles.iconBackground
                        }}
                        >About
                    </h4>
                    <div className={style.about}>
                        <span className={style.version}>Version</span>
                        <span className={style.verNum}
                            style={{
                                color: theme.iconStyles.iconBackground
                            }} 
                            >1.0
                        </span>
                    </div>
                <div className={style.cancelSaveBtns}>
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
            </div>
            
        </div>
    )
}

export default ModalSettingsWindow;