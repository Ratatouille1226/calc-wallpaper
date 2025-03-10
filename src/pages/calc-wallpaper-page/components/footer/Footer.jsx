import styles from './footer.module.css';
import iconButton from '../../../../assets/main-assets/magic-wand.png';
import PropTypes from 'prop-types';

export const Footer = ({ calcMaterials, isCalcMaterials, onShowResult, onReset }) => {

    const { pastingArea, rollArea, requiredAmount } = calcMaterials();

    return (
        <footer>
            {isCalcMaterials ? (
                <div className={styles['result']}>
                    <div className={styles['result_block']}>
                        <h2>Результаты</h2>
                        <div className={styles['calculation']}>
                            <div className={styles['total']}>
                                <span>{requiredAmount}</span>
                                <p>Кол-во рулонов</p>
                            </div>
                            <div className={styles['total']}>
                                <span>{rollArea.toFixed(2)}</span>
                                <p>Кол-во m2 обоев</p>
                            </div>
                            <div className={styles['total']}>
                                <span>{pastingArea.toFixed(2)}</span>
                                <p>Площадь оклейки</p>
                            </div>
                        </div>
                        <div className={styles['buttons']}>
                            <button onClick={onReset}>Сбросить параметры</button>
                            <button className={styles['button_catalog']}>Перейти в каталог</button>
                        </div>
                    </div>
                </div>
            ) : (
                <button onClick={onShowResult} className={styles['calc_materials']}>
                    <img src={iconButton} alt="magic"/>
                    Рассчитать материалы
                </button>
            )}
        </footer>
    )
}

Footer.propTypes = {
    calcMaterials: PropTypes.func,
    isCalcMaterials: PropTypes.bool,
    onShowResult: PropTypes.func,
    onReset: PropTypes.func,
};