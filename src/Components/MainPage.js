import axios from "axios";
import Card from "./Card.js";

export default function MainPage() {
  return (
    <>
      <div className="main-header">
        <h4 className="header-name">Dashboard</h4>
        <div className="header-btn-wrap">
          <button
            className="btn header-btn"
            onClick={() => {
              axios
                .get("http://192.168.45.42:5001")
                .then((data) => {
                  console.log(data.data);
                })
                .catch(() => {
                  console.log("실패함");
                });
            }}
          >
            <i className="fas fa-sync-alt"></i>
            새로고침
          </button>
        </div>
      </div>
      <div className="main-body">
        <div className="main-box-wrap">
          <div className="mb-30 col-xl-4 col-6">
            <div className="main-box">
              <div className="box-header-wrap">
                <div className="box-header ">Wrk</div>
                <div className="box-tool">Latency</div>
              </div>
              <div className="box-body">
                <Card></Card>
              </div>
            </div>
          </div>

          <div className="mb-30 col-xl-4 col-6">
            <div className="main-box">
              <div className="box-header-wrap">
                <div className="box-header ">Wrk</div>
                <div className="box-tool">Latency</div>
              </div>
              <div className="box-body">
                <Card></Card>
              </div>
            </div>
          </div>
          <div className="mb-30 col-xl-4 col-6">
            <div className="main-box">
              <div className="box-header-wrap">
                <div className="box-header ">Wrk</div>
                <div className="box-tool">Latency</div>
              </div>
              <div className="box-body">
                <Card></Card>
              </div>
            </div>
          </div>
          <div className="mb-30 col-xl-4 col-6">
            <div className="main-box">
              <div className="box-header-wrap">
                <div className="box-header ">Wrk</div>
                <div className="box-tool">Latency</div>
              </div>
              <div className="box-body">
                <Card></Card>
              </div>
            </div>
          </div>
          <div className="mb-30 col-xl-4 col-6">
            <div className="main-box">
              <div className="box-header-wrap">
                <div className="box-header ">Wrk</div>
                <div className="box-tool">Latency</div>
              </div>
              <div className="box-body">
                <Card></Card>
              </div>
            </div>
          </div>
          <div className="mb-30 col-xl-4 col-6">
            <div className="main-box">
              <div className="box-header-wrap">
                <div className="box-header ">Wrk</div>
                <div className="box-tool">Latency</div>
              </div>
              <div className="box-body">
                <Card></Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-footer"></div>
    </>
  );
}
