import {  Navigate, Route, Routes as Switch } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage/LoginPage';
import MedicalFileView from './pages/MedicalFileView/MedicalFileView';

function App() {
  const user = true

  return (
    <Switch>

      <Route index element={<Navigate to='/home' />} />
      <Route path='/login' element={<LoginPage />} />
      <Route element={<ProtectedRoute user={user} />}>
        <Route path='/home' element={<Home />} />
        <Route path='/medical-file' element={<MedicalFileView />} />
      </Route>

    </Switch>

  );
}

export default App;
