import React, { Component } from 'react';
import RowDataView from '../../../components/Base/RowDataView/RowDataView';
import DetailView from '../../../components/Base/DetailView/DetailView';
import ConfirmModal from '../../../components/Base/ConfirmModal/ConfirmModal';
import styles from '../ComponentDash.module.css';

export default class DeleteAdmin extends Component {
  apiBaseUrl = 'http://localhost:5059/api/AdminUser';

  state = {
    selectedItem: null,
    showModal: false,
  };

  // Yetki kontrol değişkeni - Dinamik kontrol
  canShowActionButton = true; // detay, sil vs

  labelMap = {
    id: "Id",
    name: "Ad Soyad",
    username: "Kullanıcı Adı",
    email: "Email",
    phoneNumber: "Telefon Numarası"
  };

  handleDetailClick = (item) => {
    this.setState({ selectedItem: item, showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false, selectedItem: null });
  };

  render() {
    const { selectedItem, showModal } = this.state;

    return (
      <div className={styles.dashBoard}>
        <RowDataView
          apiBaseUrl={this.apiBaseUrl}
          visibleKeys={['name','username']}
          labelMap={this.labelMap}
          onActionButtonClick={this.handleDetailClick}
          actionButtonLabel="Sil"
          showActionButton={this.canShowActionButton}  // <-- Değişken üzerinden kontrol
        />

        {selectedItem && ( // Sadece içeriye gerekli componenti çağır

          <ConfirmModal
          isVisible={showModal}
          onClose={this.closeModal}
          title="Admini silmek istediğinize emin misiniz?"
          subtitle={`${selectedItem.name} adlı admin silinecek.`}
          onConfirm={this.handleConfirmDelete}
          confirmLabel="Onayla"
          cancelLabel="Vazgeç"
        />

        )}
      </div>
    );
  }
}
