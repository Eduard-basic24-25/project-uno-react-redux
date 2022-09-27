import style from './index.module.css'

import { useSelector } from "react-redux";

export const SearchPage = () => {

    const mode = useSelector(state => state.themes.settings.mode);
    const theme = useSelector(state => state.themes.settings[mode]);
    return (

        <p className={style.todosHeading}
        style={{
         color:theme.primaryColor,
         backgroundColor: theme.todosStyles.searchBackground
       }}>
       Search
     </p>
    )
} 