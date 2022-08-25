import style from './index.module.css'


export const DefaltList = () => {

    return (
        <div className={style.defaultWrapper}>
            <h2 className={style.header}>List not found</h2>
            <p className={style.descr}>Please create any list</p>
        </div>
    )
}