import SearchBar from "../../components/searchBar/searchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            find the estate and get your dream plcae find the estate and get
            your dream plcae
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            est, quasi beatae inventore quibusdam minima natus dolore quisquam
            iste earum minus voluptas, ullam sequi nulla nam rem, consequuntur
            temporibus enim.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>years of experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>award gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>property ready </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
