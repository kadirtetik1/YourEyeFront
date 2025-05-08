import { Navigate , useLocation  } from 'react-router-dom';
import { isTokenExpired, getTokenStatus } from '../utils/tokenUtils';

const RequireAuth = ({ children, requiredAdmin = null }) => {
  const token = localStorage.getItem('yourEyeToken');
  const user = JSON.parse(localStorage.getItem('yourEyeUser'));
  const { isExpired, minutesLeft, secondsLeft } = getTokenStatus(token);

  const location = useLocation(); // o an olduğu sayfa

  console.log(minutesLeft + " dakika " + secondsLeft + " saniye kaldı.");
  console.log(user);


  // Token yoksa ya da süresi dolduysa login'e at
  if (!token || isExpired) {
    localStorage.clear();
    return <Navigate to="/" replace />;
  }


  if (requiredAdmin !== null) {
    
    if (requiredAdmin !== user.isAdmin) {
        return <Navigate to={location.state?.from || "/"} replace />;
    }
  }

  return children;
};

export default RequireAuth;
