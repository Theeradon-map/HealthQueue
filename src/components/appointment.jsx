import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Stepper from "./Stepper/Stepper";
import AppointmentHeader from "./AppointmentComponents/AppointmentHeader";
import FooterButton from "./AppointmentComponents/FooterButton";
import RadioChoice from "./AppointmentComponents/RadioChoice";

const Appointment = () => {
  const [hospitalOption, sethospitalOption] = useState("");
  const [doctorOption, setdoctorOption] = useState("");

  useEffect(() => {
    console.log("hospital : ", hospitalOption);
  }, [hospitalOption]);

  useEffect(() => {
    console.log("doctor : ", doctorOption);
  }, [doctorOption]);

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
          <FooterButton
            gotoLocation={"calendar"}
            backtoLocation="appointment"
          />
        </div>
      </div>
    </>
  );
};

export default Appointment;
