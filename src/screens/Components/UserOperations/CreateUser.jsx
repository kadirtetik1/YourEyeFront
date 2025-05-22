import React, { useEffect, useState } from 'react';
import PostForm from '../../../components/Base/FormFields/PostForm';
import styles from '../ComponentDash.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiBaseUrl } from '../../../utils/api';

const CreateUser = () => {
  const [companyOptions, setCompanyOptions] = useState([]);

  useEffect(() => {
    fetch(`${apiBaseUrl}/Companies`)
      .then(res => res.json())
      .then(data => {
        const options = data.map(company => ({
          value: company.id,
          label: company.name
        }));
        setCompanyOptions(options);
      })
      .catch(err => {
        console.error('Firmalar yüklenirken hata oluştu:', err);
        toast.error('Firmalar yüklenirken hata oluştu.');
      });
  }, []);

  const getInitialData = () => ({
    name: { label: "Ad", value: "", type: "text" },
    lastName: { label: "Soyad", value: "", type: "text" },
    email: { label: "Email", value: "", type: "email" },
    phoneNumber: { label: "Telefon Numarası", value: "", type: "tel" },
    username: { label: "Kullanıcı Adı", value: "", type: "text" },
    password: { label: "Şifre", value: "", type: "password" },
    companyId: {
      label: "Firma", value: "", type: "dropdown", options: companyOptions
    }
  });

  return (
    <div className={styles.dashBoard}>
      <PostForm
        initialState={getInitialData()}
        apiEndpoint={`${apiBaseUrl}/Users`}
        successMessage="Kullanıcı başarıyla oluşturuldu."
        reloadOnSuccess={true}
      />
      <ToastContainer />
    </div>
  );
};

export default CreateUser;
