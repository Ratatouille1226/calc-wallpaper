 import styles from './paramsRollRapport.module.css';
 import PropTypes from 'prop-types';

 export const ParamsRollRapport = ({ wallpaper, setWallpaper, rapport, setRapport }) => {

    return (
        <section className={styles['params_roll-rapport']}>
            <div className={styles['params_roll']}>
                <h2 className={styles['title']}>Параметры рулона</h2>
                <div className={styles["buttons"]}>
                    <button 
                        className={wallpaper.lengtH === 10 ? styles['active_width'] : styles['button_width']}
                        onClick={() => setWallpaper({...wallpaper, width: 1.06, lengtH: 10})}
                    >
                            1.06 x 10м
                    </button>
                    <button 
                        className={wallpaper.lengtH === 25 ? styles['active_height'] : styles['button_height']}
                        onClick={() => setWallpaper({...wallpaper, width: 1.06, lengtH: 25})}
                    >
                            1.06 x 25м
                    </button>
                </div>
            </div>
            <div className={styles['params_rapport']}>
                <h2 className={styles['title']}>Раппорт</h2>
                <div className={styles["buttons"]}>
                    <button 
                        className={rapport.rapportRoll === 0 ? styles['active_zero'] : styles['button_zero']}
                        onClick={() => setRapport({rapportRoll: 0})}
                    >
                        0
                    </button>
                    <button 
                        className={rapport.rapportRoll === 0.32 ? styles['active_width'] : styles['button_width']}
                        onClick={() => setRapport({rapportRoll: 0.32})}
                    >
                        0.32м
                    </button>
                    <button 
                        className={rapport.rapportRoll === 0.64 ? styles['active_height'] : styles['button_height']}
                        onClick={() => setRapport({rapportRoll: 0.64})}
                    >
                        0.64м
                    </button>
                </div>                   
            </div>
        </section>
    );
 }

 ParamsRollRapport.propTypes = {
     wallpaper: PropTypes.object,
     setWallpaper: PropTypes.func,
     rapport: PropTypes.object,
     setRapport: PropTypes.func,
 };