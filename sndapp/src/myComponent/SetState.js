import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
class SetState extends Component{
    constructor(){
        super();
        this.state = {
                name : "Golam Kibria",
        }
    }
    changeStateText(value){
        this.setState({name:value})
    }
    render(){//this method from component
            return (
                <div>
                    {/*set text color using inline css */}
                    <h1 style={{color:"blue"}}>{this.state.name}</h1>
                    <button className='btn btn-warning' onClick={this.changeStateText.bind(this,"Text Changed")}>Click for Change</button>
                </div>
            );
    }
}
export default SetState;