import React, { Component } from 'react';
import RowDataView from '../../../components/Base/RowDataView/RowDataView';
import SlideUpModal from '../../../components/Base/SlideUpModal/SlideUpModal';
import DetailView from '../../../components/Base/DetailView/DetailView';
import styles from '../ComponentDash.module.css';
import { apiBaseUrl } from '../../../utils/api';

export default class ListUser extends Component {
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

  render() {
    const { selectedUser, showModal } = this.state;

    return (
      <div className={styles.dashBoard}>
        <RowDataView
          apiBaseUrl={`${apiBaseUrl}/Users`}
          visibleKeys={['name', 'lastName', 'companyName']}
          labelMap={this.labelMap}
          onActionButtonClick={this.handleDetailClick}
          actionButtonLabel="Detay"
          showActionButton={this.canShowActionButton}
        />

        {selectedUser && (
          <SlideUpModal isVisible={showModal} onClose={this.closeModal}>
            <DetailView
              id={selectedUser.id}
              apiBaseUrl={`${apiBaseUrl}/Users`}
              labelMap={this.labelMap}
              visibleKeys={[
                'id',
                'name',
                'lastName',
                'username',
                'email',
                'phoneNumber',
                'companyName',
                'roleName',
                'branchNames',
                'permissions'
              ]}
              multivalueKeys={['branchNames', 'permissions']}
            />
          </SlideUpModal>
        )}
      </div>
    );
  }
}
