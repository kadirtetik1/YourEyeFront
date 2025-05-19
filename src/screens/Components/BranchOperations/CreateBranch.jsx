import React, { Component } from 'react';
import PostForm from '../../../components/Base/FormFields/PostForm';
import styles from '../ComponentDash.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class CreateBranch extends Component {
  state = {
    companyOptions: []
  };

  componentDidMount() {
    // Firmaları çek
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
    name: { label: "Şube Adı", value: "", type: "text" },
    city: { label: "İl", value: "", type: "text" },
    town: { label: "İlçe", value: "", type: "text" },
    address: { label: "Adres", value: "", type: "text" },
    cameraCount: { label: "Kamera Sayısı", value: "", type: "number" },
    companyId: { label: "Firma", value: "", type: "dropdown", options: this.state.companyOptions }
  });

  handleSubmit = (data) => {
    console.log("Gönderilen Data:", data);

    const payload = {
      name: data.name,
      city: data.city,
      town: data.town,
      address: data.address,
      cameraCount: parseInt(data.cameraCount, 10),  // Sayıya çevir
      companyId: data.companyId  // Dropdown'dan sadece ID gelir
    };

    fetch('http://localhost:5059/api/Branches', {
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

        toast.success(responseText || "Şube başarıyla oluşturuldu.", { position: toast.POSITION.BOTTOM_RIGHT });

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
