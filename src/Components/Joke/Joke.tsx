import React, { useState, useEffect, FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown, faAngry,faMeh, faSmile, faLaugh } from '@fortawesome/free-regular-svg-icons';
import styles from './Joke.module.sass'

interface IProps {
    id: string;
    vote: number;
    joke: string;
    upVote: any;
    downVote: any;
}


export const Joke:FC<IProps> = (props: IProps) => {
    const [EmoteColor, setEmoteColor] = useState('black')
    const emoteColor = () => {
        const vote = props.vote;
        if (vote > 6) { return styles.excellentEmote }
        else if (vote > 1 && vote <= 6) { return styles.goodEmote }
        else if (vote >= -1 && vote <= 1) { return styles.mehEmote }
        else if (vote > -5 && vote <= -2) { return styles.sadEmote }
        else if (vote <= -4) { return styles.angryEmote }
    } 
  
    const handleUpVote = () => {
        props.upVote(props.id);
    }

    const handleDownVote = () => {
        props.downVote(props.id);
    }

    const selectEmote = () => {
        const vote = props.vote;
        if (vote > 6) {  return <FontAwesomeIcon icon={faLaugh}/> }
        else if (vote > 1 && vote <= 6) { return <FontAwesomeIcon icon={faSmile}/> }
        else if (vote >= -1 && vote <= 1) { return <FontAwesomeIcon icon={faMeh}/> }
        else if (vote > -5 && vote <= -2) { return  <FontAwesomeIcon icon={faFrown}/> }
        else if (vote <= -4) { return <FontAwesomeIcon icon={faAngry}/> }

    }

    return (
        <div className={styles.jokeContainer}>
                <button className={styles.upVoteButton} onClick={handleUpVote}>+</button>
                <div className={styles.votes}>{props.vote}</div>
                <button className={styles.downVoteButton} onClick={handleDownVote}>-</button>
            <p className={styles.joke}> {props.joke} </p>
            <div className={emoteColor()}>{selectEmote()}</div>
        </div>
    )
}
