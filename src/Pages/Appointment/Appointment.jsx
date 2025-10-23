import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import AppointmentHeader from "../../components/AppointmentComponents/AppointmentHeader";
import FooterButton from "../../components/AppointmentComponents/FooterButton";
import RadioChoice from "../../components/AppointmentComponents/RadioChoice";
import Stepper from "../../components/Stepper/Stepper";

const Appointment = () => {
  const [hospitalOption, sethospitalOption] = useState("");
  const [doctorOption, setdoctorOption] = useState("");

  return (
    <>
      <AppointmentHeader />
      <div
        className="d-flex justify-content-center mb-5"
        style={{ marginRight: "11rem" }}
      >
        <Stepper Step={1} />
        <div className="AppointmentBackground">
          <RadioChoice
            label={"เลือกโรงพยาบาล"}
            name={"hospital"}
            value={hospitalOption}
            onChange={sethospitalOption}
          />
          <div>
            <RadioChoice
              label={"เลือกแพทย์"}
              name={"doctor"}
              value={doctorOption}
              onChange={setdoctorOption}
            />
          </div>
        </div>
      </div>
      <FooterButton
        gotoLocation={"appointmenttime"}
        backtoLocation="/"
      />
    </>
  );
};

export default Appointment;
