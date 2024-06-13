import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";

function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>user inforamtion</h1>
            <button>update profile</button>
          </div>
          <div className="info">
            <span>
              avatar:{" "}
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </span>
            <span>
              username <b>jhon doe</b>
            </span>
            <span>
              email: <b>jhon@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1>my list</h1>
            <button>create new post</button>
          </div>
          <List />
          <div className="title">
            <h1>save list</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
            <Chat/>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
