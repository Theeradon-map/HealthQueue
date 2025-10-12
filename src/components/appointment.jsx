import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

const Appointment = () => {
  const [hospitalOption, sethospitalOption] = useState("");

  useEffect(() => {
    console.log("hospital : ", hospitalOption);
  }, [hospitalOption]);

  const [doctorOption, setdoctorOption] = useState("");

  useEffect(() => {
    console.log("doctor : ", doctorOption);
  }, [doctorOption]);

  return (
    <>
      <div 
      className="text-center justify-center  align-items-center mb-4 pb-4"
      style={{
        marginTop: "150px",
      }}
      >
        <h1 className="m-auto text-navy">จองคิวตรวจ</h1>
        <div
          className="align-content-center m-auto"
          style={{
            height: "4px",
            width: "205px",
            backgroundImage:
              "linear-gradient(to right, #002D73, #386FAA, #8DD3FF, #8DD3FF)",
            margin: "80px 60px",
          }}
        />
      </div>

      <div
        className="m-auto d-flex flex-column p-4 justify-center  shadow rounded bg-softgray"
        style={{ width: "fit-content" }}
      >
        <p className="text-gray fw-bold">เลือกโรงพยาบาล</p>
        <Form className="d-flex flex-row gap-5 pb-4">
          <Form.Group className="radio-btn">
            <Form.Check.Input
              type="radio"
              id="Hospital-1"
              name="hospital"
              value="self"
              checked={hospitalOption === "self"}
              onChange={(e) => sethospitalOption(e.target.value)}
              style={{ width: "24px", height: "24px" }}
            />
            <Form.Check.Label htmlFor="Hospital-1" className="text-gray">
              เลือกโรงพยาบาลเอง
            </Form.Check.Label>
          </Form.Group>

          {/* btn2 */}
          <Form.Group className="radio-btn">
            <Form.Check.Input
              type="radio"
              id="Hospital-2"
              name="hospital"
              value="auto"
              checked={hospitalOption === "auto"}
              onChange={(e) => sethospitalOption(e.target.value)}
              style={{ width: "24px", height: "24px" }}
            />
            <Form.Check.Label htmlFor="Hospital-2" className="text-gray">
              ระบบเลือกให้โดยอัตโนมัติ
            </Form.Check.Label>
          </Form.Group>
        </Form>

        <div>
          <p className="text-gray fw-bold">เลือกแพทย์</p>
          <Form className="d-flex flex-row gap-5 pb-4">
            <Form.Group className="radio-btn">
              <Form.Check.Input
                type="radio"
                id="Hospital-3"
                name="hospital"
                value="self"
                checked={doctorOption === "self"}
                onChange={(e) => setdoctorOption(e.target.value)}
                style={{ width: "24px", height: "24px" }}
              />
              <Form.Check.Label htmlFor="Doctor-1" className="text-gray">
                เลือกแพทย์เอง
              </Form.Check.Label>
            </Form.Group>

            <Form.Group className="radio-btn">
              <Form.Check.Input
                type="radio"
                id="Hospital-4"
                name="hospital"
                value="auto"
                checked={doctorOption === "auto"}
                onChange={(e) => setdoctorOption(e.target.value)}
                style={{ width: "24px", height: "24px" }}
              />
              <Form.Check.Label htmlFor="Doctor-1" className="text-gray">
                ระบบเลือกให้โดยอัตโนมัติ
              </Form.Check.Label>
            </Form.Group>
          </Form>
        </div>

        <div className="d-flex flex justify-content-between mt-5">
          <button
            className="d-flex align-items-center justify-content-center border-0 shadow-sm "
            style={{
              width:"125px",
              height:"57px",
              color: "#002D73",
              backgroundColor: "#FFFFFF",
              borderRadius: "5px",
              padding: "10px",
              fontSize: "18px",
              gap: "10px",
            }}
          >
            <i className="bi bi-chevron-left"></i>
            เริ่มใหม่
          </button>
          <button
            className="d-flex align-items-center justify-content-center border-0 shadow-sm"
            style={{
              width:"125px",
              height:"57px",
              color: "#ffffff",
              background: "#002D73",
              borderRadius: "5px",
              padding: "10px",
              fontSize: "18px",
              gap: "10px",
            }}
          >
            <i className="bi bi-chevron-right"></i>
            ต่อไป
          </button>
        </div>
      </div>
    </>
  );
};

export default Appointment;
