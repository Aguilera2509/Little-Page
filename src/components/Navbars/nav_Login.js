import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import pictureDefault from "../assets/NoPictureUser.jpg";

export const NavbarLogin = () =>{
  const { user, logout } = useAuth0();

  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/profile">
          <img src={user ? user.picture : pictureDefault} style={{borderRadius: "50%"}} alt="" width="30" height="24" className="d-inline-block align-text-top" />
          {user.name}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/snake">Snake</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/chat">Chat</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#A" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Setting
              </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item" to="/about">About</Link></li>
              <li><Link className="dropdown-item" to="/contact">Contact</Link></li>
              <li><hr className="dropdown-divider" /></li>
              <li><Link className="dropdown-item" to="#logout" role="button" onClick={() => logout({ returnTo: window.location.origin })}>Logout</Link></li>
            </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};