import styles from  '../params-window/paramsWindow.module.css';
import backImg from '../../../../assets/calc-assets/Button.png';

export const ParamsDoor = ({ errors, validation, door, onRemoveDoor, onAddNewDoor, addWindowDoor, setDoor }) => {

    return (
        <section className={styles['params_window']}>
            <h2 className={styles['title']}>Параметры Дверей</h2>
            <div className={styles['windows']}>
                {door.map((_, index) => (
                    <div key={index} className={styles['window']}>
                        <div className={styles['window_header']}>
                            <h3>Дверь</h3>
                            <img onClick={() => onRemoveDoor(index)} src={backImg} alt="close"/>
                        </div>
                        <div className={styles['window_heigh-width']}>
                            <div className={errors[`doorHeight${index}`] ? styles['block_heigh-width'] + ' ' + styles['active']  : styles['block_heigh-width']}>
                                <span>Высота м</span>
                                <input
                                    onChange={({target}) => {
                                        const newDoor = [...door];
                                        newDoor[index].height = +target.value;
                                        setDoor(newDoor);
                                    }}  
                                    type="number" 
                                    placeholder="0"
                                    onBlur={validation}
                                />
                            </div>
                            <div className={errors[`doorWidth${index}`] ? styles['block_heigh-width'] + ' ' + styles['active']  : styles['block_heigh-width']}>
                                <span>Ширина м</span>
                                <input
                                    onChange={({target}) => {
                                        const newDoor = [...door];
                                        newDoor[index].width = +target.value;
                                        setDoor(newDoor);
                                    }}  
                                    type="number" 
                                    placeholder="0"
                                    onBlur={validation}
                                />  
                            </div>
                        </div>
                    </div>
                ))}
                <div onClick={onAddNewDoor} className={styles['add_window']}>
                    <img src={addWindowDoor} alt="addDoor" />
                    <span>Добавить дверь</span>
                </div>
            </div>
        </section>
    );
}