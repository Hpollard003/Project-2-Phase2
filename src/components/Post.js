import React, { Component } from 'react'
import Comment from './Comment'
import DefaultPost from './DefaultPost'
import CommentBox from './CommentBox'

class Post extends Component {
    state = {
        comments: []
    }

    componentDidMount() {
        fetch('http://localhost:3001/comments')
            .then(resp => resp.json())
            .then((comments) => this.setState({ comments }))
    }

    addComment = (comment) => {
        this.setState({comments : this.state.comments.concat(comment)})
    }

    renderComments = () => {
        return this.state.comments.map(({ id, name, text }, ind) => (
            <Comment className='card' key={ind}
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
                <h3>Write your comment below</h3>
                <CommentBox addComment={this.addComment}/>
                <div>
                    {this.renderComments()}
                </div>
            </div>
        )
    }



}
export default Post