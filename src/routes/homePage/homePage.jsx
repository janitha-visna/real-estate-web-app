import SearchBar from "../../components/searchBar/searchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Welcome to Your Dream Home! Discover the perfect place to live,
            tailored just for you.
          </h1>
          <p>
            Our platform offers a seamless and personalized experience in
            finding the best real estate deals, whether you're looking to buy,
            sell, or rent. Explore top listings, get expert advice, and make
            your real estate journey effortless and enjoyable. Start your search
            today and turn your dream into reality with us.
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
