import React from "react";
import AppointmentHeader from "../../components/AppointmentComponents/AppointmentHeader";
import Stepper from "../../components/Stepper/Stepper";
import FooterButton from "../../components/AppointmentComponents/FooterButton";

const AppointmentInfomation = () => {
  return (
    <>
      <AppointmentHeader />
      <div
        className="d-flex justify-content-center mb-5"
        style={{ marginRight: "11rem" }}
      >
        {" "}
        <Stepper Step={4} />
        <div
          className="AppointmentBackground"
          style={{ height: "fit-content"}}
        >
          <div className="d-flex w-100 flex-grow-1">
            <div className="me-4" style={{ flexBasis: "60%" }}>
              <div className="card p-4">
                <p
                  className="text-gray fw-bold mb-2"
                  style={{ fontSize: "24px" }}
                >
                  ข้อมูลแพทย์
                </p>

                <div className="bg-white text-black rounded fs-6 p-2 mb-3 border-0 shadow">
                  โรงพยาบาล :
                </div>

                <div className="bg-white text-black rounded fs-6 p-2 mb-2 border-0 shadow">
                  ชื่อแพทย์ :
                </div>
              </div>
              <div className="card p-4 mt-1">
                <p
                  className="text-gray fw-bold mb-3"
                  style={{ fontSize: "24px" }}
                >
                  ข้อมูลผู้ป่วย
                </p>

                <div className="bg-white text-black rounded fs-6 p-2 mb-3 border-0 shadow">
                  ชื่อ-นามสกุล :
                </div>

                <div className="bg-white text-black rounded fs-6 p-2 mb-3 border-0 shadow">
                  วัน-เวลา :
                </div>

                <div className="bg-white text-black rounded fs-6 p-2 mb-3 border-0 shadow">
                  อาการและปัญหาสุขภาพ :
                </div>

                <div className="bg-white text-black rounded fs-6 p-2 mb-1 border-0 shadow">
                  เบอร์ติดต่อ :
                </div>
              </div>
            </div>

            <div className="d-flex ps-4" style={{ height: "515px" }}>
              <div className="vr"></div>
            </div>
            <div
              className="d-flex justify-content-end align-items-start"
              style={{ flexBasis: "40%" }}
            >
              {" "}
              <div
                className="card shadow"
                style={{
                  width: "250px",
                  height: "350px",
                }}
              >
                <div
                  className="card-body rounded"
                  style={{
                    height: "250px",
                    backgroundColor: "#ffffff",
                    padding: 0,
                  }}
                ></div>

                <div
                  className="p-3 text-white bg-navy"
                  style={{
                    borderBottomLeftRadius: "5px",
                    borderBottomRightRadius: "5px",
                  }}
                >
                  <div className="text-center mb-3">
                    <h5 className="mb-0 fs-6 fw-bold">นพ. หงสาวดี แซ่ลี</h5>
                    <small className="fw-light" style={{ fontSize: "0.85rem" }}>
                      รักษาอาการทางใจ
                    </small>
                  </div>

                  <div className="d-flex justify-content-center">
                    <button
                      className="btn bg-white text-dark w-75 fs-6"
                      style={{
                        borderRadius: "5px",
                        height: "40px",
                        padding: "0.5rem 1rem",
                      }}
                    >
                      รายละเอียด
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterButton backtoLocation="patientinfo" gotoLocation="appointment" />
    </>
  );
};

export default AppointmentInfomation;
