import React, { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext(null);

// const specialties = [
//   { id: "S0001", name: "รักษาอาการทางใจ" },
//   { id: "S0002", name: "โรคหัวใจและหลอดเลือด" },
// ];

// const hospitals = [
//   { id: "H0001", name: "โรงพยาบาลเทพธารินทร์" },
//   { id: "H0002", name: "โรงพยาบาลกรุงเทพ" },
//   { id: "H0003", name: "โรงพยาบาลสมิติเวช" },
// ];

// const doctors = [
//   {
//     id: "D0001",
//     name: "นพ หงสาวดี แซ่ลี่",
//     specialization: "S0001",
//     hospital: "H0001",
//   },
//   {
//     id: "D0002",
//     name: "นพ สมชาย ใจดี",
//     specialization: "S0002",
//     hospital: "H0002",
//   },
// ];

export const DataProvider = ({ children }) => {
  const [specialties, setSpecialties] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch(
        "https://api.mockfly.dev/mocks/11c913fd-7c34-428e-bf17-5fddcecbc0b4/Specialties"
      ).then((r) => r.json()),
      fetch(
        "https://api.mockfly.dev/mocks/11c913fd-7c34-428e-bf17-5fddcecbc0b4/Doctors"
      ).then((r) => r.json()),
      fetch(
        "https://api.mockfly.dev/mocks/11c913fd-7c34-428e-bf17-5fddcecbc0b4/Hospitals"
      ).then((r) => r.json()),
    ])
      .then(([specialtiesData, doctorsData, hospitalsData]) => {
        setSpecialties(specialtiesData);
        setDoctors(doctorsData);
        setHospitals(hospitalsData);
        setError(null);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <DataContext.Provider
      value={{ specialties, doctors, hospitals, loading, error }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;

export const useData = () => useContext(DataContext);

export { DataContext };
