import { Routes, Route, Navigate } from 'react-router-dom';

import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Navigate to="/sign-up" />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
      </Routes>
    </main>
  );
}

export default App;
