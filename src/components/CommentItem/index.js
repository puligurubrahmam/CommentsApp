import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails, deleteItemObject, changeBtnObject} = props
  const {id, name, comment, liked,date, initialClassName} = commentDetails
  const result = formatDistanceToNow(date)
  const deleteItem = () => {
    deleteItemObject(id)
  }
  const likedImg = liked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const changeBtn = () => {
    changeBtnObject(id)
  }
  return (
    <li>
      <div className="card3">
        <div className={`${initialClassName} profile`}>
          <span>{name[0]}</span>
        </div>
        <div className="nameComment">
          <div className="card6">
            <p className="para3">{name}</p>
            <p>{result} ago</p>
          </div>

          <p>{comment}</p>
        </div>
      </div>
      <div className="card4">
        <div className="innercard4">
          <button className="deleteBtn" onClick={changeBtn}>
            <img src={likedImg} className="img" alt="like" />
          </button>
          <p className="para">Like</p>
        </div>
        <div>
          <button
            type="button"
            className="deleteBtn"
            data-testid="delete"
            onClick={deleteItem}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
      <hr />
    </li>
  )
}
export default CommentItem
