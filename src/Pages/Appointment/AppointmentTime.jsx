import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Stepper from "../../components/Stepper/Stepper";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import th from "date-fns/locale/th";
import FooterButton from "../../components/AppointmentComponents/FooterButton";
import AppointmentHeader from "../../components/AppointmentComponents/AppointmentHeader";
import Schedule from "../../components/AppointmentComponents/Scheudule";
registerLocale("th", th);

const AppointmentTime = () => {
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
    <>
      <AppointmentHeader />
      <div
        className="d-flex justify-content-center mb-5"
        style={{ marginRight: "11rem" }}
      >
        {" "}
        <Stepper Step={2} />
        <div className="AppointmentBackground">
          <div className="text-center" style={{ lineHeight: "10px" }}>
            <h2>นัดหมายแพทย์</h2>
            <p className="text-navy fs-4">นพ. หงสาวดี แซ่ลี</p>
            <div className="text-center">
              <h5 className="">วันที่ต้องการจองคิว</h5>
              <DatePicker
                selected={selectedTime ? new Date(selectedTime) : null}
                onChange={(date) => setSelectedTime(date)}
                dateFormat="d MMM yy"
                locale="th"
                className="form-control"
                minDate={new Date()}
                style={{ textAlign: "center" }}
              />
            </div>
          </div>

          <Schedule schedule={schedule} />
        </div>
      </div>
      <FooterButton gotoLocation={"patientinfo"} backtoLocation="appointment" />
    </>
  );
};

export default AppointmentTime;
