export default function UpNav() {
  return (
    <>
      <div className="app-header">
        <div className="app-current">Home</div>
        <ul className="upnav">
          <div className="upnav-name">김지성</div>
          <a>
            <li className="upnav-item">
              <i className="far fa-comments"></i>
            </li>
          </a>
          <a>
            <li className="upnav-item">
              <i className="far fa-question-circle"></i>
            </li>
          </a>
          <a>
            <li className="upnav-item">
              <i className="far fa-bell"></i>
            </li>
          </a>
        </ul>
      </div>
    </>
  );
}
