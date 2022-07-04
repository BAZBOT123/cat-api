import './App.css';
import { useEffect, useState } from 'react'

function App() {

  const [image, setImage] = useState('')
  const [counter, setCounter] = useState(0)
  const url = 'https://api.thecatapi.com/v1/images/search'

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        console.log(json[0])
        setImage(json[0].url)
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
      <img src={image} alt="images" />
    </div>
  </div>
);
}

export default App;
