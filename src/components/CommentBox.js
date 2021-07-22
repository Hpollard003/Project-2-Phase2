import React, { Component } from 'react'
import axios from 'axios'

// props are unchangable unless its properties are set using a function
// state can be changed setState renders the new state without being destructive


class CommentBox extends Component {

  // the class component constructor calls the super method to initialize the state and has props as an arguement
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      text: ''
    }
  }

  changeHandler = (e) => {
    // below i set or render the new state of the name value with whatever is being input from the user
    this.setState({[e.target.name]: e.target.value})
  }

  // Submit Handler handles posting new inputs from the form rendered below
  submitHandler = (e) => {
    e.preventDefault()
    // console.log(this.state)
    axios.post('http://localhost:3001/comments', this.state)
    // addComment is a function that takes props in this case it takes the resp data which contains new names and text
    .then(resp => this.props.addComment(resp.data))
    .catch(error => console.error(error))
    // below this I'm clearing the input fields on my form after execution
    this.setState({
      name : "",
      text : ""
    })
  }
  
  render() {
    const {name, text} = this.state
    return (
      <div className='text-center'>
        {/* this form takes the user id and text from the user */}
        <form id='form1' onSubmit={this.submitHandler}>
          <div id='text' className='col'>
            <input 
            type='text' 
            name='name' 
            placeholder='User ID' 
            value={name}
            onChange={this.changeHandler}
            />
          </div>
          <div id='text' className='col'>
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
