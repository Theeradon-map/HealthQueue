import React from "react";
import { useNavigate } from "react-router-dom";
import SampleDoctor from "../../assets/Doctors/Sample.jpg";

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();

  const handleBook = () => {
    navigate("/appointmenttime", { state: { doctor } });
  };

  const handleInfo = () => {
    navigate("/doctorinfo", { state: { doctor } });
  };

  return (
    <div
      className="card mt-2 shadow"
      key={doctor.doctor_id}
      style={{ width: "280px" }}
    >
      <img
        src={SampleDoctor}
        alt=""
        style={{
          height: "250px",
          objectFit: "cover",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      />
      <div className="card-doctor text-white p-3">
        <div className="text-center mb-3">
          <h5 className="mb-0">{doctor.doctor_name}</h5>
          <small>{doctor.specialty_name}</small>
        </div>

        <div className="d-flex gap-2 justify-content-center">
          <button
            type="button"
            className="btn btn-lg bg-white text-dark w-50 fs-6"
            value={doctor.doctor_id}
            onClick={handleBook}
          >
            นัดหมาย
          </button>

          <button
            className="btn btn-lg bg-white text-dark w-50 fs-6"
            value={doctor.doctor_id}
            onClick={handleInfo}
          >
            รายละเอียด
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
