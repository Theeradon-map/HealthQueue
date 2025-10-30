import React, { useEffect, useState, forwardRef, useContext } from "react";
import DatePicker from "../Shared/DatePickerTh";
import { MdOutlineClear } from "react-icons/md";
import PopupModal from "./PopupModal";
import { Badge, Button } from "react-bootstrap";
import DataContext from "../../Context/DataContext";
const DoctorFilter = ({
  selectedHospital,
  selectedSpecialty,
  selectedDate,
}) => {
  const [localDate, setLocalDate] = useState(selectedDate || null);
  const { specialties, hospitals } = useContext(DataContext);
  useEffect(() => {
    setLocalDate(selectedDate || null);
  }, [selectedDate]);

  const DateButton = forwardRef(({ value, onClick, className }, ref) => (
    <button
      type="button"
      className={
        (className || "") +
        " btn border-1 border-navy text-navy rounded fs-6 mt-2 p-2 d-flex align-items-center justify-content-center"
      }
      onClick={onClick}
      ref={ref}
      style={{ minWidth: "160px" }}
    >
      {value || "เลือกวันที่"}
    </button>
  ));

  useEffect(() => {
    console.log("Selected Specialty in DoctorFilter:", selectedSpecialty);
    console.log("Selected Hospital in DoctorFilter:", selectedHospital);
    console.log("Selected Date in DoctorFilter:", selectedDate);
  }, [selectedSpecialty, selectedHospital, selectedDate]);

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
      <div className="d-flex gap-4 align-items-center">
        <Button className="bg-navy border-0 text-white rounded fs-6 mt-2 p-2 align-items-center">
          {selectedHospital || "โรงพยาบาลทั้งหมด"}
        </Button>
        <Button className="bg-navy border-0 text-white rounded fs-6 mt-2 p-2 align-items-center">
          {selectedSpecialty || "ความชำนาญแพทย์ทั้งหมด"}
        </Button>
        <DatePicker
          selected={localDate}
          onChange={(date) => setLocalDate(date)}
          dateFormat="d MMM yyyy"
          customInput={<DateButton className="example-custom-input" />}
          minDate={new Date()}
        />
        <button
          type="button"
          className="btn btn-danger h-fit fw-bold rounded mt-2 align-items-center"
          onClick={() => setLocalDate(null)}
          aria-label="ล้างวันที่"
        >
          <MdOutlineClear />
        </button>
      </div>
    </>
  );
};
export default DoctorFilter;
