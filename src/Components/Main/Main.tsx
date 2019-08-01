
import React, { useState, useEffect } from 'react'
import { Joke } from '../Joke/Joke';
import styles from './Main.module.sass'
import { Header } from '../Header/Header';
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
    const [loading, setLoading] = useState(false);

    
    const fetchJokes = async (numberOfJokesToCreate: number = props.numberOfJokes) => {
        // return fetch(url, { headers: { Accept: "application/json" } })
        //     .then(async res => await res.json())
        //     .then(async res => await {id: uuid(), vote: 9, joke: res.joke})
        //     .catch(async err => await {id: uuid(), vote: 0, joke: `Error: ${err}`} 
        //     )
        let jokeArray:Joke[] = [];
        for(let i = 0; i< numberOfJokesToCreate; i++) {
            const res = await axios.get(url, { headers: { Accept: "application/json" }});
            const newJoke:Joke = {id: uuid(), vote: 0, joke: res.data.joke };
            jokeArray.push(newJoke);
        }
        setJoke(jokeArray)
    }

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

    // const createJokes = () => {
    //      setJoke(
    //         [...Array(numberOfJokesToCreate)].map(() => fetchJoke())
    //     )
         
    // }

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <Header click={fetchJokes} />
                <div>
                    {presentJokes()}
                </div>
            </div>
        </div>
    )
}
