import { useEffect } from 'react';
import { useNavigate, useLocation, Routes, Route } from 'react-router-dom';
import { getTokenStatus } from './utils/tokenUtils';

import AdminDashBoard from './screens/AdminPanel/AdminDashBoard';
import Login from './screens/Login/Login';
import UserDashBoard from './screens/UserPanel/UserDashBoard';
import RequireAuth from './components/RequireAuth';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const accessToken = localStorage.getItem("yourEyeToken");
    const user = JSON.parse(localStorage.getItem("yourEyeUser"));
    const { isExpired } = getTokenStatus(accessToken);

    // Token süresi dolmuşsa login'e yönlendir
    if (!accessToken || isExpired) {
      localStorage.clear();
      navigate("/", { replace: true });
      return;
    }

    // Yetkisi olmayan kullanıcı admin paneline gitmeye çalışırsa engelle
    const isAdmin = user?.isAdmin === true || user?.isAdmin === "True";
    if (!isAdmin && location.pathname.startsWith("/admin")) {
      navigate("/user", { replace: true }); // bulunduğu yere döndür
    }

    if (isAdmin && location.pathname.startsWith("/user")) {
      navigate("/admin", { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/admin/*"
        element={
          <RequireAuth>
            <AdminDashBoard />
          </RequireAuth>
        } />

      <Route
        path="/user/*"
        element={
          <RequireAuth>
            <UserDashBoard />
          </RequireAuth>
        }/>

      

    </Routes>
  );
}

export default App;
