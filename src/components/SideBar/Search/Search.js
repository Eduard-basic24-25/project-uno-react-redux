import { useDispatch, useSelector } from 'react-redux';
import { setSearchString } from '../../../storage/interface/actionsCreactor';
import style from './style.module.css'

function Search () {

    const dispatch = useDispatch()
    
    const searchString = useSelector(state => state.interface.searchString)

    

    return (
        <input 
            type="search" 
            className={style.search} 
            placeholder='Search'
            value={searchString}
            onChange={(e) => dispatch(setSearchString(e.target.value))}
        />
    )
}

export default Search;