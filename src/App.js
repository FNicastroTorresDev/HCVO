import { Route, Routes as Swtich } from 'react-router-dom';
import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage/LoginPage';
import MedicalFileView from './pages/MedicalFileView/MedicalFileView';

function App() {
  return (
    <Swtich>

      <Route path='/login' element={<LoginPage />} />
      <Route path='/medical-file' element={<MedicalFileView />} />
      <Route path='/' element={<Home />} />

    </Swtich>

  );
}

export default App;
