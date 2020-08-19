import React, { Component } from 'react'
import Rectangle from "./rectangle"
import "./App.css"

export default class App extends Component {
    state={
        btn: true,
    }
    handleClick = () =>{
        console.log("button clicked");
        this.setState({btn: false})
    }
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <h1>Hello Hello</h1>
                <h1>Hello Hello Hello</h1>
                <h1>Hello Hello Hello Hello</h1>
                <Rectangle btn={this.state.btn}/>
                <div className="container">
                <button onClick={(e)=>this.handleClick()}className="rect">Press</button>
                </div>
                <div className={(this.state.btn)? "hideText":"showText"}>Button Clicked</div>
            </div>
        )
    }
}
