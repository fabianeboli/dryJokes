import React, { FC } from 'react'
import styles from './Header.module.sass'
interface IProps {
    click: any 
}

export const Header:FC<IProps> = (props: IProps) => {
    return (
        <div className={styles.Header}>
            <p className={styles.title}>Jokes</p>
            <div className={styles.emote}>":-)</div>
            <button className={styles.newJokeButton} onClick={() => props.click()}>New Jokes</button>
        </div>
    )
}
