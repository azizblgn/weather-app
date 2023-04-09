import { useState } from 'react';
import Form from './components/form';
import { Info } from './components/info';

function App() {
  const [info, setInfo] = useState([]);
  const [state, setState] = useState(false);
  return (
    <div className="App">
      <Form setInfo={setInfo} setState={setState}/>
      <Info info={info} state={state}/>
    </div>
  );
}

export default App;
