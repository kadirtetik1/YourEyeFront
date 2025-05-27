import React from 'react';
import PostForm from '../../../components/Base/FormFields/PostForm';
import styles from '../ComponentDash.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiBaseUrl } from '../../../utils/api'; 

const CreateAdmin = () => {
  const initialData = {
    name: { label: "Ad Soyad", value: "", type: "text" },
    username: { label: "Kullanıcı Adı", value: "", type: "text" },
    email: { label: "Email Adresi", value: "", type: "email" },
    phoneNumber: { label: "Telefon Numarası", value: "", type: "tel" },
    password: { label: "Şifre", value: "", type: "password" }
  };

  return (
    <div className={styles.dashBoard}>
      <PostForm
        initialState={initialData}
        apiEndpoint={`${apiBaseUrl}/AdminUser`}
        successMessage="Admin başarıyla oluşturuldu."
        reloadOnSuccess={true}
      />
      <ToastContainer />
    </div>
  );
};

export default CreateAdmin;
