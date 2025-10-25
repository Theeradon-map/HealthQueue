const Schedule = ({
  schedule,
  selectedDate,
  selectedTime,
  setSelectedTime,
}) => {
  const filteredSchedule = (schedule || []).filter((day) => {
    const monthMap = {
      "ม.ค.": 0,
      "ก.พ.": 1,
      "มี.ค.": 2,
      "เม.ย.": 3,
      "พ.ค.": 4,
      "มิ.ย.": 5,
      "ก.ค.": 6,
      "ส.ค.": 7,
      "ก.ย.": 8,
      "ต.ค.": 9,
      "พ.ย.": 10,
      "ธ.ค.": 11,
    };

    const dateParts = day.date.split(" ");
    if (dateParts.length === 3) {
      const dayNum = parseInt(dateParts[0]);
      const month = monthMap[dateParts[1]];
      const year = parseInt(dateParts[2]) + 2500;

      const scheduleDate = new Date(year - 543, month, dayNum);
      const pickedDate = selectedDate ? new Date(selectedDate) : new Date();
      pickedDate.setHours(0, 0, 0, 0);

      return scheduleDate >= pickedDate;
    }
    return true;
  });

  return (
    <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
      {filteredSchedule.length === 0 && <p>ไม่พบเวลาว่างสำหรับนัดหมาย.</p>}
      {filteredSchedule.slice(0, 5).map((day) => (
        <div
          key={day.day}
          className="d-flex flex-column align-items-center border rounded shadow-sm p-3 bg-white"
          style={{
            width: "fit-content",
            height: "230px",
            fontSize: "18px",
          }}
        >
          <div
            className="text-white rounded py-1 w-100"
            style={{ backgroundColor: "#002D73" }}
          >
            <div className="fw-bold text-center w-100">{day.day}</div>
            <div
              className="text-center w-100"
              style={{ verticalAlign: "middle" }}
            >
              {day.date}
            </div>
          </div>
          <div className="mt-2 w-100">
            {day.times.map((t) => {
              const uniqueTimeId = `${day.date}-${t}`;
              return (
                <div
                  key={t}
                  className={`time-button border rounded text-center py-1 my-1 ${
                    selectedTime === uniqueTimeId
                      ? "bg-primary text-white"
                      : "bg-light"
                  }`}
                  style={{
                    cursor: "pointer",
                    width: "103px",
                    height: "40px",
                    fontSize: "15px",
                  }}
                  onClick={() => setSelectedTime(uniqueTimeId)}
                >
                  {t}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Schedule;
