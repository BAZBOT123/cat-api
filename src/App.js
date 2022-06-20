import './App.css';
import { useEffect, useState } from 'react'

function App() {

  const [fact, setFact] = useState('')
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => response.json())
      .then(json => {
        console.log(json[0])
        setFact(json[0].url)
      })
  },
    //fetch will be executed once, the counter has been used.
    [counter])

  return (
    <div className="App">
    <h1 className='cat-heading'> Cat Generator </h1>
    <div className='logo-container'>
    <img className='logo-image' src='/images/cats.jpeg' alt="cat logo" />
    </div>
    <button className='button-generator' onClick={() => setCounter(counter + 1)}> Generate </button>
    <div className='image-container'>
      <img src={fact} alt="images" />
    </div>
  </div>
);
}

export default App;
