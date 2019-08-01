
import React, { useState } from 'react'
import { Joke } from '../Joke/Joke';
import styles from './Main.module.sass'
import { Header } from '../Header/Header';

interface IProps {
    numberOfJokes: number;
}

export const Main = (props: IProps) => {
    const uuid = require('uuid/v4')
    const [jokes, setJokes] = useState<JSX.Element[]>([])



    const createJokes = (numberOfJokesToCreate: number = props.numberOfJokes) => {
        return setJokes(
            [...Array(numberOfJokesToCreate)].map(() => <Joke key={uuid()} />)
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <Header click={createJokes} />
                <div>
                    {jokes}
                </div>
            </div>
        </div>
    )
}
