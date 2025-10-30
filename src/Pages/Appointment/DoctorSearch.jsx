import React, { useContext, useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { DataContext } from "../../Context/DataContext";
import DoctorCard from "../../components/AppointmentComponents/DoctorCard";
import DoctorFilter from "../../components/AppointmentComponents/DoctorFilter";
import { Button } from "react-bootstrap";
const DoctorSearch = () => {
  const { doctors, specialties, hospitals, loading, error } =
    useContext(DataContext);
  const location = useLocation();
  const { selectedSpecialty, selectedHospital } = location.state || {};
  const [doctorsFiltered, setDoctorsFiltered] = useState(doctors);

  return (
    <div className="container">
      <DoctorFilter
        selectedHospital={selectedHospital}
        selectedSpecialty={selectedSpecialty}
      />
      <div className="d-flex gap-4 flex-wrap justify-content-center">
        {(doctors || []).length === 0 && (
          <div className="text-center text-danger mt-5">
            ไม่ข้อมูลพบแพทย์ ❌
          </div>
        )}
        {/* {(doctorsFiltered || []).length === 0 && (
          <div className="text-center text-danger mt-5">
            ไม่ข้อมูลพบแพทย์ หรือ ไม่พบแพทย์ตามตัวกรอง ❌
          </div>
        )} */}

        {doctorsFiltered.map((doctor) => (
          <DoctorCard key={doctor.doctor_id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorSearch;
