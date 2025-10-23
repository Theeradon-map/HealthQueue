import React, { useContext, useEffect } from "react";
import { DataContext } from "../../Context/DataContext";
import DoctorCard from "../../components/AppointmentComponents/DoctorCard";

const Doctor = () => {
  const { doctors } = useContext(DataContext);



  return (
    <div className="container">
      <h1 className="text-navy mt-3">ค้นหาเเพทย์</h1>
      <div className="input-group shadow ">
        <input
          type="text"
          className="form-control"
          placeholder="ชื่อ, ความชำนาญ, โรงพยาบาล"
        />
        <button className="btn bg-navy text-white ">ตัวกรอง</button>
      </div>
      <div className="d-flex gap-4">
        <h3 className="bg-navy text-white rounded fs-6 mt-2 p-2 align-items-center">
          ชื่อโรงพยาบาล
        </h3>
        <h3 className="bg-navy text-white rounded fs-6 mt-2 p-2 align-items-center">
          ความชำนาญแพทย์
        </h3>
      </div>
      <div className="d-flex gap-4 flex-wrap justify-content-center">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Doctor;
