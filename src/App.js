import { useEffect } from 'react';
import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './Input';
import { getSecretWord } from './actions';

function App() {
    const success = false;
    const secretWord = 'party';
    const guessedWords = [];

    useEffect(() => {
        getSecretWord();
    }, []);

    return (
        <div data-test='component-app' className='container'>
            <h1>Jotto</h1>
            <Congrats success={false} />
            <Input success={success} secretWord={secretWord} />
            <GuessedWords guessedWords={guessedWords} />
        </div>
    );
}

export default App;
