import React, { Component } from 'react';
import RowDataView from '../../../components/Base/RowDataView/RowDataView';
import DetailView from '../../../components/Base/DetailView/DetailView';
import SlideUpModal from '../../../components/Base/SlideUpModal/SlideUpModal';
import styles from '../ComponentDash.module.css';

export default class ListAdmins extends Component {
  apiBaseUrl = 'http://localhost:5059/api/AdminUser';

  state = {
    selectedItem: null,
    showModal: false,
  };

  
  showActionButton = true; // detay, sil vs

  // backendden gelen permissionda aşağıdaki gibi bir yapı entegre edilebilir.
  // this.showActionButton = permissions.includes("Kullanıcı Detayını Görebilir"); 

  

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
          visibleKeys={['name']}
          labelMap={this.labelMap}
          onActionButtonClick={this.handleDetailClick}
          actionButtonLabel="Detay"
          showActionButton={this.showActionButton}  // değişken üzerinden kontrol
        />

        {selectedItem && (
          <SlideUpModal isVisible={showModal} onClose={this.closeModal}>
            <DetailView
              id={selectedItem.id}
              apiBaseUrl={this.apiBaseUrl}
              labelMap={this.labelMap}
              visibleKeys={['id','name','username', 'email','phoneNumber']} // detayda gelenlerden gösterilecek satırlar
            />
          </SlideUpModal> // DENEME
        )}
      </div>
    );
  }
}
