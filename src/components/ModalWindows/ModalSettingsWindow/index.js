import style from './style.module.css'

import { useSelector } from 'react-redux';

import { UserInfo } from './UserInfo';
import { ColorInstuctions } from './ColorInstuctions';
import { LanguageInstructions } from './LanguageInstructions';
import { ThemesInstructions } from './ThemesInstructions';
import { About } from './About';
import { CancelAndSaveBtns } from './CancelAndSaveBtns';
import { SettingsHeader } from './SettingsHeader';


function ModalSettingsWindow () {

    const mode = useSelector(state => state.themes.settings.mode);
    const theme = useSelector(state => state.themes.settings[mode]);

    
    return (

        <div className={style.blur}>

            <div className={style.container}
                 style={{ 
                    backgroundColor: theme.appBackground,
                    color: theme.primaryColor
                 }}
            >
                <SettingsHeader/>
                <UserInfo/>
                <div className={style.wrapperGeneral}>
                    <h4 className={style.settingsHeader}
                        style={{
                            color: theme.iconStyles.iconBackground
                        }}
                        >General
                    </h4>
                    <ColorInstuctions/>
                    <LanguageInstructions/>
                    <ThemesInstructions/>
                </div>
                <About/>
                <CancelAndSaveBtns/>
            </div>
            
        </div>
    )
}

export default ModalSettingsWindow;