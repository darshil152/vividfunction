import HeaderLogo from '../images/header-logo.png';
import AdminProfile from '../images/hdr-profile.png';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header(params) {
  const addmainclass = () => {
    document.getElementById('root').classList.toggle('dash-main-class-add');
  };

  const openUserinfo = () => {
    document.getElementById('user-detail').classList.toggle('active-user-info');
  };


  return (
    <>
      <header className="header-top-section">
        <nav className="navbar fixed-top">
          <ul className="d-flex align-items-center me-auto">
            <li>
              <div className="hdr-logo-top ms-xl-0 ms-4 text-xl-center d-flex align-items-center">
                <a href="/dashboard">
                  <img src={HeaderLogo} className="img-fluid" alt="vivid" />
                </a>
              </div>
            </li>
          </ul>
          <ul
            className="d-flex align-items-center hdr-rgt-part"
            id="user-detail"
          >
            <li className="profile-hdr-drop-class">
              <Dropdown className="d-inline" drop="left">
                <Dropdown.Toggle
                  variant="transparent"
                  id="dropdown-autoclose-true"
                >
                  <div className="profile-hdr-drop ms-1">
                    <div className="profile-pic">
                      <img src={AdminProfile} alt="profile" />
                    </div>
                    <div className="profil-detail-section text-start ms-2">
                      <span>John Doe</span>
                    </div>
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">Account</Dropdown.Item>
                  <Dropdown.Item href="/login" className="border-0">
                    Log out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
          <div className="d-md-none">
            <button
              type="button"
              className="border-0 bg-transparent p-0"
              onClick={openUserinfo}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-three-dots-vertical"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
              </svg>
            </button>
          </div>
        </nav>
      </header>
      <div
        id="idarrow"
        className="arrw-left-icon position-fixed d-xl-none"
        onClick={addmainclass}
      >
        <i className="bi bi-chevron-left d-flex align-items-center justify-content-center"></i>
      </div>
    </>
  );
}
