import React from 'react';
import styles from './App.module.sass';
import { Joke } from './Components/Joke/Joke';
import { Main } from './Components/Main/Main';
const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Main numberOfJokes={10} />
    </div>
  );
}

export default App;
