import React, { useState } from "react";

import { Form, Container, Row, Col } from "react-bootstrap";
import Stepper from "../../components/Stepper/Stepper";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import th from "date-fns/locale/th";
import FooterButton from "../../components/AppointmentComponents/FooterButton";
import AppointmentHeader from "../../components/AppointmentComponents/AppointmentHeader";
import Schedule from "../../components/AppointmentComponents/Scheudule";

registerLocale("th", th);

const Doctorinfo = () => {
  const [selectedTime, setSelectedTime] = useState(new Date());
  const schedule = [
    {
      day: "อาทิตย์",
      date: "5 ต.ค.",
      times: ["9.00 - 12.00", "13.00 - 16.00"],
    },
    {
      day: "จันทร์",
      date: "6 ต.ค.",
      times: ["10.00 - 12.00", "13.00 - 14.00"],
    },
    { day: "อังคาร", date: "7 ต.ค.", times: ["9.00 - 12.00"] },
    { day: "พุธ", date: "8 ต.ค.", times: ["13.00 - 16.00"] },
    {
      day: "พฤหัสบดี",
      date: "9 ต.ค.",
      times: ["11.00 - 12.00", "13.00 - 15.00"],
    },
  ];

  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col
            md={6}
            className="border p-4 text-center shadow"
            style={{
              backgroundColor: "#002B5B",
              color: "white",
              height: "350px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src="./Pond.jpg"
                alt="นพ.หงสาวดี แซ่ลี"
                className="border rounded-circle border-3 border-white shadow-sm"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
              <p className="mt-3 fs-5 fw-semibold">นพ.หงสาวดี แซ่ลี</p>
            </div>
          </Col>

          <Col
            md={6}
            className="border p-3 text-center shadow d-flex flex-column justify-content-center"
            style={{ height: "350px" }}
          >
            <div className="text-navy text-start">
              <h4>สาขาเฉพาะทาง : รักษาหัวใจ</h4>
              <h4>โรงพยาบาล : กรุงศรี</h4>
              <h4>ประสบการณ์ทำงาน : 10 ปี</h4>
              <h4>ID : D001</h4>
            </div>
          </Col>
        </Row>
      </Container>

      <div
        className="border rounded-4 shadow p-3 mt-3 mx-auto"
        style={{
          width: "1323px",
          height: "130px",
          backgroundColor: "white",
        }}
      >
        <h3 className="text-navy mb-3">การศึกษา</h3>
        <span className="text-navy fs-5 mb-0">2540 </span>
        <span className="text-navy fs-5 mb-0 px-4">ทันตแพทย์</span>
        <span className="text-navy fs-5 mb-0 px-4">มหาวิทยาลัยกรุงศรี</span>
      </div>

      <Container className="mt-3">
        <Row className="g-4">
          <Col
            md={6}
            className="border rounded-4 p-3 text-center shadow bg-white d-flex justify-content-center align-items-center gap-4"
          >
            <span className="fw-semibold text-navy fs-4">
              คะแนนรีวิวจากผู้ป่วย
            </span>
            <span style={{ color: "gold", fontSize: "1.3rem" }}>
              ⭐⭐⭐⭐⭐
            </span>
            <span className="text-secondary fw-semibold">(5/5)</span>
          </Col>

          <Col
            md={6}
            className="border rounded-4 p-3 text-center shadow bg-white d-flex justify-content-center align-items-center gap-2"
          >
            <span className="fw-semibold text-navy fs-4">
              จำนวนรีวิวทั้งหมด
            </span>
            <span className="fw-semibold text-navy fs-4">108 คน</span>
            <a
              href="#"
              className="text-secondary text-decoration-none small d-flex align-items-center"
            >
              ดูเพิ่มเติม <i className="bi bi-chevron-right ms-1"></i>
            </a>
          </Col>
        </Row>
      </Container>
     <div>
  <h3 className="text-navy text-center mt-5" style={{ marginRight: "35%" }}>
    ตารางเวลาของแพทย์
  </h3>
</div>

      <div
        className="d-flex justify-content-center mb-5 "
        style={{ marginRight: "11rem" }}
      >
        {" "}
        <div className="AppointmentBackground">
          <Schedule schedule={schedule} />
        </div>
      </div>
    </div>
  );
};

export default Doctorinfo;
