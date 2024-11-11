
import './App.css';
import Task from './components/task';

import Toggle from './components/Toggle'; 

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      

      <Task />
      
     
      <Toggle>
        <Toggle.Active>Toggle Active</Toggle.Active>
        <Toggle.Inactive>Toggle Inactive</Toggle.Inactive>
        <Toggle.Button />
      </Toggle>
    </>
  );
}

export default App;
