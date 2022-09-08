import style from './index.module.css';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function StartPage(){

  const mode = useSelector(state => state.themes.settings.mode);
  const theme = useSelector(state => state.themes.settings[mode]);
  const unoIcon = require(`../../img/${theme.startPage.unoIcon}.png`);

  return (
    <section className={style.startPage}
             style={{
                backgroundColor: theme.appBackground,
                color: theme.primaryColor
             }}>
      <div className={style.startSideBar}>
        <div className={style.logo}
             style={{
              background: `url(${unoIcon})`
             }} 
              >

        </div>

        <div className={style.textBox}>
          <h1>Welcome to Uno To Do!</h1>
          <p className={style.desc}
             style={{
                color: theme.startPage.descrColor
             }}
             >Start using the best to-do app, you can create and manage your To Do lists to improve your organisation.
          </p>
        </div>
        <Link to='/uno-todo' 
              className={style.startedBtn}
              style={{
                backgroundColor: theme.startPage.btnBackground
              }}
              >Get started
        </Link>
      </div>

      <div className={style.startBack}
           style={{
              backgroundColor: theme.startPage.backgroundColor           
           }}>
      </div>
    </section>
  )
}

export default StartPage;