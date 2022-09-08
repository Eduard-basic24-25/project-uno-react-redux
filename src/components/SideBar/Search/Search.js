import { useDispatch, useSelector } from 'react-redux';
import { setSearchString } from '../../../storage/interface/actionsCreactor';
import style from './style.module.css'

function Search () {

    const dispatch = useDispatch()
    
    const searchString = useSelector(state => state.interface.searchString);

    const mode = useSelector(state => state.themes.settings.mode);
    const theme = useSelector(state => state.themes.settings[mode]);
    const searchIcon = require(`../../../img/${theme.search}.svg`);
  
    

    return (
        
        <input 
            type="search" 
            className={style.search} 
            style={{
                backgroundColor: theme.searchInput.searchBackground,
                color: theme.searchInput.searchColor,
                borderBottom: theme.searchInput.searchBorder,
                backgroundImage: `url(${searchIcon})`
            }}
            placeholder='Search'
            value={searchString}
            onChange={(e) => dispatch(setSearchString(e.target.value))}
        />
    )
}

export default Search;