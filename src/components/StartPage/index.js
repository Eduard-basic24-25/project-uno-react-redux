import style from './index.module.css';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function StartPage(){

  const theme = useSelector( state => state.themes.theme)

  return (
    <section className={`${style.startPage} ${theme === 'dark' ? style.startPageDarkTheme : ''}`}>
      <div className={style.startSideBar}>
        <div className={`${theme === 'dark' ? style.logoDarkTheme : style.logo}`}></div>

        <div className={style.textBox}>
          <h1>Welcome to Uno To Do!</h1>
          <p className={`${style.desc} ${theme === 'dark' ? style.descDarkTheme : ''}`}>
              Start using the best to-do app, you can create and manage your To Do lists to improve your organisation.
          </p>
        </div>
        <Link to='/uno-todo' className={`${style.startedBtn} ${theme === 'dark' ? style.btnDarkTheme : ''}`}>Get started</Link>
      </div>

      <div className={`${style.startBack} ${theme == 'dark' ? style.darkTheme : ''}`}></div>
    </section>
  )
}

export default StartPage;