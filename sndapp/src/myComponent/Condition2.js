import React, { Component } from 'react'
import Condition from './Condition';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
class Condition2 extends Component{
    constructor(){
        super();
        this.state={
            login:false
        }
    }
    render(){
        if(this.state.login){
            return (
                <button className='btn btn-danger'>logout</button>
            );
        }else{
            return (
                <p className='btn btn-primary'>login</p>
            )
        }
    }
}
export default Condition2;