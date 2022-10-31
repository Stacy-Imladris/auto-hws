import Clock from './Clock'
import s2 from '../../s1-main/App.module.css'

/*
* 2 - в файле Clock.tsx из переменной date вычислить значения stringTime, stringDate, stringDay, stringMonth
* 3 - в файле Clock.tsx дизэйблить кнопки стоп / старт если таймер не запущен / запущен соответственно
* */

const HW9 = () => (
    <div id={'hw9'}>
        <div className={s2.hwTitle}>Homework #9</div>
        <div className={s2.hw}><Clock/></div>
    </div>
)

export default HW9
