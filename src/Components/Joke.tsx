import React, { useState, useEffect } from 'react'
import styles from './Joke.module.sass'

interface IProps {
    joke?: string;
}

export const Joke = (props: IProps) => {
    const [votes, setVotes] = useState<number>(0)
    const [joke, setJoke] = useState('')
    
    useEffect(() => {
        const fetchJoke = async () => {
            fetch('https://icanhazdadjoke.com/', { headers: { Accept: "application/json" }})
            .then(async res => await res.json())
            .then(async res => await setJoke(res.joke))
        }
      fetchJoke();
    }, [])

    const handleUpVote = () => {
        setVotes(votes + 1);
    }

    const handleDownVote = () => {
        setVotes(votes - 1);
    }

    return (
        <div className={styles.jokeContainer}>
            <button onClick={handleUpVote}>+</button>
            <div className={styles.votes}>{votes}</div>
            <button onClick={handleDownVote}>-</button>
            <p onClick={handleDownVote} className={styles.joke}> {joke} </p>
            <div></div>
        </div>
    )
}
