import style from './6CSSModule.css';

const CSSModule = () => {
    return (
        <div className={style.box1}>
        {/* <div className={${style.box1} ${style.center}}> */}
            <h2>Css module</h2>
        </div>
    )
    // classnames 라이브러리 
    // npm i classnames
    // import Names from 'classnames'; 
    // <div className= {Names(style.box1, style.center)}></div>
}

export default CSSModule;