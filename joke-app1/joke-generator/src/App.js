import React from 'react';
import './App.css';
import Joke from "./components/Joke"
import JokeData from "./data/jokedata.json"

function App(){
  const JokeComps = JokeData.map(joke => <Joke  content={{setup: joke.setup, punchline: joke.punchline, key:joke.id}} />)

  return(
    <dir>
      {JokeComps}
    </dir>
  )
}

export default App;
