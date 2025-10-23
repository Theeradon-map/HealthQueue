import React, { useState, useEffect } from "react";
import { Form, Modal, Button } from "react-bootstrap";

import AppointmentHeader from "../../components/AppointmentComponents/AppointmentHeader";
import FooterButton from "../../components/AppointmentComponents/FooterButton";
import RadioChoice from "../../components/AppointmentComponents/RadioChoice";
import Stepper from "../../components/Stepper/Stepper";

const Appointment = () => {
  const [hospitalOption, sethospitalOption] = useState("");
  const [doctorOption, setdoctorOption] = useState("");
  const [show, setShow] = useState(true);

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
        labelNext={"ต่อไป"}
        labelBack={"เริ่มใหม่"}
        gotoLocation={"appointmenttime"}
        backtoLocation="/"
      />

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShow(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Appointment;
