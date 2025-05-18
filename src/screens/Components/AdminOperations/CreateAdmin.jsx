import React, { Component } from 'react';
import PostForm from '../../../components/Base/FormFields/PostForm';
import styles from '../ComponentDash.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class CreateAdmin extends Component {
  apiBaseUrl = 'http://localhost:5059/api/AdminUser';  // ✅ Merkezi API adresi

  initialData = {
    name: { label: "Ad Soyad", value: "", type: "text" },
    username: { label: "Kullanıcı Adı", value: "", type: "text" },
    email: { label: "Email Adresi", value: "", type: "email" },
    phoneNumber: { label: "Telefon Numarası", value: "", type: "tel" },
    password: { label: "Şifre", value: "", type: "password" }
  };

  handleSubmit = (data) => {
    console.log("Gönderilen Data:", data);

    const payload = {
      name: data.name,
      username: data.username,
      email: data.email,
      phoneNumber: data.phoneNumber,
      password: data.password
    };

    fetch(this.apiBaseUrl, {  // ✅ Tek noktadan çağrılıyor
      method: 'POST',
      headers: { 'Accept': '*/*', 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(async response => {
        const responseText = await response.text();
        if (!response.ok) {
          console.error('Sunucu Yanıtı:', responseText);
          throw new Error(responseText);
        }
        console.log('Başarılı Yanıt:', responseText);
        toast.success(responseText || "İşlem başarıyla tamamlandı.", { position: toast.POSITION.BOTTOM_RIGHT });

        setTimeout(() => {
          window.location.reload();
        }, 2500);
      })
      .catch(error => {
        toast.error(`${error.message}`, { position: toast.POSITION.BOTTOM_RIGHT });
      });
  };

  render() {
    return (
      <div className={styles.container}>
        <PostForm initialState={this.initialData} onSubmit={this.handleSubmit} />
        <ToastContainer />
      </div>
    );
  }
}
