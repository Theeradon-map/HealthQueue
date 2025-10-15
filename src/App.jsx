import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./Context/DataContext";
import Calendar from "./components/AppointmentTime";
import Doctor from "./components/Doctor";
import Appointment from "./components/appointment";
import NavigateBar from "./components/NavigateBar";
import AppointmentTime from "./components/AppointmentTime";
import PatientInformation from "./components/PatientInformation";

function App() {
  return (
    <DataProvider>
      <Router>
        <NavigateBar />
        <Routes>
          <Route path="/calendar" element={<AppointmentTime />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/patientinfo" element={<PatientInformation />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
