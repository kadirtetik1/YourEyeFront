import React, { Component } from 'react';
import RowDataView from '../../../components/Base/RowDataView/RowDataView';
import DetailView from '../../../components/Base/DetailView/DetailView';
import SlideUpModal from '../../../components/Base/SlideUpModal/SlideUpModal';
import styles from '../ComponentDash.module.css';
import { apiBaseUrl } from '../../../utils/api'; 

export default class ListAdmins extends Component {

  state = {
    selectedItem: null,
    showModal: false,
  };

  
  showActionButton = true; // detay, sil vs

  labelMap = {
    id: "Id",
    name: "Ad Soyad",
    username: "Kullanıcı Adı",
    email: "Email",
    phoneNumber: "Telefon Numarası",
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
          apiBaseUrl={`${apiBaseUrl}/AdminUser`}
          visibleKeys={['name',]}
          labelMap={this.labelMap}
          onActionButtonClick={this.handleDetailClick}
          actionButtonLabel="Detay"
          showActionButton={this.showActionButton}  // değişken üzerinden kontrol
        />

        {selectedItem && (
          <SlideUpModal isVisible={showModal} onClose={this.closeModal}>
            <DetailView
              id={selectedItem.id}
              apiBaseUrl={`${apiBaseUrl}/AdminUser`}
              labelMap={this.labelMap}
              visibleKeys={['id','name','username', 'email','phoneNumber']} // detayda gelenlerden gösterilecek satırlar
            />
          </SlideUpModal> 
        )}
      </div>
    );
  }
}
