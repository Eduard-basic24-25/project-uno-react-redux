import style from './style.module.css'

import { useDispatch, useSelector } from 'react-redux';
import { showSettingsWindow } from '../../../storage/interface/actionsCreactor';
import { setTheme } from '../../../storage/theme/actionsCreator';

function ModalSettingsWindow () {

   

    const dispatch = useDispatch()
    const shownSettingsWindow = useSelector( state => state.interface.showSettings)
    const theme = useSelector(state => state.themes.theme)

     
    // const toggleTheme = () => {
    //     // setIsDark(!isDark)
    //     dispatch(setTheme('dark'))
    //     dispatch(showSettingsWindow(false))
 
    // }
    // const cancelBtn = () => {
    //     if(theme == 'light') dispatch(setTheme('dark'))
    //     if(theme == 'dark') dispatch(setTheme('light'))
    //     dispatch(showSettingsWindow(false))
    // }
    return (
        <div className={`${style.blur} ${shownSettingsWindow ? style.active : ''}`}>

            <div className={`${style.container} ${theme === 'dark' ? style.darkTheme : ''}`}>
                <div className={style.header}>
                    <span 
                        className={style.closeBtn}
                        onClick={() => dispatch(showSettingsWindow(false))}>
                            X
                    </span>
                    <span className={style.headerName}>Settings</span>
                </div>
                    <div className={style.userInformation}>
                        <p className={style.icon}>AB</p>
                        <p className={style.name}>Antonio Bonilla</p>
                        <p className={style.email}>antonio.bonilla@horus.com.uy</p>
                        <button className={style.btnSignOut}>Sign Out</button>
                    </div>
                    <div className={style.wrapperGeneral}>
                        <h4 className={style.settingsHeader}>General</h4>

                        <div className={style.instructions}>
                                <p className={style.parameters}>Color palette</p>
                                <button className={`${style.onClicked} ${style.btns} `}>Purple</button>
                                <button className={style.btns}>Blue</button>
                                <button className={style.btns}>Yellow</button>
                        </div>
                        <div className={style.instructions}>
                                <p className={style.parameters}>Language</p>
                                <button className={style.btnsLang}>English</button>
                                <button className={style.btnsLang}>French</button>
                                <button className={style.btnsLang}>Spanish</button>
                                <p className={style.info}>Change will be applied at next app restart</p>
                        </div>
                        <div className={style.instructions}>
                                <p className={style.parameters}>Mode</p>
                                <button 
                                    className={`${style.btnLight} ${theme === 'light' ? style.onClicked : ''}`}
                                    onClick={() => dispatch(setTheme('light'))}
                                    >Light
                                </button> 
                                <button 
                                    className= {`${style.btnDark} ${theme === 'dark' ? style.onClicked : ''}`} 
                                    onClick={() => dispatch(setTheme('dark'))}
                                     >Dark
                                </button>
                        </div>
                    </div>
               
                    <h4 className={style.settingsHeader}>About</h4>
                    <div className={style.about}>
                        <span className={style.version}>Version</span>
                        <span className={style.verNum}>1.0</span>
                    </div>
                <div className={style.cancelSaveBtns}>
                    <button 
                        className= {style.cancel}
                        onClick={() => dispatch(showSettingsWindow(false))}>Cancel
                     
                    </button>
                    <button 
                        className={style.save}
                        onClick={() => dispatch(showSettingsWindow(false))}
                        >Save
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default ModalSettingsWindow;