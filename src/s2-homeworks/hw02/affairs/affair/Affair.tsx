import { AffairType } from '../../HW2'
import s from './Affair.module.css'
import s2 from '../Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair({ affair, deleteAffairCallback }: AffairPropsType) {
    const { _id, name, priority } = affair

    const deleteCallback = () => deleteAffairCallback(_id)

    const nameClass = s.name + ' ' + s2[priority]
    const buttonClass = s.closeButton + ' ' + s2[priority]
    const affairClass = s.affair + ' ' + s2[priority]

    return (
        <div id={'hw2-affair-' + _id} className={affairClass}>
            <div id={'hw2-name-' + _id} className={nameClass}>{name}</div>
            <div id={'hw2-priority-' + _id} hidden>{priority}</div>
            <button id={'hw2-button-delete-' + _id} className={buttonClass}
                    onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
