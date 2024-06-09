import "./navbar.scss"
function Navbar (){
    return (
      <nav>
        <div className="left">
          <a href="/" className="logo">
            <img src="/logo.png" alt="" />
            <span>esate</span>
          </a>
          <a href="/">HOME</a>
          <a href="/">about</a>
          <a href="/">contact</a>
          <a href="/">agents</a>
        </div>

        <div className="right">
          <a href="/">signin</a>
          <a href="/" className="register">signup</a>
        </div>
      </nav>
    );
}

export default Navbar;