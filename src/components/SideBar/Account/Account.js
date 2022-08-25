import { useDispatch, useSelector } from 'react-redux';
import { showSettingsWindow } from '../../../storage/interface/actionsCreactor';
import style from './style.module.css'


function Account () {
    
    const dispatch = useDispatch();
    const theme = useSelector (state => state.themes.theme)
    function showSettings () {
        dispatch(showSettingsWindow(true))
    }
    return (
        <div className={style.accountWrapper}>
            <span
                className={`${style.icon} ${theme == 'dark' ? style.darkTheme : ''}`}
                onClick={showSettings}>
                SD
            </span>
            <div className={style.nameWrapper}>
                <p className={style.userName}>Antonio Boniila</p>
                <span className={style.userEmail}>antonio.bonila@horus.com</span>
            </div>
        </div>
    )
}

export default Account;