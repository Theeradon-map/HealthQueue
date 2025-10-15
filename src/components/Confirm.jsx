import React from "react";

const Confirm = () => {
  return (
    <>
      <div className="text-center mb-4 pb-4" style={{ marginTop: "150px" }}>
        <h1 className="m-auto text-navy">จองคิวตรวจ</h1>
        <div
          className="align-content-center m-auto"
          style={{
            height: "4px",
            width: "205px",
            backgroundImage:
              "linear-gradient(to right, #002D73, #386FAA, #8DD3FF, #8DD3FF)",
            margin: "20px auto 40px auto",
          }}
        />
      </div>

      <div
        className="m-auto d-flex flex-column shadow rounded p-4 bg-softgray"
        style={{
          
          width: "900px", 
          height: "650px",
        }}
      >
        <div className="d-flex w-100 flex-grow-1 mb-4">
          <div className="me-4" style={{ flexBasis: "60%" }}>
            <p className="text-dark fw-bold mb-3" style={{ fontSize: "24px" }}>
              ข้อมูลแพทย์
            </p>

            <div className="bg-white text-black rounded fs-6 p-2 mb-3 border-0 shadow">
              โรงพยาบาล :
            </div>

            <div className="bg-white text-black rounded fs-6 p-2 mb-5 border-0 shadow">
              ชื่อแพทย์ :
            </div>

            <p className="text-dark fw-bold mb-3" style={{ fontSize: "24px" }}>
              ข้อมูลผู้ป่วย
            </p>

            <div className="bg-white text-black rounded fs-6 p-2 mb-3 border-0 shadow">
              ชื่อ-นามสกุล :
            </div>

            <div className="bg-white text-black rounded fs-6 p-2 mb-3 border-0 shadow">
              วัน-เวลา :
            </div>

            <div className="bg-white text-black rounded fs-6 p-2 mb-3 border-0 shadow">
              อาการและปัญหาสุขภาพ :
            </div>

            <div className="bg-white text-black rounded fs-6 p-2 mb-3 border-0 shadow">
              เบอร์ติดต่อ :
            </div>
          </div>

          <div
            className="d-flex justify-content-end align-items-start"
            style={{ flexBasis: "40%" }}
          >
            <div
              className="card shadow"
              style={{
                width: "240px",
                height: "auto",
                borderRadius: "5px",
                marginTop: "55px",
              }}
            >
              <div
                className="card-body"
                style={{
                  height: "250px",
                  backgroundColor: "#ffffff",
                  padding: 0,
                }}
              ></div>

              <div
                className="p-3 text-white bg-navy"
                style={{
                  borderBottomLeftRadius: "5px",
                  borderBottomRightRadius: "5px",
                }}
              >
                <div className="text-center mb-3">
                  <h5 className="mb-0 fs-6 fw-bold">นพ. หงสาวดี แซ่ลี</h5>
                  <small className="fw-light" style={{ fontSize: "0.85rem" }}>
                    รักษาอาการทางใจ
                  </small>
                </div>

                <div className="d-flex justify-content-center">
                  <button
                    className="btn bg-white text-dark w-75 fs-6"
                    style={{
                      borderRadius: "5px",
                      height: "40px",
                      padding: "0.5rem 1rem",
                    }}
                  >
                    รายละเอียด
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between mt-auto">
          <button
            className="d-flex align-items-center justify-content-center shadow-sm border text-navy border-navy"
            style={{
              width: "125px",
              height: "57px",
              backgroundColor: "#FFFFFF",
              borderRadius: "5px",
              padding: "10px",
              fontSize: "18px",
              gap: "8px",
            }}
          >
            <i className="bi bi-chevron-left" style={{ fontSize: "1rem" }}></i>
            เริ่มใหม่
          </button>

          <button
            className="d-flex align-items-center justify-content-center border-0 shadow-sm bg-navy"
            style={{
              width: "125px",
              height: "57px",
              color: "#ffffff",
              borderRadius: "5px",
              padding: "10px",
              fontSize: "18px",
              gap: "8px",
            }}
          >
            ยืนยัน
            <i className="bi bi-chevron-right" style={{ fontSize: "1rem" }}></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Confirm;