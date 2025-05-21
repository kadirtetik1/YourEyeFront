import React, { Component } from 'react';
import RowDataView from '../../../components/Base/RowDataView/RowDataView';
import UpdateView from '../../../components/Base/UpdateView/UpdateView';
import SlideUpModal from '../../../components/Base/SlideUpModal/SlideUpModal';
import styles from '../ComponentDash.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default class UpdateAdmin extends Component {
  apiBaseUrl = 'http://localhost:5059/api/AdminUser';

  state = {
    selectedItem: null,
    showModal: false,
  };

  canShowActionButton = true;

  labelMap = {
    id: "Id",
    name: "Ad Soyad",
    username: "Kullanıcı Adı",
    email: "Email Adresi",
    phoneNumber: "Telefon Numarası"
  };

  handleDetailClick = (item) => {
    this.setState({ selectedItem: item, showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false, selectedItem: null });
  };

  handleUpdateSubmit = (updatedData) => {
    const apiUrl = `${this.apiBaseUrl}`;

  fetch(apiUrl, {
    method: 'PUT',
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Güncelleme başarısız oldu.');
      }
      toast.success(`${updatedData.name || 'Kayıt'} başarıyla güncellendi!`, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      this.setState({ showModal: false, selectedItem: null });

      // Sayfa yenileme
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    })
    .catch((error) => {
      console.error('Güncelleme hatası:', error);
      toast.error('Güncelleme işlemi sırasında bir hata oluştu!', {
        position: toast.POSITION.BOTTOM_RIGHT
      });

      // Sayfa yenileme
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
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
          actionButtonLabel="Güncelle"
          showActionButton={this.canShowActionButton}
        />

        {selectedItem && (
          <SlideUpModal isVisible={showModal} onClose={this.closeModal}>
            <UpdateView
              details={selectedItem}
              labelMap={this.labelMap}
              visibleKeys={['id', 'name', 'email', 'username', 'phoneNumber']}
              disabledKeys={['id']}
              phoneFields={['phoneNumber']}
              onUpdate={this.handleUpdateSubmit}
            />
            
          </SlideUpModal>
        )}
        <ToastContainer />
      </div>
    );
  }
}
