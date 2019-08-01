import React, { useState, useEffect, FC } from 'react'
import styles from './Joke.module.sass'

interface IProps {
    id: string;
    vote: number;
    joke: string;
    upVote: any;
    downVote: any;
}

enum Emote {
    Excellent = ':D',
    Good = ':)',
    Ok = ':|',
    Bad = ':(',
    Terrible = '>:C'
}

export const Joke:FC<IProps> = (props: IProps) => {
    // const [votes, setVotes] = useState<number>(0)
    // const [joke, setJoke] = useState('')

    // useEffect(() => {
    //     const fetchJoke = async () => {
    //         fetch('https://icanhazdadjoke.com/', { headers: { Accept: "application/json" } })
    //             .then(async res => await res.json())
    //             .then(async res => await setJoke(res.joke))
    //     }
    //     fetchJoke();
    // }, [])

    // const handleJoke(() => )

    const handleUpVote = () => {
        // setVotes(votes + 1);
        props.upVote(props.id);
    }

    const handleDownVote = () => {
        // setVotes(votes - 1);
        props.downVote(props.id);
    }

    const selectEmote = () => {
        const vote = props.vote;
        if (vote > 6) { return Emote.Excellent; }
        else if (vote > 1 && vote <= 6) { return Emote.Good; }
        else if (vote >= -1 && vote <= 1) { return Emote.Ok; }
        else if (vote > -5 && vote <= -2) { return Emote.Bad; }
        else if (vote <= -4) { return Emote.Terrible; }

    }

    return (
        <div className={styles.jokeContainer}>
                <button className={styles.upVoteButton} onClick={handleUpVote}>+</button>
                <div className={styles.votes}>{props.vote}</div>
                <button className={styles.downVoteButton} onClick={handleDownVote}>-</button>
            <p onClick={handleDownVote} className={styles.joke}> {props.joke} </p>
            <div className={styles.emote}>{selectEmote()}</div>
        </div>
    )
}
