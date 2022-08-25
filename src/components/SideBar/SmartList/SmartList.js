import Lists from './Lists/Lists';
import style from './style.module.css';
import Tasks from './Tasks/Tasks';


function SmartList () {

    return (
        <div className={style.smartListContainer}>
            <Tasks/>
            <Lists/>
        </div>
    )
}

export default SmartList;