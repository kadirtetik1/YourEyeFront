import { jwtDecode } from 'jwt-decode';

export const isTokenExpired = (accessToken) => {
  try {
    const decoded = jwtDecode(accessToken);
    const now = Date.now() / 1000; // saniye cinsinden
    return decoded.exp < now;
  } catch (err) {
    return true; // decode edilemezse, expired gibi davran
  }
};

export const getTokenStatus = (accessToken) => {
    try {
      const decoded = jwtDecode(accessToken);
      const now = Date.now() / 1000; // saniye
      const exp = decoded.exp;
  
      const isExpired = exp < now;
      const secondsLeftTotal = Math.max(0, exp - now);

      const minutesLeft = Math.floor(secondsLeftTotal / 60);
      const secondsLeft = Math.floor(secondsLeftTotal % 60);
  
      return {
        isExpired,
        minutesLeft,
        secondsLeft: Math.floor(secondsLeft),
        decoded,
      };
    } catch (err) {
      return {
        isExpired: true,
        minutesLeft: 0,
        secondsLeft: 0,
        decoded: null,
      };
    }
  };
