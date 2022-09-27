import style from './style.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { showInputDialog } from '../../../storage/interface/actionsCreactor'
import { useTextInput } from '../../../helpers/index';



function InputModal () {


    const dispatch = useDispatch()

    const inputModalConfig = useSelector(state => state.interface.inputModalConfig);
    
    const mode = useSelector(state => state.themes.settings.mode);
    const theme = useSelector(state => state.themes.settings[mode]);

  

    const selectedListId = useSelector(
      state => state.interface.listId)
      const header = useSelector(
          state => 
          state.lists
          .content.find( list =>  list.id === selectedListId)?.header)
            const [title, setTitle, bindTitle] = useTextInput('');
    

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
                    {inputModalConfig.header}</p>
                    <input 
                        className={style.input}
                        type="text" 
                        placeholder={inputModalConfig.placeholder}
                        {...bindTitle}
                        style={{
                            background: theme.modalWindows.input.inputBackground,
                            borderBottom: theme.modalWindows.input.inputBorder,
                            color: theme.primaryColor
                          }} 
                    />
                    <div className={style.buttons}>
                        <button 
                            className={style.cancel}
                            onClick={() => dispatch(showInputDialog(false))}
                            >Cancel
                        </button>
                        <button 
                            className={`${style.add} ${!title ? style.disabled : ''}`}
                            onClick={() => inputModalConfig.action(title,setTitle)}
                            disabled={!title}
                            style={{
                                background: inputModalConfig.confirm === 'Rename' ? '#5946D2' : '',
                                padding: inputModalConfig.confirm === 'Rename' ? '10px 16px 10px 17px' : '',            
                            }}>
                                {inputModalConfig.confirm}
                        </button>
                    </div>
            </div>
        </div>
    )
}

export default InputModal;