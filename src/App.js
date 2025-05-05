import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashBoard from './screens/AdminPanel/AdminDashBoard';
import Dashboard from './screens/Dashboard/Dashboard';
import Login from './screens/Login/Login';
import UserDashBoard from './screens/UserPanel/UserDashBoard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/admin" element={<AdminDashBoard/>} />
        <Route path="/user" element={<UserDashBoard/>} />
        <Route path="/dash" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
