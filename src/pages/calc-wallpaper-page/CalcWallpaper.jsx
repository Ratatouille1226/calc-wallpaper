import { useState } from "react";
import { Link } from "react-router-dom"

import backImg from '../../assets/calc-assets/Button.png';
import addWindowDoor from '../../assets/calc-assets/addWindowDoor.png';

import { ParamsWindow, ParamsDoor, ParamsRollRapport, InputsRoom, Footer } from './components/index';

import styles from './calc.module.css';

//НЕ СТАЛ ДЕЛАТЬ С REDUX, ПРОПСЫ ПРОКИДЫВАЮТСЯ В ОДИН КОМПОНЕНТ, НЕ ВИЖУ СМЫСЛА ПРИМЕНЯТЬ БИБЛИОТЕКУ

export const CalcWallpaper = () => {
    const [room, setRoom] = useState({lengtH: '', width: '', height: ''}); //Параметры комнаты
    const [wallpaper, setWallpaper] = useState({width: 1.06, lengtH: 10}) //Параметры руллона (обоев)
    const [rapport, setRapport] = useState({rapportRoll: 0}); //Раппорт
    const [window, setWindow] = useState([]); //Параметры окон
    const [door, setDoor] = useState([]); //Параметры дверей
    const [isCalcMaterials, setIsCalcMaterials] = useState(false); //Условный рендеринг (кнопка рассчитать или результат)
    const [errors, setErrors] = useState([]); //ошибки полей (валидация)
    
    //Валидация полей
    const validation = () => {
        let newError = {};
    
        //Ошибки комнаты
        if (!room.width || room.width <= 0) newError.width = true;
        if (!room.height || room.height <= 0) newError.height = true;
        if (!room.lengtH || room.lengtH <= 0) newError.lengtH = true;
    
        //Ошибки для окна
        window.forEach((item, index) => {
            if (!item.width || item.width <= 0) newError[`windowWidth${index}`] = true;
            if (!item.height || item.height <= 0) newError[`windowHeight${index}`] = true;
        });
    
        //Ошибки для lдвери
        door.forEach((item, index) => {
            if (!item.width || item.width <= 0) newError[`doorWidth${index}`] = true;
            if (!item.height || item.height <= 0) newError[`doorHeight${index}`] = true;
        });
    
        setErrors(newError);
    }

    //Показывать результат выполнения
    const onShowResult = () => {
        setIsCalcMaterials(true);
    }
    //Добавление окна
    const onAddNewWindow = () => {
        setWindow([...window, {width: 0, height: 0}]);
    }
    //Удаление окна 
    const onRemoveWindow = (index) => {
        setWindow(window.filter((_, i) => i !== index));
    }
    //Добавление двери
    const onAddNewDoor = () => {
        setDoor([...door, {width: 0, height: 0}]);
    }
    //Удаление двери 
    const onRemoveDoor = (index) => {
        setDoor(door.filter((_, i) => i !== index));
    }

    //Функция расчёта
    const calcMaterials = () => {
        const perimetr = 2 * (room.lengtH + room.width); //периметр комнаты
        const wallArea = perimetr * room.height; //площадь стен
        const wallAreaWindow = window.reduce((acc, window) => acc + window.width * window.height, 0); //Площадь окон
        const wallAreaDoor = door.reduce((acc, door) => acc + door.width * door.height, 0); //Площадь дверей
        const pastingArea = wallArea - (wallAreaWindow + wallAreaDoor); //вычитаем площадь окон и дверей чтобы понять сколько нужно обоев
        const rollArea = (wallpaper.width * wallpaper.lengtH) / (rapport.rapportRoll || 1); //оклейка с учетом раппорта (количество м2 обоев), подставил ИЛИ 1 чтобы не было деления на 0
        const requiredAmount = Math.ceil(pastingArea / rollArea); //необходимое количество рулонов, округляем вверх

        return { pastingArea, rollArea, requiredAmount };
    }

    //Сброс параметров
    const onReset = () => {
        setRoom({lengtH: '', width: '', height: ''});
        setWallpaper({width: 1.06, lengtH: 10});
        setRapport({rapportRoll: 0});
        setWindow([]);  
        setDoor([]);
        setIsCalcMaterials(false);
    }

    return (
        <div className={styles['wrapper']}>
            <div className={styles['content']}>
                <Link to="/main"><img className={styles['back']} src={backImg} alt="close"/></Link>

                <div className={styles['calc']}>
                    <h1 className={styles['title']}>Параметры комнаты</h1>
                    <section className={styles['params_room']}>
                            <InputsRoom 
                                errors={errors}
                                validation={validation}
                                setRoom={setRoom} 
                                room={room}
                            />
                            <ParamsRollRapport 
                                wallpaper={wallpaper} 
                                setWallpaper={setWallpaper} 
                                rapport={rapport} 
                                setRapport={setRapport}
                            />
                        <div className={styles['params_door-window']}>
                            <ParamsWindow 
                                errors={errors}
                                validation={validation}
                                onRemoveWindow={onRemoveWindow} 
                                setWindow={setWindow}
                                window={window} 
                                onAddNewWindow={onAddNewWindow} 
                                addWindowDoor={addWindowDoor}
                            />
                            <ParamsDoor 
                                errors={errors}
                                validation={validation}
                                door={door} 
                                onRemoveDoor={onRemoveDoor} 
                                onAddNewDoor={onAddNewDoor} 
                                addWindowDoor={addWindowDoor}
                                setDoor={setDoor}
                            />
                        </div>
                    </section>
                    <Footer 
                        calcMaterials={calcMaterials} 
                        isCalcMaterials={isCalcMaterials} 
                        onShowResult={onShowResult} 
                        onReset={onReset}
                    />
                </div>

            </div>
        </div>
    )
}