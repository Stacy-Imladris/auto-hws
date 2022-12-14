import { useState } from 'react'
import { v1 } from 'uuid'
import s2 from '../../s1-main/App.module.css'
import GreetingContainer from './GreetingContainer'

export const pureAddUserCallback = (name: string, setUsers: (user: UserType[]) => void, users: UserType[]) => {
    const user: UserType = { _id: v1(), name }
    setUsers([...users, user])
}

const HW3 = () => {
    const [users, setUsers] = useState<UserType[]>([])

    const addUserCallback = (name: string) => pureAddUserCallback(name, setUsers, users)

    return (
        <div id={'hw3'}>
            <div className={s2.hwTitle}>Homework #3</div>
            <div className={s2.hw}>
                <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            </div>
        </div>
    )
}

export default HW3

// types
export type UserType = {
    _id: string
    name: string
}
