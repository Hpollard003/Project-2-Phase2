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
    // console.log(this.state)
    axios.post('http://localhost:3001/comments', this.state)
    .then(resp => this.props.addComment(resp.data))
    .catch(error => console.error(error))
  }
  
  render() {
    const {name, text} = this.state
    return (
      <div className='row'>
        <form onSubmit={this.submitHandler}>
          <div className='col'>
            <input 
            type='text' 
            name='name' 
            placeholder='User ID' 
            value={name}
            onChange={this.changeHandler}
            />
          </div>
          <div className='col'>
            <input 
            type='text' 
            name='text' 
            placeholder='Comment' 
            value={text}
            onChange={this.changeHandler}
            />
          </div>
          <button className="btn btn-success" type='submit'>Post</button>
        </form>
      </div>
    )
  }
}

export default CommentBox
