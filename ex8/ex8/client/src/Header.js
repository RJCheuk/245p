// Header.js
import "./Header.css";  // 引入样式表

function Header() {
  return (
    <div className="header">
      <a href="#default" className="logo">
        MyBrand
      </a>
      <div className="headerRight">
        <a className="active" href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
}

export default Header;
