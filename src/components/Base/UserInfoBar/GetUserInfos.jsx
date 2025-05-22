import React from 'react';
import SlideUpModal from '../../Base/SlideUpModal/SlideUpModal';
import DetailView from '../../Base/DetailView/DetailView';
import { apiBaseUrl } from '../../../utils/api';
import styles from './GetUserInfos.module.css';

const GetUserInfos = ({ isOpen, onClose, userId, isAdmin }) => {
  const endpoint = isAdmin ? `${apiBaseUrl}/AdminUser` : `${apiBaseUrl}/Users`;

  return (
    <SlideUpModal isVisible={isOpen} onClose={onClose}>
      <div className={styles.container}>
        <h2 className={styles.title}>Kullanıcı Bilgileri</h2>
        <DetailView
          id={userId}
          apiBaseUrl={endpoint}
          labelMap={{
            name: "Ad",
            lastName: "Soyad",
            username: "Kullanıcı Adı",
            email: "Email",
            phoneNumber: "Telefon",
            companyName: "Firma",
            roleName: "Rol",
            branchNames: "Şubeler"
          }}
          visibleKeys={["name", "lastName", "username", "email", "phoneNumber", "companyName", "roleName", "branchNames"]}
          multivalueKeys={["branchNames"]}
        />
      </div>
    </SlideUpModal>
  );
};

export default GetUserInfos;
