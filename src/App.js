import './App.css';
import Card from './Card';
import { useState } from 'react';

const App = () => {
  const [color, setColor] = useState("");

  return (
      <div className="App" style={{backgroundColor:color}}>
        <Card setColor={setColor}/>
      </div>
  );
}

export default App;
