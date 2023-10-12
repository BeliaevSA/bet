import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [one, setOne] = useState('')
  const [two, setTwo] = useState('')
  const [three, setThree] = useState('')
  const [result, setResult] = useState({x: null, y: null})
  

  const formula = (valueOne, valueTwo) => {
    let x = (+three / (1 + ( (+valueOne + 1) / (+valueTwo + 1) ) ) ).toFixed(2)
    let y = ( ((+valueOne + 1) / (+valueTwo + 1)) * x ).toFixed(2)

    setResult({x, y})
  }

  return (
    <div className="App">
      <div className="wrapper"> 
        <p className='header'>Победа</p>
        <input type='text' className='input' value={one} onChange={e => setOne(e.target.value)}/>
        <p  className='header'>Ничья</p>
        <input type='text' className='input' value={two} onChange={e => setTwo(e.target.value)}/>
        <p  className='header'>Сумма</p>
        <input type='text' className='input' value={three} onChange={e => setThree(e.target.value)}/>
        <button onClick={() => formula(one, two)}>Расчитать</button>
        <div>
          <p>Победа: {result.x}</p>
          <p>Ничья: {result.y}</p>
          {one && two && <p>Прибль: {(+one * result.x - +result.y).toFixed(2)}</p>}
        </div>
      </div>  
    </div>
  );
}

export default App;
