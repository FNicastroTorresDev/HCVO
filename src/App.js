import {  Navigate, Route, Routes as Switch } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage/LoginPage';
import MedicalFileView from './pages/MedicalFileView/MedicalFileView';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { useState } from 'react';

function App() {
  const [ isLogged, SetIsLogged ] = useState(false) 

  return (
    <>
      <Navbar isLogged={isLogged} />
      <Switch>

        <Route index element={<Navigate to='/home' />} />
        <Route path='/login' element={<LoginPage />} />
        <Route element={<ProtectedRoute setIsLogged={SetIsLogged} />}>
          <Route path='/home' element={<Home />} />
          <Route path='/medical-file/:petId' element={<MedicalFileView />} />
        </Route>

      </Switch>
      <Footer />
    </>
  );
}

export default App;
