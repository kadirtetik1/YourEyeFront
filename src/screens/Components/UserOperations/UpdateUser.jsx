import React, { Component } from 'react';
import RowDataView from '../../../components/Base/RowDataView/RowDataView';
import SlideUpModal from '../../../components/Base/SlideUpModal/SlideUpModal';
import UpdateView from '../../../components/Base/UpdateView/UpdateView';
import styles from '../ComponentDash.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { apiBaseUrl } from '../../../utils/api';

export default class UpdateUser extends Component {
  state = {
    selectedUser: null,
    showModal: false
  };

  canShowActionButton = true;

  labelMap = {
    id: "Kullanıcı Id",
    name: "Ad",
    lastName: "Soyad",
    username: "Kullanıcı Adı",
    email: "E-posta",
    phoneNumber: "Telefon",
    companyName: "Şirket Adı",
    roleName: "Rol",
    branchNames: "Şubeler",
    permissions: "Yetkiler"
  };

  handleDetailClick = (user) => {
    this.setState({ selectedUser: user, showModal: true });
  };

  closeModal = () => {
    this.setState({ selectedUser: null, showModal: false });
  };

  handleUpdateSubmit = (updatedData) => {
    const apiUrl = `${apiBaseUrl}/Users/update-infos`;

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
        this.setState({ showModal: false, selectedUser: null });

        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        console.error('Güncelleme hatası:', error);
        toast.error('Güncelleme işlemi sırasında bir hata oluştu!', {
          position: toast.POSITION.BOTTOM_RIGHT
        });

        setTimeout(() => {
          window.location.reload();
        }, 2000);
      });
  };

  render() {
    const { selectedUser, showModal } = this.state;

    return (
      <div className={styles.dashBoard}>
        <RowDataView
          apiBaseUrl={`${apiBaseUrl}/Users`}
          visibleKeys={['name', 'lastName', 'companyName']}
          labelMap={this.labelMap}
          onActionButtonClick={this.handleDetailClick}
          actionButtonLabel="Güncelle"
          showActionButton={this.canShowActionButton}
        />

        {selectedUser && (
          <SlideUpModal isVisible={showModal} onClose={this.closeModal}>
            <UpdateView
              details={selectedUser}
              labelMap={this.labelMap}
              disabledKeys={['id', 'username']}
              phoneFields={['phoneNumber']}
              onUpdate={this.handleUpdateSubmit}
              visibleKeys={[
                'id',
                'name',
                'lastName',
                'username',
                'email',
                'phoneNumber',
              ]}
            />
          </SlideUpModal>
        )}
        <ToastContainer />
      </div>
    );
  }
}
