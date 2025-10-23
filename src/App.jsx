import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider, useData } from "./Context/DataContext";
import NavigateBar from "./components/NavigateBar";
import Loading from "./components/Loading";
import AppointmentTime from "./Pages/Appointment/AppointmentTime";
import Appointment from "./Pages/Appointment/Appointment";
import Doctor from "./Pages/Appointment/Doctor";
import PatientInformation from "./Pages/Appointment/PatientInformation";
import AppointmentInfomation from "./Pages/Appointment/AppointmentInfomation";

function AppContent() {
  const { loading, error } = useData();

  if (loading) return <Loading />;
  if (error)
    return <div className="text-center text-danger mt-5">❌ {error}</div>;

  return (
    <>
      <NavigateBar />
      <Routes>
        <Route path="/Appointmenttime" element={<AppointmentTime />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/patientinfo" element={<PatientInformation />} />
        <Route path="/appointmentinfo" element={<AppointmentInfomation />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <DataProvider>
      <Router>
        <AppContent />
      </Router>
    </DataProvider>
  );
}

export default App;
