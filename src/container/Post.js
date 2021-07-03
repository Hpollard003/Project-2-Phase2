import React, { Component } from 'react'
import Comments from '../components/Comments'
import DefaultPost from '../components/DefaultPost'

class Post extends Component {
    state = {
        comments: []
    }

    componentDidMount() {
        fetch('http://localhost:3001/comments')
            .then(resp => resp.json())
            .then((comments) => this.setState({ comments }))
    }

    renderComments = () => {
        return this.state.comments.map(({ id, name, text }, ind) => (
            <Comments className='card' key={ind}
                id={id}
                name={name}
                text={text}
            />
        ))
    }

    render() {
        return (
            <div>
                <DefaultPost />
                {this.renderComments()}
            </div>
        )
    }



}
export default Post