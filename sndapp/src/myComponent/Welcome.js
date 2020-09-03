import React, { Component } from 'react';
class Welcome extends Component{
    constructor(){//for set outside data
        super();

        var obj ={
            name:"kibria",
            age:12,
            year:[12,13,14,15,16],
            weight:{
                class1:"1",
                class2:"2",
                class3:"3",
                class4:[
                    {
                     cls1:"1",
                     cls3:"3",
                    cls4:"4"
                    },
                    {
                        cls2:"2"
                    }
                ]

            }
        }
        this.state  =obj;

    }
    render(){
    return <div>
        <h1>{this.state.name+" "+this.state.age}</h1>
        {/* print full array */}
    <h2>{this.state.year}</h2>
    {/* call array by index */}
    <h3>{this.state.year[4]}</h3>
    <h4>{this.state.weight.class1}</h4>
    <h5>{this.state.weight.class4[1].cls2}</h5>
    </div>
    }
}
export default Welcome;