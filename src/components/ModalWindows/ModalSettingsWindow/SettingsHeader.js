import style from './style.module.css'

import { useDispatch, useSelector } from 'react-redux';
import { showSettingsWindow } from '../../../storage/interface/actionsCreactor';

export const SettingsHeader = () => {

    const dispatch = useDispatch();

    const mode = useSelector(state => state.themes.settings.mode);
    const theme = useSelector(state => state.themes.settings[mode]);

    return (
        <div className={style.header}>
            <span 
                onClick={() => dispatch(showSettingsWindow(false))}
                >X
            </span>
            <span className={style.headerName}>Settings</span>
        </div>
    )
}