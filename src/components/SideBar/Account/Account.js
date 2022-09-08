import { useDispatch, useSelector } from 'react-redux';
import { showSettingsWindow } from '../../../storage/interface/actionsCreactor';
import style from './style.module.css'


function Account () {
    
    const dispatch = useDispatch();
  
    const mode = useSelector(state => state.themes.settings.mode);
    const theme = useSelector(state => state.themes.settings[mode]);


    function showSettings () {
        dispatch(showSettingsWindow(true))
    }
    return (
        <div className={style.accountWrapper}>
            <span
                className={style.icon}
                style={{
                    background: theme.iconStyles.iconBackground,
                    color: theme.iconStyles.iconColor,
                }}
                onClick={showSettings}>
                SD
            </span>
            <div className={style.nameWrapper}>
                <p className={style.userName}>Antonio Boniila</p>
                <span 
                    className={style.userEmail}
                    style={{
                        color: theme.secondaryColor
                    }}
                    >antonio.bonila@horus.com</span>
            </div>
        </div>
    )
}

export default Account;