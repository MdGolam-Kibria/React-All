import React,{Component} from 'react';
class MyClassComponent extends Component{

 clickMe() {
    alert("wow class is clicked")
}

paramitersend(a,b){
alert(a+" "+b);
}
    render(){
        return (
       <div>
           <button onClick={this.clickMe}>click from class</button>
            <h1>This is my class Component value is  =  {this.props.nickName} and age is = {this.props.ageIs}</h1>
            <button onClick={this.paramitersend.bind(this,"send paramiter to fun",2)}>click how to send data with function</button>
       </div>
        );
    }
}
// for access this class any where
export default MyClassComponent;