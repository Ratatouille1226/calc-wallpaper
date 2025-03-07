import styles from './inputs.module.css';

export const InputsRoom = ({ setRoom, room, validation, errors }) => {

    return (
        <>
        <div className={errors.lengtH ? styles['params_room-input'] + ' ' + styles['active'] : styles['params_room-input']}> 
            <span>Длина м</span>
            <input 
                value={room.lengtH}
                onChange={({target}) => setRoom({ ...room, lengtH: +target.value })} 
                type="number" 
                placeholder="6.5"
                onBlur={validation}
            />
        </div>
        <div className={errors.width ? styles['params_room-input'] + ' ' + styles['active'] : styles['params_room-input']}> 
            <span>Ширина м</span>
            <input 
                value={room.width}
                onChange={({target}) => setRoom({ ...room, width: +target.value })} 
                type="number" 
                placeholder="6.5"
                onBlur={validation}
            />
        </div>
        <div className={errors.height ? styles['params_room-input'] + ' ' + styles['active'] : styles['params_room-input']}> 
            <span>Высота м</span>
            <input 
                value={room.height}
                onChange={({target}) => setRoom({ ...room, height: +target.value })} 
                type="number" 
                placeholder="6.5"
                onBlur={validation}
            />
        </div>
        </>
    );
}