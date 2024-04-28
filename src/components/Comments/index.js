const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
import './index.css'
import CommentItem from '../../components/CommentItem'
import {v4 as uuid} from 'uuid'
import {Component} from 'react'
class Comments extends Component {
  state = {count: 0, commentsList: [], name: '', comment: ''}
  updateName = event => {
    this.setState({name: event.target.value})
  }
  updateComment = event => {
    this.setState({comment: event.target.value})
  }
  changeBtnObject = id => {
    const {commentsList} = this.state
    const filteredLiked = commentsList.map(each => {
      if (each.id === id) {
        return {...each, liked: !each.liked}
      } else {
        return each
      }
    })
    this.setState({commentsList: filteredLiked})
  }
  deleteItemObject = id => {
    const {commentsList} = this.state
    const filteredList = commentsList.filter(eachItem => {
      return eachItem.id !== id
    })
    this.setState(prevState => {
      return {commentsList: filteredList, count: prevState.count - 1}
    })
  }
  updateList = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const initialBackgroundColorClassName = ` ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const commentObject = {
      id: uuid(),
      name,
      comment,
      initialClassName: initialBackgroundColorClassName,
      date:new Date(),
      liked: false,
    }
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
        commentsList: [...prevState.commentsList, commentObject],
        name: '',
        comment: '',
      }
    })
  }
  render() {
    const {commentsList, count, name, comment} = this.state
    return (
      <div className="bg">
        <h1 className="heading">Comments</h1>
        <form className="innercard">
          <div className="card1">
            <p className="para">Say something about 4.0 Technologies</p>
            <input
              placeholder="Your Name"
              className="name"
              value={name}
              onChange={this.updateName}
            />
            <textarea
              placeholder="Your Comment"
              value={comment}
              className="comment"
              onChange={this.updateComment}
            />
            <button type="submit" className="btn" onClick={this.updateList}>
              Add Comment
            </button>
          </div>
          <div className="card2">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="commentImg"
              alt="comments"
            />
          </div>
        </form>
        <div>
          <hr className="line" />
          <div className="innercard2">
            <p className="para1">{count}</p>
            <p className="para">Comments</p>
          </div>
          <ul className="list">
            {commentsList.map(eachItem => {
              return (
                <CommentItem
                  key={eachItem.id}
                  commentDetails={eachItem}
                  deleteItemObject={this.deleteItemObject}
                  changeBtnObject={this.changeBtnObject}
                />
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
