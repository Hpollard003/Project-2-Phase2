import React, { Component } from 'react'

class ClickMe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            word: '',
            counter: 0,
            prevState : 0 
        }
    }

    // this function sets the new input value of word and tracks the word length
    changeHandler = (e) => {
        this.setState({ word: e.target.value })
        // this.setState({ counter: e.target.value.length})
    }

    // this function clears the input value
    submiHandler = (e) => {
        e.preventDefault()
        this.setState({
            word: "",
            counter : this.state.counter + this.state.word.length
        })
        return(<h2>{this.state.counter }</h2>)
    }

    // when called it displays the counter
    // counterDisplay = () => {
    //     const count = document.getElementById('counter')
    //     count.innerText = `${this.state.counter + this.state.prevState}`
        
    // }

    render() {
        const { word } = this.state
        return (
            <div>
                <h1>Live Coding</h1>
                {/* this form is rendered to the about page its only purpose is to take an input and display its length in letter numerically  */}
                <form id='live' onSubmit={this.submiHandler}>
                    <div className='col'>
                        <input
                            type='text'
                            name='text1'
                            placeholder="TypeHere"
                            value={word}
                            onChange={this.changeHandler}
                        />
                        
                    </div>
                    <button type='submit' >Click Me</button>
                    <h2 id="counter"> {this.state.counter}</h2>
                </form>
                
            </div>
        )
    }
}

export default ClickMe

