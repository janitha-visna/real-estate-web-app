import { useState } from "react";
import "./chat.scss";

function Chat() {
    const [chat,setChat] = useState(true)
  return (
    <div className="chat">
      <div className="messages">
        <h1>messages</h1>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>johon doe</span>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>johon doe</span>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>johon doe</span>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>johon doe</span>
          <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              jhon doe
            </div>
            <span className="close" onClick={() => setChat(null)}>x</span>
          </div>
          <div className="centre">
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit </p>
              <span>1 hor ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit </p>
              <span>1 hor ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit </p>
              <span>1 hor ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit </p>
              <span>1 hor ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit </p>
              <span>1 hor ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
