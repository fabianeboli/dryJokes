import React, { FC } from 'react'

interface IProps {
    click: any 
}

export const Header:FC<IProps> = (props: IProps) => {
    return (
        <div>
            <p>Jokes</p>
            <div>":-)</div>
            <button onClick={() => props.click()}>New Jokes</button>
        </div>
    )
}
