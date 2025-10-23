import React, { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [specialties, setSpecialties] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [hospitals, setHospitals] = useState([]);
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
            specialty_name: "หัวใจ",
            specialty_id: "1",
          },
          {
            specialty_name: "มะเร็ง",
            specialty_id: "2",
          },
          {
            specialty_name: "กระดูก",
            specialty_id: "3",
          },
          {
            specialty_name: "สมอง",
            specialty_id: "4",
          },
          {
            specialty_name: "อุบัติเหตุ",
            specialty_id: "5",
          },
          {
            specialty_name: "ตรวจสุขภาพ",
            specialty_id: "6",
          },
          {
            specialty_name: "การผ่าตัด",
            specialty_id: "7",
          },
          {
            specialty_name: "ทันตกรรม",
            specialty_id: "8",
          },
          {
            specialty_name: "สุขภาพหญิง",
            specialty_id: "9",
          },
          {
            specialty_name: "สุขภาพชาย",
            specialty_id: "10",
          },
          {
            specialty_name: "สุขภาพเด็ก",
            specialty_id: "11",
          },
          {
            specialty_name: "แม่และเด็ก",
            specialty_id: "12",
          },
          {
            specialty_name: "ความงาม",
            specialty_id: "13",
          },
          {
            specialty_name: "ตา หู คอ จมูก",
            specialty_id: "14",
          },
          {
            specialty_name: "อายุรกรรม",
            specialty_id: "15",
          },
          {
            specialty_name: "ศูนย์บริการผู้ป่วยชาวต่างชาติ",
            specialty_id: "16",
          },
          {
            specialty_name: "กายภาพบำบัด",
            specialty_id: "17",
          },
          {
            specialty_name: "ระบบทางเดินอาหาร ตับและถุงน้ำดี",
            specialty_id: "18",
          },
          {
            specialty_name: "ดูแลผู้สูงอายุ",
            specialty_id: "19",
          },
          {
            specialty_name: "ปอดและระบบทางเดินหายใจ",
            specialty_id: "20",
          },
        ];
        const doctorsData = [
          {
            doctor_id: "D001",
            doctor_name: "นพ. กิตติพงศ์ วัฒนากุล",
            specialty_name: "อายุรกรรม",
          },
          {
            doctor_id: "D002",
            doctor_name: "พญ. สุทธิดา จันทรสกุล",
            specialty_name: "กุมารเวชกรรม",
          },
          {
            doctor_id: "D003",
            doctor_name: "นพ. ธนากร อัศวะวงศ์",
            specialty_name: "ศัลยกรรมทั่วไป",
          },
          {
            doctor_id: "D004",
            doctor_name: "พญ. ปราณี ภัทรวัฒน์",
            specialty_name: "สูตินรีเวช",
          },
          {
            doctor_id: "D005",
            doctor_name: "นพ. วุฒิชัย พิพัฒน์กุล",
            specialty_name: "ออร์โธปิดิกส์ (กระดูก)",
          },
          {
            doctor_id: "D006",
            doctor_name: "พญ. อมราพร นันทวัฒน์",
            specialty_name: "โรคหัวใจ",
          },
          {
            doctor_id: "D007",
            doctor_name: "นพ. ภูมิภัทร เจนจิระ",
            specialty_name: "ระบบประสาท (สมอง)",
          },
          {
            doctor_id: "D008",
            doctor_name: "พญ. มณฑิรา วีรเศรษฐ์",
            specialty_name: "ทันตกรรม",
          },
          {
            doctor_id: "D009",
            doctor_name: "นพ. ธีรศักดิ์ ชัยเจริญ",
            specialty_name: "มะเร็งวิทยา",
          },
          {
            doctor_id: "D010",
            doctor_name: "พญ. วิมลรัตน์ โชติกานนท์",
            specialty_name: "จักษุวิทยา (ตา)",
          },
        ];

        const hospitalsData = [
          {
            hospital_name: "โรงพยาบาลบำรุงราษฎร์",
            hospital_id: "1",
          },
          {
            hospital_name: "โรงพยาบาลสมิติเวช",
            hospital_id: "2",
          },
          {
            hospital_name: "โรงพยาบาลกรุงเทพ",
            hospital_id: "3",
          },
        ];

        setSpecialties(specialtiesData);
        setDoctors(doctorsData);
        setHospitals(hospitalsData);
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
    <DataContext.Provider value={{ specialties, doctors, hospitals, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
export { DataContext };
export default DataContext;
