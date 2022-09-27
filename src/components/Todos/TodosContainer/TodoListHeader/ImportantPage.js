import style from './index.module.css';

import { useSelector } from 'react-redux';

export const ImportantPage = () => {

    const tab = useSelector(state => state.interface.tab)
    return (
        <p className={style.todosHeading}>
            {tab}
        </p>
    )
}