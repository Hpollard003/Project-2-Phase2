import React, { Component } from 'react'
import Comments from './Comments'
import DefaultPost from './DefaultPost'

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
                <h2>Comments</h2>
                <div>
                {this.renderComments()}
                </div>
            </div>
        )
    }



}
export default Post