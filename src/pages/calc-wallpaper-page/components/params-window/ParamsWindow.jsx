import styles from './paramsWindow.module.css';
import backImg from '../../../../assets/calc-assets/Button.png';
import addWindowDoor from '../../../../assets/calc-assets/addWindowDoor.png';

export const ParamsWindow = ({ errors, validation, onRemoveWindow, setWindow, window, onAddNewWindow }) => {

    return (
        <section className={styles['params_window']}>
            <h2 className={styles['title']}>Параметры окон</h2>
            <div className={styles['windows']}>
                {window.map((_, index) => (
                    <div key={index} className={styles['window']}>
                        <div className={styles['window_header']}>
                            <h3>Окно</h3>
                            <img onClick={() => onRemoveWindow(index)} src={backImg} alt="close"/>
                        </div>
                        <div className={styles['window_heigh-width']}>
                            <div className={errors[`windowHeight${index}`] ? styles['block_heigh-width'] + ' ' + styles['active']  : styles['block_heigh-width']}>
                                <span>Высота м</span>
                                <input 
                                    onChange={({target}) => {
                                        const newWindow = [...window];
                                        newWindow[index].height = +target.value;
                                        setWindow(newWindow);
                                    }} 
                                    type="number" 
                                    placeholder="0"
                                    onBlur={validation}
                                />
                            </div>
                            <div className={errors[`windowWidth${index}`] ? styles['block_heigh-width'] + ' ' + styles['active']  : styles['block_heigh-width']}>
                                <span>Ширина м</span>
                                <input  
                                    onChange={({target}) => {
                                        const newWindow = [...window];
                                        newWindow[index].width = +target.value;
                                        setWindow(newWindow);
                                    }}
                                    type="number" 
                                    placeholder="0"
                                    onBlur={validation}
                                />  
                            </div>
                        </div>
                    </div>
                ))}
                <div onClick={onAddNewWindow} className={styles['add_window']}>
                    <img src={addWindowDoor} alt="addWindow" />
                    <span >Добавить окно</span>
                </div>
            </div>
        </section>
    )
}