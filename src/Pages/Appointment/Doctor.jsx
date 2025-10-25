import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { DataContext } from "../../Context/DataContext";
import DoctorCard from "../../components/AppointmentComponents/DoctorCard";
import DoctorFilter from "../../components/AppointmentComponents/DoctorFilter";
const Doctor = () => {
  const { doctors, specialties, hospitals, loading, error } =
    useContext(DataContext);
  const location = useLocation();
  const { selectedSpecialty, selectedHospital } = location.state || {};
  const [doctorsFiltered, setDoctorsFiltered] = useState([]);

  useEffect(() => {
    const list = (doctors || []).filter((doctor) => {
      const matchesSpecialty = selectedSpecialty
        ? (doctor.specialty_name || "")
            .toLowerCase()
            .includes(selectedSpecialty.toLowerCase())
        : true;

      const matchesHospital = selectedHospital
        ? doctor.hospital_name
          ? doctor.hospital_name === selectedHospital
          : true
        : true;

      return matchesSpecialty && matchesHospital;
    });
    console.log("Filtered Doctors:", list);
    setDoctorsFiltered(list);
  }, [doctors, selectedSpecialty, selectedHospital]);

  return (
    <div className="container">
      <DoctorFilter
        selectedHospital={selectedHospital}
        selectedSpecialty={selectedSpecialty}
      />
      <div className="d-flex gap-4 flex-wrap justify-content-center">
        {(doctors || []).length === 0 && <p>ไม่ข้อมูลพบแพทย์.</p>}
        {doctorsFiltered.map((doctor) => (
          <DoctorCard key={doctor.doctor_id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Doctor;
