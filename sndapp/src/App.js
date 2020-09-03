import React from 'react';
import logo from './logo.svg';
import './App.css';
import name from './myComponent/Hello'
import Hello from './myComponent/Hello'; 
import ArrowFun from './myComponent/ArrowFun'
import Welcome from './myComponent/Welcome';
import ClickTextChange from './myComponent/ClickTextChange';
import Condition from './myComponent/Condition';
import Condition2 from './myComponent/Condition2';
import SetState from './myComponent/SetState';
import ComponentUpdate from './myComponent/ComponentRefresh';


function App() {
  return (
    <div className="App">
      {/* <Condition2></Condition2>
      <Hello></Hello><br/>
    <div className='rows'>
      <ArrowFun className='row'></ArrowFun>
      <Welcome className='row'></Welcome>
      </div> */}
{/*      
      <ClickTextChange></ClickTextChange>
      <Condition></Condition>
      <Condition2></Condition2> */}

<SetState></SetState>
<ComponentUpdate></ComponentUpdate>
<ReactDoms></ReactDoms>

    </div>
  );
}

export default App;
