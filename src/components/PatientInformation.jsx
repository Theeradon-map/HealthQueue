import { Form } from "react-bootstrap";
import FooterButton from "./AppointmentComponents/FooterButton";
import AppointmentHeader from "./AppointmentComponents/AppointmentHeader";
import Stepper from "./Stepper/Stepper";

const PatientInformation = () => {
  return (
    <>
      <AppointmentHeader />
      <div
        className="d-flex justify-content-center"
        style={{ marginRight: "11rem" }}
      >
        <Stepper Step={4} />
        <div className="AppointmentBackground">
          <p
            className="text-center text-gray fw-medium"
            style={{ fontSize: "24px" }}
          >
            ข้อมูลผู้ป่วย
          </p>

          <div
            className="col pt-3"
            style={{ paddingLeft: "90px", paddingRight: "90px" }}
          >
            <div className="row">
              <div className="col-md-4 mb-3">
                <label style={{ paddingLeft: "15px" }}>ชื่อ</label>
                <input
                  type="text"
                  className="form-control"
                  style={{ height: "45px" }}
                />
              </div>

              <div className="col-md-4 mb-3">
                <label style={{ paddingLeft: "15px" }}>นามสกุล</label>
                <input
                  type="text"
                  className="form-control"
                  style={{ height: "45px" }}
                />
              </div>

              <div className="col-md-2 mb-3">
                <label style={{ paddingLeft: "15px" }}>เพศ</label>
                <input
                  type="text"
                  className="form-control"
                  style={{ height: "45px" }}
                />
              </div>

              <div className="col-md-2 mb-3">
                <label style={{ paddingLeft: "15px" }}>อายุ</label>
                <input
                  type="text"
                  className="form-control"
                  style={{ height: "45px" }}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-5 mb-3">
                <label style={{ paddingLeft: "15px" }}>เบอร์ติดต่อ</label>
                <input
                  type="text"
                  className="form-control"
                  style={{ height: "45px" }}
                />
              </div>

              <div className="col-md-7 mb-3">
                <label style={{ paddingLeft: "15px" }}>E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  style={{ height: "45px" }}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12 mb-3">
                <label style={{ paddingLeft: "15px" }}>
                  อาการและปัญหาสุขภาพ
                </label>
                <textarea
                  className="form-control"
                  rows="5"
                  style={{ resize: "none" }}
                ></textarea>
              </div>
            </div>
          </div>

          <FooterButton gotoLocation={"stay"} backtoLocation="calendar" />
        </div>
      </div>
    </>
  );
};

export default PatientInformation;
