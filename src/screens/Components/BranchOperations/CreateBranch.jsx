import React, { Component } from 'react';
import PostForm from '../../../components/Base/FormFields/PostForm';
import styles from '../ComponentDash.module.css';
import { apiBaseUrl } from '../../../utils/api';

export default class CreateBranch extends Component {
  state = {
    companyOptions: []
  };

  componentDidMount() {
    fetch(`${apiBaseUrl}/Companies`)
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

  render() {
    return (
      <div className={styles.dashBoard}>
        <PostForm
          initialState={this.getInitialData()}
          apiEndpoint={`${apiBaseUrl}/Branches`}
          successMessage="Şube başarıyla oluşturuldu."
          reloadOnSuccess={true}
        />
      </div>
    );
  }
}
