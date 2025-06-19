import React, { Component } from 'react';
import PostForm from '../../../components/Base/FormFields/PostForm';
import NewCompanyModal from '../../../components/Base/NewCompanyModal/NewCompanyModal';
import styles from '../ComponentDash.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiBaseUrl } from '../../../utils/api';

const LOGO_BASE_PATH = '/assets/logos/';

export default class CreateFirm extends Component {
  state = {
    showSuccessModal: false,
    createdCompanyName: '',
    createdLogoPath: '',
    sectorOptions: []
  };

  componentDidMount() {
    fetch(`${apiBaseUrl}/Sectors`)
      .then(res => res.json())
      .then(data => {
        const options = data.map(sector => ({
          value: sector.id,
          label: sector.name
        }));
        this.setState({ sectorOptions: options });
      })
      .catch(err => console.error('Sektörler yüklenirken hata oluştu:', err));
  }

  getInitialData = () => ({
    name: { label: "Firma Adı", value: "", type: "text" },
    logoPath: { label: "Logo Yolu", value: "", type: "text" },
    sectorId: { label: "Sektör", value: "", type: "dropdown", options: this.state.sectorOptions }
  });

  handleSubmit = (data) => {
    const fullLogoPath = `${LOGO_BASE_PATH}${data.logoPath}`;

    const payload = {
      name: data.name,
      logoPath: fullLogoPath,
      sectorId: data.sectorId
    };

    fetch(`${apiBaseUrl}/Companies`, {
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

        this.setState({
          showSuccessModal: true,
          createdCompanyName: data.name,
          createdLogoPath: fullLogoPath
        });

        setTimeout(() => {
          window.location.reload();
        }, 3500);
      })
      .catch(error => {
        toast.error(`${error.message}`, { position: toast.POSITION.BOTTOM_RIGHT });
      });
  };

  render() {
    const { showSuccessModal, createdCompanyName, createdLogoPath } = this.state;

    return (
      <div className={styles.dashBoard}>
        <PostForm initialState={this.getInitialData()} onSubmit={this.handleSubmit} />
        <ToastContainer />
        <NewCompanyModal
          isVisible={showSuccessModal}
          logoPath={createdLogoPath}
          companyName={createdCompanyName}
        />
      </div>
    );
  }
}
