import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { createContext, useState } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddReview from './components/Dashboard/AddReview/AddReview';
import AddAService from './components/Dashboard/AddAService/AddAService';
import AddAdmin from './components/AddAdmin/AddAdmin';
import AppointmentManager from './components/Appointment/AppointmentManager/AppointmentManager';
import ServiceManager from './components/ServiceManager/ServiceManager';
import UserAppointments from './components/Appointment/UserAppointments/UserAppointments';
import MainDash from './components/Dashboard/Dashboard/MainDash';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser.email);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/dashboard/appointments">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/addReview">
            <AddReview></AddReview>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/manageAppointments">
            <AppointmentManager></AppointmentManager>
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          
          <PrivateRoute path="/dashboard/serviceManager">
            <ServiceManager></ServiceManager>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/userAppointment">
            <UserAppointments></UserAppointments>
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard">
            <MainDash></MainDash>
          </PrivateRoute>
          

          
          
          <PrivateRoute path="/dashboard/addService">
            <AddAService></AddAService>
          </PrivateRoute>

          <PrivateRoute path="/appoinments">
            <Appointment></Appointment>
          </PrivateRoute>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App
  