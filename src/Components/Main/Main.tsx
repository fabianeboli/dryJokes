
import React, { useState, useEffect } from 'react'
import { Joke } from '../Joke/Joke';
import styles from './Main.module.sass'
import { Header } from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

interface IProps {
    numberOfJokes: number;
}

type Joke = {
    id: string, 
    vote: number,  
    joke: string
}

export const Main = (props: IProps) => {
    const url = 'https://icanhazdadjoke.com/';
    const uuid = require('uuid/v4');
    const [joke, setJoke] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    
  
    const fetchJokes = async (numberOfJokesToCreate: number = props.numberOfJokes) => {
        let jokeArray:Joke[] = [];
        setLoading(true);
        console.log("Loading ",loading);
        for(let i = 0; i< numberOfJokesToCreate; i++) {
            const res = await axios.get(url, { headers: { Accept: "application/json" }});
            const newJoke:Joke = {id: uuid(), vote: 0, joke: res.data.joke };
            jokeArray.push(newJoke);
        }
        setJoke(jokeArray);
        setLoading(false);
        console.log("Finished ",loading);
    }

    useEffect(() => {
        fetchJokes();
    },[])

    const upVote = (id: string) => {
        return setJoke(joke.map(el => el.id === id ? el = {id: el.id, vote: el.vote + 1, joke: el.joke} : el))
    }

    const downVote = (id: string) => {
        return setJoke(joke.map(el => el.id === id ? el = {id: el.id, vote: el.vote - 1, joke: el.joke} : el))
    }

    const presentJokes = () => { 
        return joke.sort((a, b) => b.vote - a.vote)
                    .map(el => <Joke key={el.id} id={el.id} 
                    vote={el.vote} joke={el.joke} upVote={upVote} downVote={downVote}/>)}
    
    const spinner = <FontAwesomeIcon className={styles.spinner}  icon={faSpinner}/>
    
    
    const main = (
        <div className={styles.main}>
            <Header click={fetchJokes} />
            <div>
                {presentJokes()}
            </div>
        </div>
    )

    return (
        <div className={styles.container}>
             {loading ? spinner : main}
        </div>
    )
}
