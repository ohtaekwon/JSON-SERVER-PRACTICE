import React from 'react';
import { useEffect } from 'react';
import { useState, useRef, useContext } from 'react';
import './FeedsList.css';

// import FormContext from './FormContext';
export default function FeedList({ feed }) {
  const inputRef = useRef();
  // const formContext = useContext(FormContext);
  const id = localStorage.getItem('id');
  const [msgState, setMsgState] = useState([
    {
      id: '',
      msg: '',
      // date:
    },
  ]);

  const handleForm = (e) => {
    e.preventDefault();
    const nextMsg = inputRef.current.value;
    console.log(nextMsg);
    setMsgState((prev) => [
      ...prev,
      {
        id: Date.now(),
        msg: nextMsg,
      },
    ]);
    console.log(msgState);
  };

  useEffect(() => {}, [msgState]);

  return (
    <div className="FeedListItem">
      <div className="userId">
        <img src={process.env.PUBLIC_URL + 'assets/user.png'} alt="user" />
        <h1>{feed.userName}</h1>
      </div>
      <div className="FeedListItem-img">
        <img className="" src={feed.imgUrl} alt={feed.userName} />
      </div>
      <div className="FeedListItem-msg">
        <ul className="commentsList">
          {feed.comments &&
            feed.comments.map((comment) => {
              return (
                <li key={comment.id}>
                  {comment.userName} : {comment.comment}
                </li>
              );
            })}
        </ul>
        {msgState && (
          <ul className="myMsgList">
            <li key={msgState.id}>
              {id} : {msgState.msg}
            </li>
          </ul>
        )}
      </div>
      <form className="FeedListItem-input" onSubmit={handleForm}>
        <input
          type="text"
          className="msg-input"
          ref={inputRef}
          placeholder="  댓글 달기.."
        />
        <button type="submit">게시</button>
      </form>
    </div>
  );
}
