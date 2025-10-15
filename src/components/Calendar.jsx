import React, { useState } from "react";
import { Form } from "react-bootstrap";

const Calendar = () => {
  const [selectedTime, setSelectedTime] = useState(null);

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
    <>
      {/* ส่วนหัว */}
      <div
        className="text-center justify-center align-items-center mb-4 pb-4"
        style={{ marginTop: "150px" }}
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

      {/* กล่องนัดหมาย */}
      <div
        className="m-auto d-flex flex-column p-4 justify-center shadow rounded bg-softgray"
        style={{ width: "fit-content", backgroundColor: "#F9FAFB" }}
      >
        <div className="text-center">
          <h1>นัดหมายแพทย์</h1>
          <p className="text-navy fs-3">นพ. หงสาวดี แซ่ลี</p>
          <h5>วันที่ต้องการจองคิว</h5>
          <Form.Control
            type="text"
            value="5/10/2025"
            readOnly
            className="text-center mx-auto mt-3 border-black shadow"
            style={{ width: "203px", height: "47px", fontSize: "20px" }}
          />
        </div>

        {/* ตารางเวลา */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
          {schedule.map((day) => (
            <div
              key={day.day}
              className="d-flex flex-column align-items-center border rounded shadow-sm p-3 bg-white"
              style={{ width: "fit-content",height: "230px", fontSize: "18px" }}
            >
              <div
                className="text-white rounded py-1 w-100"
                style={{ backgroundColor: "#002D73" }}
              >
                <div className="fw-bold text-center">{day.day}</div>
                <div className="text-center">{day.date}</div>
              </div>
              <div className="mt-2 w-100">
                {day.times.map((t) => (
                  <div
                    key={t}
                    className={`border rounded text-center py-1 my-1 ${
                      selectedTime === t ? "bg-primary text-white" : "bg-light"
                    }`}
                    style={{ cursor: "pointer",width: "103px",height: "40px", fontSize: "15px" }}
                    onClick={() => setSelectedTime(t)}
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ปุ่ม */}
        <div className="d-flex justify-content-between mt-5">
          <button
            className="d-flex align-items-center justify-content-center border-0 shadow-sm"
            style={{
              width: "125px",
              height: "57px",
              color: "#002D73",
              backgroundColor: "#FFFFFF",
              borderRadius: "5px",
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
              width: "125px",
              height: "57px",
              color: "#ffffff",
              background: "#002D73",
              borderRadius: "5px",
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

export default Calendar;
