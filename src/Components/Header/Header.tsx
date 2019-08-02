import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMehRollingEyes } from '@fortawesome/free-regular-svg-icons'
import styles from './Header.module.sass'
interface IProps {
    click: any 
}

export const Header:FC<IProps> = (props: IProps) => {
    return (
        <div className={styles.Header}>
            <p className={styles.title}><div className={styles.accentTitle}>Dry </div>Jokes</p>
            <div className={styles.emote}><FontAwesomeIcon icon={faMehRollingEyes}/></div>
            <button className={styles.JokeButton} onClick={() => props.click()}>New Jokes</button>
        </div>
    )
}
