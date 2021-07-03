import React, { Component } from 'react'
import axios from 'axios'



class CommentBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      text: ''
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    console.log(this.state)
  }
  
  render() {
    const {name, text} = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input 
            type='text' 
            name='name' 
            placeholder='User ID' 
            value={name}
            onChange={this.changeHandler}
            />
          </div>
          <div>
            <input 
            type='text' 
            name='text' 
            placeholder='Comment' 
            value={text}
            onChange={this.changeHandler}
            />
          </div>
          <button type='submit'>Post</button>
        </form>
      </div>
    )
  }
}

export default CommentBox
