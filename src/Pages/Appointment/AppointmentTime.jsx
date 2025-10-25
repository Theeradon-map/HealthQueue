import React, { use, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Form } from "react-bootstrap";
import Stepper from "../../components/Stepper/Stepper";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import th from "date-fns/locale/th";
import FooterButton from "../../components/AppointmentComponents/FooterButton";
import AppointmentHeader from "../../components/AppointmentComponents/AppointmentHeader";
import Schedule from "../../components/AppointmentComponents/Scheudule";
import { useData } from "../../Context/DataContext";
registerLocale("th", th);

const AppointmentTime = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const location = useLocation();
  const { doctor } = location.state || {};
  const { doctorsSchedule } = useData();

  useEffect(() => {
    console.log("Selected Date:", selectedDate);
  }, [selectedDate]);

  const doctorScheduleData = doctorsSchedule.find(
    (schedule) => schedule.doctor_id === doctor?.doctor_id
  );
  const schedule = doctorScheduleData?.schedule || [];

  useEffect(() => {
    console.log("Selected Time:", selectedTime);
    console.log("Picked date:", selectedDate);
  }, [selectedTime, selectedDate]);

  return (
    <>
      <AppointmentHeader />
      <div
        className="d-flex justify-content-center mb-5"
        style={{ marginRight: "11rem" }}
      >
        <Stepper Step={2} />
        <div className="AppointmentBackground">
          <div className="text-center" style={{ lineHeight: "10px" }}>
            <h2>นัดหมายแพทย์</h2>
            <p className="text-navy fs-4">
              {doctor?.doctor_name || "เลือกแพทย์จากหน้าก่อนหน้า"}
            </p>
            <div className="text-center">
              <h5 className="">ทำนัดหมายแพทย์</h5>
              <DatePicker
                selected={selectedDate ? new Date(selectedDate) : null}
                onChange={(date) => {
                  setSelectedDate(date);
                }}
                dateFormat="d MMM yy"
                locale="th"
                className="form-control"
                minDate={new Date()}
                style={{ textAlign: "center" }}
              />
            </div>
          </div>

          <Schedule
            schedule={schedule}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
          />
        </div>
      </div>
      <FooterButton
        labelBack={"กลับ"}
        labelNext={"ต่อไป"}
        gotoLocation={"patientinfo"}
        backtoLocation="appointment"
      />
    </>
  );
};

export default AppointmentTime;
