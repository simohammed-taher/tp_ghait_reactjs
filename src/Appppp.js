import React, { Component } from 'react'
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 0 };
    }
    inc = () => {
        this.setState({ name: this.state.name + 1 })
    };
    dec = () => {
        this.setState({ name: this.state.name - 1 })
    }
    render() {
        return (
            <div className='App'>
                <p>{this.state.name}</p>
                <button onClick={this.inc} >Incrémenter</button>
                <button onClick={this.dec}>Décrementer</button>
            </div>
        )
    }
}
