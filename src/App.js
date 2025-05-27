import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/Dashboard/DashboardMainContent';
import AddAppointment from './components/AddAppointment';
import AddPatient from './components/AddPatient';
import CreateReport from './components/CreateReport';
// Import new components
import History from './components/History';
import Calendar from './components/Calendar';
import Appointments from './components/Appointments';
import Statistics from './components/Statistics';
import Chat from './components/Chat';
import Support from './components/Support';
import Setting from './components/Setting';
import './styles/App.css';

const AppLayout = ({ children }) => {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content-area">
          {children}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={
        <AppLayout>
          <DashboardMainContent />
        </AppLayout>
      } />
      <Route path="/add-appointment" element={
        <AppLayout>
          <AddAppointment />
        </AppLayout>
      } />
      <Route path="/add-patient" element={
        <AppLayout>
          <AddPatient />
        </AppLayout>
      } />
      <Route path="/create-report" element={
        <AppLayout>
          <CreateReport />
        </AppLayout>
      } />
      {/* New Routes */}
      <Route path="/history" element={
        <AppLayout>
          <History />
        </AppLayout>
      } />
      <Route path="/calendar" element={
        <AppLayout>
          <Calendar />
        </AppLayout>
      } />
      <Route path="/appointments" element={
        <AppLayout>
          <Appointments />
        </AppLayout>
      } />
      <Route path="/statistics" element={
        <AppLayout>
          <Statistics />
        </AppLayout>
      } />
      <Route path="/chat" element={
        <AppLayout>
          <Chat />
        </AppLayout>
      } />
      <Route path="/support" element={
        <AppLayout>
          <Support />
        </AppLayout>
      } />
      <Route path="/setting" element={
        <AppLayout>
          <Setting />
        </AppLayout>
      } />
    </Routes>
  );
};

export default App;