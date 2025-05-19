import React, { Component } from 'react';
import PostForm from '../../../components/Base/FormFields/PostForm';
import styles from '../ComponentDash.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class CreateUser extends Component {
  state = {
    companyOptions: []
  };

  componentDidMount() {
    // Firmaları yükle
    fetch('http://localhost:5059/api/Companies')
      .then(res => res.json())
      .then(data => {
        const options = data.map(company => ({
          value: company.id,
          label: company.name
        }));
        this.setState({ companyOptions: options });
      })
      .catch(err => console.error('Firmalar yüklenirken hata oluştu:', err));
  }

  getInitialData = () => ({
    name: { label: "Ad", value: "", type: "text" },
    lastName: { label: "Soyad", value: "", type: "text" },
    email: { label: "Email", value: "", type: "email" },
    phoneNumber: { label: "Telefon Numarası", value: "", type: "tel" },
    username: { label: "Kullanıcı Adı", value: "", type: "text" },
    password: { label: "Şifre", value: "", type: "password" },
    companyId: { label: "Firma", value: "", type: "dropdown", options: this.state.companyOptions }
  });

  handleSubmit = (data) => {
    console.log("Gönderilen Data:", data);

    const payload = {
      name: data.name,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      username: data.username,
      password: data.password,
      companyId: data.companyId  // Dropdown'dan sadece ID gelir
    };

    fetch('http://localhost:5059/api/Users', {
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

        toast.success(responseText || "Kullanıcı başarıyla oluşturuldu.", { position: toast.POSITION.BOTTOM_RIGHT });

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
      <div className={styles.dashBoard}>
        <PostForm initialState={this.getInitialData()} onSubmit={this.handleSubmit} />
        <ToastContainer />
      </div>
    );
  }
}
