import {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react'
import s from './SuperButton.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: FC<SuperButtonPropsType> = ({
                                                   xType,
                                                   className,
                                                   disabled,
                                                   ...restProps
                                               }) => {
    const finalClassName = s.button + ' ' + s.default
        + (disabled ? ' ' + s.disabled : '')
        + (xType === 'red' ? ' ' + s.red : xType === 'secondary' ? ' ' + s.secondary : '')
        + (className ? ' ' + className : '')

    return <button disabled={disabled} className={finalClassName} {...restProps}/>
}

export default SuperButton
