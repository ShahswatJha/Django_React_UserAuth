import React,{ useState } from 'react'
import './App.css';
import Login from './components/login'
import Message from './components/mssg'

function App() {

  const [token,setToken] = useState('');

  const user_log = (token_1) =>{

    setToken(token_1);
  }
  return (
    <div className="App">
      <Login user_log= { user_log }/>

      <Message token={token}/>
    </div>
  );
}

export default App;
