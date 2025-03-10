import styles from './inputs.module.css';
import PropTypes from 'prop-types';

export const InputsRoom = ({ setRoom, room, validation, errors }) => {

    return (
        <>
        <div className={errors.lengtH ? styles['params_room-input'] + ' ' + styles['active'] : styles['params_room-input']}> 
            <span>Длина м</span>
            <input 
                value={room.lengtH}
                onChange={({target}) => setRoom({ ...room, lengtH: +target.value })} 
                type="number" 
                placeholder={errors.lengtH ? 'Не должно быть пустым' : '6.5'}
                onBlur={validation}
            />
        </div>
        <div className={errors.width ? styles['params_room-input'] + ' ' + styles['active'] : styles['params_room-input']}> 
            <span>Ширина м</span>
            <input 
                value={room.width}
                onChange={({target}) => setRoom({ ...room, width: +target.value })} 
                type="number" 
                placeholder={errors.width ? 'Не должно быть пустым' : '6.5'}
                onBlur={validation}
            />
        </div>
        <div className={errors.height ? styles['params_room-input'] + ' ' + styles['active'] : styles['params_room-input']}> 
            <span>Высота м</span>
            <input 
                value={room.height}
                onChange={({target}) => setRoom({ ...room, height: +target.value })} 
                type="number" 
                placeholder={errors.height ? 'Не должно быть пустым' : '6.5'}
                onBlur={validation}
            />
        </div>
        </>
    );
}

InputsRoom.propTypes = {
    setRoom: PropTypes.func,
    room: PropTypes.object,
    validation: PropTypes.func,
    errors: PropTypes.array,
};