import React from 'react';
function helloFun(props){

// for control btn click
function doItBtn(){
     alert('button is clicked');
}

    return(
        <div>
  {/* //now create a buttom and set an click list.... */}
  <button onClick={doItBtn}>clickMe</button>

    <h1>Name : {props.name} and    age : {props.age}</h1>

    </div>
    );
}
export default helloFun;//jeno ami ei function ta ke jekono jaiga theke access korte pari tai export kora hoise
// export default peramiterizedFun;
