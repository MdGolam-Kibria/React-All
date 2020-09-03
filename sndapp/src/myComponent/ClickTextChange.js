import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
class ClickTextChange extends Component{
    constructor(){
        super();
        this.state = {
            name:"Golam Kibria"
        }
    }
    changeName(a){//paramiter value from btn 
            this.setState({name:a})//set value from paramiter
           // alert(a)
    }
    render(){
    return <div>
        <h1>{this.state.name}</h1>
        <button className="btn btn-primary m-5" onClick={this.changeName.bind(this,"rokeya")}>change Name</button>
    </div>
    }
}
export default ClickTextChange;