import React, { useState, useEffect } from 'react'
import styles from './Joke.module.sass'

interface IProps {
    vote?: number;
}

enum Emote {
    Excellent = ':D',
    Good = ':)',
    Ok = ':|',
    Bad = ':(',
    Terrible = '>:C'
}

export const Joke = (props: IProps) => {
    const [votes, setVotes] = useState<number>(0)
    const [joke, setJoke] = useState('')

    useEffect(() => {
        const fetchJoke = async () => {
            fetch('https://icanhazdadjoke.com/', { headers: { Accept: "application/json" } })
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

    const selectEmote = () => {
        if (votes > 6) { return Emote.Excellent; }
        else if (votes > 1 && votes <= 6) { return Emote.Good; }
        else if (votes >= -1 && votes <= 1) { return Emote.Ok; }
        else if (votes > -5 && votes <= -2) { return Emote.Bad; }
        else if (votes <= -4) { return Emote.Terrible; }

    }

    return (
        <div className={styles.jokeContainer}>
                <button className={styles.upVoteButton} onClick={handleUpVote}>+</button>
                <div className={styles.votes}>{votes}</div>
                <button className={styles.downVoteButton} onClick={handleDownVote}>-</button>
            <p onClick={handleDownVote} className={styles.joke}> {joke} </p>
            <div className={styles.emote}>{selectEmote()}</div>
        </div>
    )
}
