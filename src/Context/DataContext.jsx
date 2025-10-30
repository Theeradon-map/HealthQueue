import React, { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [specialties, setSpecialties] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [doctorsSchedule, setDoctorsSchedule] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        // const [specialtiesData, doctorsData, hospitalsData] = await Promise.all(
        //   [
        //     fetch(
        //       "https://api.mockfly.dev/mocks/11c913fd-7c34-428e-bf17-5fddcecbc0b4/Specialties"
        //     ),
        //     fetch(
        //       "https://api.mockfly.dev/mocks/11c913fd-7c34-428e-bf17-5fddcecbc0b4/Doctors"
        //     ),
        //     fetch(
        //       "https://api.mockfly.dev/mocks/11c913fd-7c34-428e-bf17-5fddcecbc0b4/Hospitals"
        //     ),
        //   ]
        // );

        const specialtiesData = [
          {
            specialty_name: "โรคหัวใจ",
            specialty_id: "S001",
          },
          {
            specialty_name: "มะเร็งวิทยา",
            specialty_id: "S002",
          },
          {
            specialty_name: "ออร์โธปิดิกส์ (กระดูก)",
            specialty_id: "S003",
          },
          {
            specialty_name: "ระบบประสาท (สมอง)",
            specialty_id: "S004",
          },
          {
            specialty_name: "อุบัติเหตุ",
            specialty_id: "S005",
          },
          {
            specialty_name: "ตรวจสุขภาพ",
            specialty_id: "S006",
          },
          {
            specialty_name: "ศัลยกรรมทั่วไป",
            specialty_id: "S007",
          },
          {
            specialty_name: "ทันตกรรม",
            specialty_id: "S008",
          },
          {
            specialty_name: "สูตินรีเวช",
            specialty_id: "S009",
          },
          {
            specialty_name: "อายุรกรรม",
            specialty_id: "S010",
          },
          {
            specialty_name: "กุมารเวชกรรม",
            specialty_id: "S011",
          },
          {
            specialty_name: "จักษุวิทยา (ตา)",
            specialty_id: "S012",
          },
          {
            specialty_name: "ความงาม",
            specialty_id: "S013",
          },
          {
            specialty_name: "โสต ศอ นาสิก (ตา หู คอ จมูก)",
            specialty_id: "S014",
          },
          {
            specialty_name: "ศูนย์บริการผู้ป่วยชาวต่างชาติ",
            specialty_id: "S015",
          },
          {
            specialty_name: "กายภาพบำบัด",
            specialty_id: "S016",
          },
          {
            specialty_name: "ระบบทางเดินอาหาร ตับและถุงน้ำดี",
            specialty_id: "S017",
          },
          {
            specialty_name: "ดูแลผู้สูงอายุ",
            specialty_id: "S018",
          },
          {
            specialty_name: "ปอดและระบบทางเดินหายใจ",
            specialty_id: "S019",
          },
        ];

        const doctorsData = [
          {
            doctor_id: "D001",
            doctor_name: "นพ. กิตติพงศ์ วัฒนากุล",
            specialty_id: "S010",
            hospital_id: "H001",
          },
          {
            doctor_id: "D002",
            doctor_name: "พญ. สุทธิดา จันทรสกุล",
            specialty_id: "S011",
            hospital_id: "H002",
          },
          {
            doctor_id: "D003",
            doctor_name: "นพ. ธนากร อัศวะวงศ์",
            specialty_id: "S007",
            hospital_id: "H003",
          },
          {
            doctor_id: "D004",
            doctor_name: "พญ. ปราณี ภัทรวัฒน์",
            specialty_id: "S009",
            hospital_id: "H001",
          },
          {
            doctor_id: "D005",
            doctor_name: "นพ. วุฒิชัย พิพัฒน์กุล",
            specialty_id: "S003",
            hospital_id: "H002",
          },
          {
            doctor_id: "D006",
            doctor_name: "พญ. อมราพร นันทวัฒน์",
            specialty_id: "S001",
            hospital_id: "H003",
          },
          {
            doctor_id: "D007",
            doctor_name: "นพ. ภูมิภัทร เจนจิระ",
            specialty_id: "S004",
            hospital_id: "H001",
          },
          {
            doctor_id: "D008",
            doctor_name: "พญ. มณฑิรา วีรเศรษฐ์",
            specialty_id: "S008",
            hospital_id: "H002",
          },
          {
            doctor_id: "D009",
            doctor_name: "นพ. ธีรศักดิ์ ชัยเจริญ",
            specialty_id: "S002",
            hospital_id: "H003",
          },
          {
            doctor_id: "D010",
            doctor_name: "พญ. วิมลรัตน์ โชติกานนท์",
            specialty_id: "S012",
            hospital_id: "H001",
          },
        ];

        const hospitalsData = [
          {
            hospital_name: "โรงพยาบาลบำรุงราษฎร์",
            hospital_id: "H001",
          },
          {
            hospital_name: "โรงพยาบาลสมิติเวช",
            hospital_id: "H002",
          },
          {
            hospital_name: "โรงพยาบาลกรุงเทพ",
            hospital_id: "H003",
          },
        ];

        const DoctorsScheduleData = [
          {
            doctor_id: "D001",
            schedule: [
              {
                day: "เสาร์",
                date: "25 ต.ค. 68",
                times: ["09:00-12:00", "13:00-16:00"],
              },
              {
                day: "อาทิตย์",
                date: "26 ต.ค. 68",
                times: ["09:00-12:00", "13:00-16:00"],
              },
              {
                day: "จันทร์",
                date: "27 ต.ค. 68",
                times: ["08:30-11:30", "13:00-15:30"],
              },
              {
                day: "อังคาร",
                date: "28 ต.ค. 68",
                times: ["10:00-12:00", "14:00-17:00"],
              },
              { day: "พฤหัสบดี", date: "30 ต.ค. 68", times: ["09:00-12:00"] },
              { day: "ศุกร์", date: "31 ต.ค. 68", times: ["09:00-12:00"] },
              { day: "เสาร์", date: "1 พ.ย. 68", times: ["09:00-12:00"] },
            ],
          },
        ];

        const formattedDoctorsData = doctorsData.map((doctor) => {
          const specialty = specialtiesData.find(
            (spec) => spec.specialty_id === doctor.specialty_id
          );
          const hospital = hospitalsData.find(
            (hosp) => hosp.hospital_id === doctor.hospital_id
          );
          return {
            ...doctor,
            specialty_name: specialty ? specialty.specialty_name : "",
            hospital_name: hospital ? hospital.hospital_name : "",
          };
        });

        setDoctors(formattedDoctorsData);
        setSpecialties(specialtiesData);
        setHospitals(hospitalsData);
        setDoctorsSchedule(DoctorsScheduleData);
        setError(null);
      } catch (err) {
        console.warn("Error fetching data:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        specialties,
        doctors,
        hospitals,
        doctorsSchedule,
        loading,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
export { DataContext };
export default DataContext;
