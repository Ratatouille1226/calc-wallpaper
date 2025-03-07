import { Link } from "react-router-dom"
import iconButton from '../../assets/main-assets/magic-wand.png';

import styles from './main.module.css';

export const MainPage = () => {

    return (
        <div className={styles['wrapper']}>
           <div className={styles['block_info']}>
                <h1>Калькулятор обоев</h1>
                <span>Онлайн-калькулятор расчета обоев по поможет вам определить число рулонов, требуемых для оклеивания, с учетом окон и дверей. Чтобы получить точные результаты, просто укажите параметры помещения и размеры в специальной таблице. Наша программа также берет в учет повторение рисунка (раппорт), что позволяет оптимизировать расходы на материалы и клей.</span>
                <Link className={styles['link']} to="/calc-wallpaper">
                    <button className={styles['button']}>
                        <img src={iconButton}/>Начать расчёт материалов
                    </button>
                </Link>
            </div>
        </div>
    )
}