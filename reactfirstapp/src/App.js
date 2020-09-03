import React from 'react';
import HelloFun from './myComponent/Hello.js'//ekhane amer create kora funcatio er link kore dilam
import MyClassComponent from './myComponent/Welcome.js'
import peramiterizedFun from './myComponent/Hello.js'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* //react e auto amer funcation ke ei tag e create kore dise. */}
      <HelloFun name ='anika akter akhi' age ='25'></HelloFun>      
      <MyClassComponent nickName='rokeya'></MyClassComponent>
      <MyClassComponent ageIs='87'></MyClassComponent>
    </div>
  );
}

export default App;
