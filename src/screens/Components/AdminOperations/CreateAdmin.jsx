import React, { Component } from 'react';
import PostForm from '../../../components/Base/FormFields/PostForm';
import styles from '../ComponentDash.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class CreateAdmin extends Component {
  apiBaseUrl = 'http://localhost:5059/api'; // ileride api.js'e taşınacak

  initialData = {
    name: { label: "Ad Soyad", value: "", type: "text" },
    username: { label: "Kullanıcı Adı", value: "", type: "text" },
    email: { label: "Email Adresi", value: "", type: "email" },
    phoneNumber: { label: "Telefon Numarası", value: "", type: "tel" },
    password: { label: "Şifre", value: "", type: "password" }
  };

  render() {
    return (
      <div className={styles.dashBoard}>
        <PostForm
          initialState={this.initialData}
          apiEndpoint={`${this.apiBaseUrl}/AdminUser`}
          successMessage="Admin başarıyla oluşturuldu."
          reloadOnSuccess={true}
        />
        <ToastContainer />
      </div>
    );
  }
}
