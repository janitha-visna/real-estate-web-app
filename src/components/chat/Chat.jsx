import "./chat.scss";

function Chat() {
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
      <div className="chatBox"></div>
    </div>
  );
}

export default Chat;
