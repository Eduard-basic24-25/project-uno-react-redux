import { useDispatch, useSelector } from "react-redux"
import {showConfirmDialog} from '../../../storage/interface/actionsCreactor'
import style from './style.module.css';

function ConfirmModal() {

    const dispatch = useDispatch();

    const modalConfig = useSelector(state => state.interface.modalConfig);
    const mode = useSelector(state => state.themes.settings.mode);
    const theme = useSelector(state => state.themes.settings[mode]);
    
    

    return (
        <div className={style.modalWrapper}>
            <div className={style.wrapper}
                 style ={{
                    backgroundColor: theme.appBackground
                  }}>
                 
                <p className={style.title}
                   style={{
                        color: theme.modalWindows.headerColor
                    }}>
                    {modalConfig.header}
                </p>
                <p className={style.desc}
                    style={{
                        color: theme.modalWindows.descrColor
                    }}>
                    {modalConfig.description}
                </p>

                <div className={style.buttons}>
                    <button 
                        className={style.cancel}
                        onClick={() => dispatch(showConfirmDialog(false))}
                        >Cancel
                    </button>
                    <button 
                        className={style.delete}
                        onClick={modalConfig.action}
                        >{modalConfig.confirm}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal;