import React, { Component } from 'react'
class Condition extends Component{
    constructor(){
        super();
        this.state={
            isAdmin :false
        }
    }
    render(){
        return this.state.isAdmin ?//condition
        // if
         <h1>This is Admin</h1> 
         : //else
         <h2>This is User</h2>
    }
}
export default Condition;