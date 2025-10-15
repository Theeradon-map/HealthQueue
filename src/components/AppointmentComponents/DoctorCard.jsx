import React, { useContext } from "react";
import { DataContext } from "../../Context/DataContext";

const DoctorCard = ({ doctor }) => {
  const { specialties = [] } = useContext(DataContext) || {};
  const spec = specialties.find((s) => s.id === doctor.specialization);
  const specName = spec ? spec.name : "";

  return (
    <div
      className="card mt-2 shadow"
      key={doctor.doctor_id}
      style={{ width: "280px" }}
    >
      <div className="card-body" style={{ height: "250px" }} />

      <div className="bg-navy text-white p-3">
        <div className="text-center mb-3">
          <h5 className="mb-0">{doctor.doctor_name}</h5>
          <small>{doctor.specialty_name}</small>
        </div>

        <div className="d-flex gap-2 justify-content-center">
          <button className="btn btn-lg bg-white text-dark w-50 fs-6">
            นัดหมาย
          </button>

          <button className="btn btn-lg bg-white text-dark w-50 fs-6">
            รายละเอียด
          </button>
        </div>
      </div>
    </div>
  );
};
export default DoctorCard;
