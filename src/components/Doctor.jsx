const Doctor = () => {
  return (
    <div className="container">
      <h1 className="text-navy mt-3">ค้นหาเเพทย์</h1>
      <div className="input-group shadow ">
        <input
          type="text"
          className="form-control"
          placeholder="ชื่อ, ความชำนาญ, โรงพยาบาล"
        />
        <button className="btn bg-navy text-white ">ตัวกรอง</button>
      </div>
      <div className="d-flex gap-4">
        <h3 className="bg-navy text-white rounded fs-6 mt-2 p-2 align-items-center">
          ชื่อโรงพยาบาล
        </h3>
        <h3 className="bg-navy text-white rounded fs-6 mt-2 p-2 align-items-center">
          ความชำนาญแพทย์
        </h3>
      </div>

      <div className="card mt-2 shadow" style={{ width: "280px" }}>
        <div className="card-body shadow" style={{ height: "250px" }}></div>

        <div className="bg-navy text-white p-3">
          <div className="text-center mb-3">
            <h5 className="mb-0">นพ. หงสาวดี แซ่ลี</h5>
            <small>รักษาอาการทางใจ</small>
          </div>

          <div className="d-flex gap-2 justify-content-center">
            <button className="btn btn-lg bg-white text-dark w-50 fs-6">
              นัดหมาย
            </button>

            <button className="btn btn-lg bg-white text-dark w-50 fs-6">
              รายละเอียด
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
