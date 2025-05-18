import React, { Component } from 'react';
import RowListView from '../../../components/Base/ListComponents/RowListView';
import DetailView from '../../../components/Base/ListComponents/DetailView';
import SlideUpModal from '../../../components/Base/SlideUpModal/SlideUpModal';
import styles from '../ComponentDash.module.css';

export default class ListAdmins extends Component {
  apiBaseUrl = 'http://localhost:5059/api/AdminUser';

  state = {
    admins: [],
    selectedAdmin: null,
    showModal: false,
  };

  componentDidMount() {
    fetch(this.apiBaseUrl)
      .then(res => res.json())
      .then(data => this.setState({ admins: data }))
      .catch(err => console.error('Fetch error:', err));
  }

  handleDetail = (admin) => {
    this.setState({ selectedAdmin: admin, showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false, selectedAdmin: null });
  };

  render() {
    const { admins, selectedAdmin, showModal } = this.state;

    const visibleKeys = ['name'];  // Listede gösterilecek alanlar
    const hiddenKeys = ['isAdmin'];            // Detayda gizlenecek alanlar
    const showDetailButton = true;             // Detayl butonu gösterilsin mi?

    const labelMap = {
      id: "Id",
      name: "Ad Soyad",
      username: "Kullanıcı Adı",
      email: "Email Adresi",
      phoneNumber: "Telefon Numarası",
      isAdmin: "Yönetici Mi?"
    };

    return (
      <div className={styles.container}>
        <RowListView
          data={admins}
          visibleKeys={visibleKeys}
          labelMap={labelMap}
          onDetail={this.handleDetail}
          showDetailButton={showDetailButton}
        />
        <SlideUpModal isVisible={showModal} onClose={this.closeModal}>
          {selectedAdmin && (
            <DetailView
              id={selectedAdmin.id}
              apiBaseUrl={this.apiBaseUrl}
              labelMap={labelMap}
              hiddenKeys={hiddenKeys}
            />
          )}
        </SlideUpModal>
      </div>
    );
  }
}
