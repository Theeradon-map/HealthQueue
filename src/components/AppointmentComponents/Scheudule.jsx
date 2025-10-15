const Schedule = ({ schedule, selectedTime, setSelectedTime }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
      {schedule.map((day) => (
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
            {day.times.map((t) => (
              <div
                key={t}
                className={`border rounded text-center py-1 my-1 ${
                  selectedTime === t ? "bg-primary text-white" : "bg-light"
                }`}
                style={{
                  cursor: "pointer",
                  width: "103px",
                  height: "40px",
                  fontSize: "15px",
                }}
                onClick={() => setSelectedTime(t)}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Schedule;
