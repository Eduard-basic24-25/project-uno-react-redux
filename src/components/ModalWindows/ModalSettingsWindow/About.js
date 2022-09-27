import style from './style.module.css'
import { useSelector } from 'react-redux';

export const About = () => {

    const mode = useSelector(state => state.themes.settings.mode);
    const theme = useSelector(state => state.themes.settings[mode]);

    return (
        <>
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
    </>
    )
}