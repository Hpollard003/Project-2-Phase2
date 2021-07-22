import React, { Component } from 'react'
import Comment from './Comment'
import DefaultPost from './DefaultPost'
import CommentBox from './CommentBox'

class Post extends Component {
    state = {
        comments: []
    }

    // when this componet mounts its setting up the json data in a way for react to read by fetching the data from the server
    componentDidMount = () => {
        fetch('http://localhost:3001/comments')
            .then(resp => resp.json())
            .then((comments) => this.setState({ comments }))
    }

    // 
    addComment = (comment) => {
        this.setState({comments : this.state.comments.concat(comment)})
    }

    // this function maps through the array of comments setup by the fetch request and renders them into comment cards
    renderComments = () => {
        return this.state.comments.map(({ id, name, text }, ind) => (
            <Comment className='card' key={ind}
                id={id}
                name={name}
                text={text}
            />
        ))
    }

    // this class componet renders the page in order
    render() {
        return (
            <div className='text-center'>
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