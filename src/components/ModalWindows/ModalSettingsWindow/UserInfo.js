import style from './style.module.css'
import { useSelector } from 'react-redux';

export const UserInfo = () => {

    
    const mode = useSelector(state => state.themes.settings.mode);
    const theme = useSelector(state => state.themes.settings[mode]);

    return (
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
    )
}