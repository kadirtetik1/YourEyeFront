import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Login.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { jwtDecode } from 'jwt-decode';
import { apiBaseUrl } from '../../utils/api';


import robotwoman from '../../assets/ai-robot-woman.png';
import aicamera from '../../assets/ai-cam.png';
import youreyelogo from '../../assets/youreye-logo.png';
import ForgotPassword from './ForgotPassword';

const Login = () => {

  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [showForgotPassModal, setShowForgotPassModal] = useState(false);


  useEffect(() => {
    localStorage.clear(); // login sayfasına gelen kullanıcı sıfırlanır
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleForgotPass = (e) => {
    setShowForgotPassModal(true);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
  
    try {
      const response = await axios.post(`${apiBaseUrl}/login`, form);
      const { accessToken, message, isAdmin } = response.data;
  
      if (accessToken) {
        const decoded = jwtDecode(accessToken);
        localStorage.setItem('yourEyeToken', accessToken);
        localStorage.setItem('yourEyeUser', JSON.stringify(decoded));
      }
  
      toast.success(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
  
      if (isAdmin === true) {
        setTimeout(() => navigate("/admin"), 3000);
      } else if (isAdmin === false) {
        setTimeout(() => navigate("/user"), 3000);
      } else {
        toast.error(message || 'Giriş başarısız.', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        setError(message || 'Giriş başarısız.');
      }
    } catch (err) {
      const errorMessage = err.response?.data || err.message;
      toast.error(errorMessage, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      setError(errorMessage);
    }
  };


  return (
    <div className={styles.outerContainer}>

    
    <div className={styles.mainContainer}>
      {/* SOL TARAF: robotwoman */}
      <div className={styles.leftContainer}>

        <div className={styles.mainTitleContainer}>
        <div className={styles.mainTitle}>Mevcut Kameralarınızı Yapay Zeka (AI) Desteğiyle</div>
        <div className={styles.mainTitle2}>Akıllı Hale Getiriyoruz.</div>
        </div>
        

        <img src={robotwoman} alt="robot-woman" className={styles.robotWoman} />
        
      </div>
  
      {/* SAĞ TARAF: login form + aicamera */}
      <div className={styles.rightContainer}>
        <img src={aicamera} alt="ai-camera" className={styles.aiCamera} />
  
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* <h2 className={styles.title}>YourEye</h2> */}

          <div className={styles.logoContainer}>
          <img src={youreyelogo} alt="your-eye-logo" className={styles.youreyeLogo} />
          </div>
          
  
          <input
            type="text"
            name="username"
            placeholder="Kullanıcı Adı"
            onChange={handleChange}
            className={styles.input}
          />
  
          <input
            type="password"
            name="password"
            placeholder="Şifre"
            onChange={handleChange}
            className={styles.input}
          />
  
          <div className={styles.forgotPasswordLink}>
            <div
              className={styles.forgotPassButton}
              type="button"
              onClick={() => handleForgotPass()}
            >
              Şifremi Unuttum
            </div>
            <ForgotPassword
             isVisible={showForgotPassModal}
             onClose={() => setShowForgotPassModal(false)}
           />
          </div>
  
          <button type="submit" className={styles.button}>
            Giriş Yap
          </button>
  
          {/* {error && <p className={styles.error}>{error}</p>} */}
        </form>
  
        <ToastContainer />
      </div>
    </div>

    <div className={styles.bottomContainer}>

      <div className={styles.bottomTitles}>

      <div onClick={() => alert("Hakkımızda")} className={styles.bottomTitles1}>Hakkımızda</div>
      <div onClick={() => alert("Hizmetlerimiz")} className={styles.bottomTitles1}>Hizmetlerimiz</div>
      <div onClick={() => alert("İletişim")} className={styles.bottomTitles1}>İletişim</div>
      <div onClick={() => alert("Teknik Destek")} className={styles.bottomTitles1}>Teknik Destek</div>
     

      </div>

      <div className={styles.bottomTitles2}>
      © 2024 YOUREYE Tüm Hakları  Saklıdır.
      </div>
    
      
    </div>

    </div>
  );
  
};

export default Login;
