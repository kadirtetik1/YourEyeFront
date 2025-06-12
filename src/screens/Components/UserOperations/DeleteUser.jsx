import React, { Component } from 'react';
import RowDataView from '../../../components/Base/RowDataView/RowDataView';
import ConfirmModal from '../../../components/Base/ConfirmModal/ConfirmModal';
import styles from '../ComponentDash.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { apiBaseUrl } from '../../../utils/api'; 

export default class DeleteUser extends Component {

  state = {
    selectedItem: null,
    showModal: false,
  };

  canShowActionButton = true; // detay, sil vs

  labelMap = {
    id: "Id",
    name: "Ad",
    lastname:'Soyad',
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


  handleConfirmDelete = () => { 
    const { selectedItem } = this.state;

  fetch(`${apiBaseUrl}/Users/${selectedItem.id}`, { method: 'DELETE' })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Silme işlemi başarısız oldu.');
      }
      toast.success(`${selectedItem.name} adlı kullanıcı başarıyla silindi!`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      this.setState({ showModal: false, selectedItem: null });
      
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    })
    .catch((error) => {
      console.error('Silme hatası:', error);
      toast.error(`${selectedItem.name} adlı kullanıcı silinirken bir hata ile karşılaşıldı!`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      this.setState({ showModal: false, selectedItem: null });

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
  }

  render() {
    const { selectedItem, showModal } = this.state;

    return (
      <div className={styles.dashBoard}>
        <RowDataView
          apiBaseUrl={`${apiBaseUrl}/Users`}
          visibleKeys={['name','lastname','username']}
          labelMap={this.labelMap}
          onActionButtonClick={this.handleDetailClick}
          actionButtonLabel="Sil"
          showActionButton={this.canShowActionButton}  // görünüp görünmeyeceğinin kontrolü
        />

        {selectedItem && ( // Sadece içeriye gerekli componenti çağır

          <ConfirmModal
          isVisible={showModal}
          onClose={this.closeModal}
          title="Kullanıcıyı silmek istediğinize emin misiniz?"
          subtitle={`${selectedItem.name} adlı kullanıcı silinecek.`}
          confirmLabel="Onayla"
          cancelLabel="Vazgeç"
          onConfirm={this.handleConfirmDelete} // onayla butonunda yapılacak aktivite
        />

        )}
        <ToastContainer />
      </div>
    );
  }
}
