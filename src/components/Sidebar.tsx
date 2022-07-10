import HomeIcon from "../assets/icons/home.svg";
import MarketIcon from "../assets/icons/market.svg";
import SearchIcon from "../assets/icons/search.svg";
import SettingsIcon from "../assets/icons/settings.svg";
import ChatIcon from "../assets/icons/chat.svg";
import ExitIcon from "../assets/icons/exit.svg";

function Sidebar() {
  return (
    <div className="row">
      <nav className="menu">
        <ul className="menu__list">
          <div className="column">
            <div className="list-container">
              <li className="menu__list-item">
                <button className="list-item__button">
                  <img src={HomeIcon} alt="Home" />
                </button>
              </li>
              <li className="menu__list-item">
                <button className="list-item__button active">
                  <img src={MarketIcon} alt="Market" />
                </button>
              </li>
              <li className="menu__list-item">
                <button className="list-item__button">
                  <img src={SearchIcon} alt="Search" />
                </button>
              </li>
            </div>
            <div className="list-container">
              <li className="menu__list-item">
                <button className="list-item__button">
                  <img src={SettingsIcon} alt="Settings" />
                </button>
              </li>
              <li className="menu__list-item">
                <button className="list-item__button">
                  <img src={ChatIcon} alt="Chat" />
                </button>
              </li>
              <li className="menu__list-item">
                <button className="list-item__button">
                  <img src={ExitIcon} alt="Exit" />
                </button>
              </li>
            </div>
          </div>
        </ul>
      </nav>
      <div className="sidebar active" id="sidebar">
        <div className="sidebar__container">
          <div className="sidebar__description">
            <h5 className="sidebar__title">Честный агент</h5>
            <p className="sidebar__subtitle">Менеджер процесса</p>
          </div>
          <div className="sidebar__actions">
            <a href="#" className="sidebar__action active">
              <div className="row row--align-center row--gap">
                <div className="sidebar__icon-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon"
                    viewBox="0 0 512 512"
                  >
                    <title>Logo Github</title>
                    <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                  </svg>
                </div>
                <span className="sidebar__text">Организации</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
