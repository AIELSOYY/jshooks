import React, { Component } from 'react'



class ClassCount extends Component {
    componentDidMount(){
        document.title= `Vous avez cliqué ${this.state.count} fois`;
    }

    componentDidUpdate(){
        document.title= `Vous avez cliqué ${this.state.count} fois`;
    }

    constructor(props){
        super(props)

        this.state ={
            count:0
        }
    }
    render() {
        return(
        <div>
            <h1>{this.state.count}</h1>
            <button onClick={() =>(this.setState({count: this.state.count+1}))}>Add 1 to counter</button>
        </div>)
        
        
    }
    

}

export default ClassCount;