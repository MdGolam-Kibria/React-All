import React, { Component } from 'react';
import ReactDom from 'react-dom'
class ReactDoms extends Component {
    render() {

myfun=()=>{
    var container = document.getElementById("myId");
    var element  = <h1>my name is kibria and i am from react dom</h1>
    ReactDom.render(element,container);

}

        return (
            <div>
                <button onClick={this.myfun}>click</button>
                <p id="myId">My Name is akhi</p>
            </div>
        );
    }
}

export default ReactDom;