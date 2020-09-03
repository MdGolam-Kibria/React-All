import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'//for import bootstrap
const ArrowFun=()=>{
    const clickBtn=(a)=>{
        alert("Arrow function clicked"+" "+a);
    }
    return(
        <button className="btn btn-danger m-5" onClick={clickBtn.bind(this,"ARROW")}>This is Arrow method</button>
    );
}
export default ArrowFun;