import logo from "./logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="header-text">
        <h1 className="header-title">React Starter Projects</h1>
        Click on any of the projects below to navigate to the application.
      </div>
      <img src={logo} className="logo" alt="logo" />
    </header>
  );
}

export default Header;
