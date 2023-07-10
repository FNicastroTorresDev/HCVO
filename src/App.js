import {  Navigate, Route, Routes as Switch } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage/LoginPage';
import MedicalFileView from './pages/MedicalFileView/MedicalFileView';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import Error404Page from './pages/Error404Page/Error404Page';
import AdminOwner from './pages/AdminOwner/AdminOwner';

function App() {
  const [ isLogged, SetIsLogged ] = useState(false) 

  return (
    <>
      <Navbar isLogged={isLogged} />
      <Switch>

        <Route index element={<Navigate to='/home' />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/*' element={<Error404Page />} />
        <Route element={<ProtectedRoute setIsLogged={SetIsLogged} />}>
          <Route path='/home' element={<Home />} />
          <Route path='/medical-file/:petId' element={<MedicalFileView />} />
          <Route path='/admin-owner' element={<AdminOwner />} />
        </Route>

      </Switch>
      <Footer />
    </>
  );
}

export default App;
