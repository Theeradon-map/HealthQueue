import React, { useEffect } from "react";

const DoctorFilter = ({ selectedHospital, selectedSpecialty }) => {
  useEffect(() => {
    console.log("Selected Specialty in DoctorFilter:", selectedSpecialty);
    console.log("Selected Hospital in DoctorFilter:", selectedHospital);
  }, [selectedSpecialty, selectedHospital]);
  return (
    <>
      <h1 className="text-navy mt-3">ค้นหาเเพทย์</h1>
      <div className="input-group shadow">
        <input
          type="text"
          className="form-control doctor-filter-input"
          placeholder="ชื่อ, ความชำนาญ, โรงพยาบาล"
        />
        <button className="btn bg-navy text-white doctor-filter-input">
          ตัวกรอง
        </button>
      </div>
      <div className="d-flex gap-4">
        <h3 className="bg-navy text-white rounded fs-6 mt-2 p-2 align-items-center">
          {selectedHospital || "โรงพยาบาลทั้งหมด"}
        </h3>
        <h3 className="bg-navy text-white rounded fs-6 mt-2 p-2 align-items-center">
          {selectedSpecialty || "ความชำนาญแพทย์ทั้งหมด"}
        </h3>
      </div>
    </>
  );
};
export default DoctorFilter;
