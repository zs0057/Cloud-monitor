import "./App.css";
import MainPage from "./Components/MainPage";
import SideNav from "./Components/SideNav.js";
import UpNav from "./Components/UpNav.js";

function App() {
  return (
    <>
      <div className="flex-container">
        <SideNav />
        <div className="container-box">
          <UpNav />
          <MainPage />
        </div>
      </div>
    </>
  );
}

export default App;
