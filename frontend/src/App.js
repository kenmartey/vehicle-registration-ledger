import { Routes, Route } from "react-router-dom";
import "./App.css";
import CarDealership from "./components/dealership/CarDealership";
import VehicleRegistration from "./components/vehicleRegistration/VehicleRegistration";
import Navigation from "./routes/sidebar/Navigation.components";

function App() {
  return (
    <div className="App container">
      <div className="row">
        <div className="col-6">
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<CarDealership />} />
              <Route
                path="/vehicle-registration"
                element={<VehicleRegistration />}
              />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
