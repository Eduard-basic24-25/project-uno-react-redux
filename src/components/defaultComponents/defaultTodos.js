import style from './index.module.css'


export const defaultTodos = () => {

    return (
        <div className={style.defaultWrapper}>
            <h2 className={style.header}>Task not found</h2>
            <p className={style.descr}>Please create any Task</p>
        </div>
    )
}
