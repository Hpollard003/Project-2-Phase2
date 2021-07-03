import React, { Component } from 'react'
import Comments from '../components/Comments'
import img from '../imgs/Post2.jpg'

class Post extends Component {
    state = {
        comments : []
    }

    componentDidMount() {
        fetch('http://localhost:3001/comments')
            .then(resp => resp.json())
            .then((comments) => this.setState({comments}))
    }
    
    render(){
        return(
            <div className='cards'>
                <h2>Post</h2>
                <img src={img} alt='anime' />
                {
                this.state.comments.map(({id , name , text}) => (
                     <Comments
                        id={id}
                        name={name}    
                        text={text}

                     />
                ))}
            </div>
        )    
    }



}
export default Post