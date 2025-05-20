import React, { Component } from 'react';
import RowDataView from '../../../components/Base/RowDataView/RowDataView';
import DetailView from '../../../components/Base/DetailView/DetailView';
import SlideUpModal from '../../../components/Base/SlideUpModal/SlideUpModal';
import styles from '../ComponentDash.module.css';

export default class ListFirmUsers extends Component {
  apiBaseUrl = 'http://localhost:5059/api/Companies';

  state = {
    selectedFirm: null,
    users: [],
    selectedUser: null,
    showUserListModal: false,
    showDetailModal: false
  };

  canShowActionButton = true;

  firmLabelMap = {
    id: "Firma Id",
    name: "Firma Adı",
    logoPath: "Logo Yolu"
  };

  userLabelMap = {
    id: "Kullanıcı Id",
    name: "Ad",
    lastName: "Soyad",
    username: "Kullanıcı Adı",
    email: "E-posta",
    phoneNumber: "Telefon",
    roleName: "Rol",
    branchNames: "Şubeler",
    permissions: "Yetkiler"
  };

  // Firma seçilince kullanıcıları getir ve modalı aç
  fetchUsers = (firm) => {
    if (!firm.id) return;

    fetch(`http://localhost:5059/api/Users/by-company/${firm.id}`)
      .then(res => res.ok ? res.json() : [])
      .then(users =>
        this.setState({ selectedFirm: firm, users, showUserListModal: true })
      )
      .catch(() =>
        this.setState({ selectedFirm: firm, users: [], showUserListModal: true })
      );
  };

  handleDetailClick = (user) => {
    this.setState({ selectedUser: user, showDetailModal: true });
  };

  closeUserListModal = () => {
    this.setState({ showUserListModal: false, selectedFirm: null, users: [] });
  };

  closeDetailModal = () => {
    this.setState({ showDetailModal: false, selectedUser: null });
  };

  render() {
    const { selectedFirm, users, selectedUser, showUserListModal, showDetailModal } = this.state;

    return (
      <div className={styles.dashBoard}>
        <RowDataView
          apiBaseUrl={this.apiBaseUrl}
          visibleKeys={['name']}
          labelMap={this.firmLabelMap}
          onActionButtonClick={this.fetchUsers}
          actionButtonLabel="Kullanıcıları Göster"
          showActionButton={this.canShowActionButton}
        />

        {showUserListModal && (
          <SlideUpModal isVisible={showUserListModal} onClose={this.closeUserListModal}>
            <RowDataView
              data={users}
              visibleKeys={['name', 'lastName']}
              labelMap={{
                name: "Ad",
                lastName: "Soyad"
              }}
              onActionButtonClick={this.handleDetailClick}
              actionButtonLabel="Detay"
              showActionButton={this.canShowActionButton}
            />
          </SlideUpModal>
        )}

        {selectedUser && (
          <SlideUpModal isVisible={showDetailModal} onClose={this.closeDetailModal}>
            <DetailView
              id={selectedUser.id}
              apiBaseUrl="http://localhost:5059/api/Users"
              labelMap={this.userLabelMap}
              visibleKeys={[
                'id',
                'name',
                'lastName',
                'username',
                'email',
                'phoneNumber',
                'roleName',
                'branchNames',
                'permissions'
              ]}
            />
          </SlideUpModal>
        )}
      </div>
    );
  }
}
