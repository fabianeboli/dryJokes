import React from 'react';
import styles from  './App.module.sass';
import { Joke } from './Components/Joke/Joke';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
    <Joke/>
    </div>
  );
}

export default App;
