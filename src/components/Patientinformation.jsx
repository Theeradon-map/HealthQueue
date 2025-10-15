import { Form } from "react-bootstrap";

const Patient = () => {
  return (
    <>
      <div
        className="text-center justify-center  align-items-center mb-4 pb-4"
        style={{
          marginTop: "150px",
        }}
      >
        <h1 className="m-auto text-navy">จองคิวตรวจ</h1>
        <div
          className="align-content-center m-auto"
          style={{
            height: "4px",
            width: "205px",
            backgroundImage:
              "linear-gradient(to right, #002D73, #386FAA, #8DD3FF, #8DD3FF)",
            margin: "80px 60px",
          }}
        />
      </div>

      <div
        className="m-auto d-flex flex-column px-4 pb-4 pt-2 justify-center  shadow rounded bg-softgray"
        style={{ width: "832px", height: "572px" }}
      >
        <p
          className="text-center text-gray fw-medium"
          style={{ fontSize: "24px" }}
        >
          ข้อมูลผู้ป่วย
        </p>

        <div
          className="col pt-3"
          style={{ paddingLeft: "90px", paddingRight: "90px" }}
        >
          <div className="row">
            <div className="col-md-4 mb-3">
              <label style={{paddingLeft: "15px"}}>ชื่อ</label>
              <input
                type="text"
                className="form-control"
                style={{ height: "45px",
                 }}
              />
            </div>

            <div className="col-md-4 mb-3">
              <label style={{paddingLeft: "15px"}}>นามสกุล</label>
              <input
                type="text"
                className="form-control"
                style={{ height: "45px" }}
              />
            </div>

            <div className="col-md-2 mb-3">
              <label style={{paddingLeft: "15px"}}>เพศ</label>
              <input
                type="text"
                className="form-control"
                style={{ height: "45px" }}
              />
            </div>

            <div className="col-md-2 mb-3">
              <label style={{paddingLeft: "15px"}}>อายุ</label>
              <input
                type="text"
                className="form-control"
                style={{ height: "45px" }}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-5 mb-3">
              <label style={{paddingLeft: "15px"}}>เบอร์ติดต่อ</label>
              <input
                type="text"
                className="form-control"
                style={{ height: "45px" }}
              />
            </div>

            <div className="col-md-7 mb-3">
              <label style={{paddingLeft: "15px"}}>E-mail</label>
              <input
                type="email"
                className="form-control"
                style={{ height: "45px" }}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12 mb-3">
              <label style={{paddingLeft: "15px"}}>อาการและปัญหาสุขภาพ</label>
              <textarea
                className="form-control"
                rows="7"
                style={{ resize: "none" }}
              ></textarea>
            </div>
          </div>
        </div>

        <div className="d-flex flex justify-content-between">
          <button
            className="d-flex align-items-center justify-content-center border-0 shadow-sm "
            style={{
              width: "125px",
              height: "57px",
              color: "#002D73",
              backgroundColor: "#FFFFFF",
              borderRadius: "5px",
              padding: "10px",
              fontSize: "18px",
              gap: "10px",
            }}
          >
            <i className="bi bi-chevron-left"></i>
            เริ่มใหม่
          </button>
          <button
            className="d-flex align-items-center justify-content-center border-0 shadow-sm"
            style={{
              width: "125px",
              height: "57px",
              color: "#ffffff",
              background: "#002D73",
              borderRadius: "5px",
              padding: "10px",
              fontSize: "18px",
              gap: "10px",
            }}
          >
            <i className="bi bi-chevron-right"></i>
            ต่อไป
          </button>
        </div>
      </div>
    </>
  );
};

export default Patient;
