import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
class ComponentUpdate extends React.Component {
    constructor() {
        super();
        this.refreshNow = this.refreshNow.bind(this);
    }
    render() {//this is component method
        return (
            <div style={{ display: "inline-block" }}>
                <button className='btn btn-danger' onClick={this.refreshNow}>Refresh button</button>
                <h1>{Math.random()}</h1>
            </div>
        );
    }


    refreshNow() {//for update 
        // this force update method from component for update a component
        this.forceUpdate();
    }
}
export default ComponentUpdate;