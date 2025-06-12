import React, { Component } from 'react';
import styles from '../ComponentDash.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiBaseUrl } from '../../../utils/api';
import PostForm from '../../../components/Base/FormFields/PostForm';

export default class CreatePermission extends Component {
  render() {
    const initialData = {
      name: { label: 'Yetki Adı', value: '', type: 'text' },
      title: { label: 'Bağlı Olduğu Üst Başlık', value: '', type: 'text' },
      subTitle: { label: 'Bağlı Olduğu Alt Başlık', value: '', type: 'text' },
      routePath: { label: 'Page Route', value: '', type: 'text' },
      type: {
        label: 'Buton/Sayfa',
        value: '',
        type: 'dropdown',
        options: [
          { label: 'Sayfa', value: 'Sayfa' },
          { label: 'Buton', value: 'Buton' }
        ]
      },
      buttonKey: { label: 'Buton Keyword', value: '', type: 'text' }
    };

    return (
      <div className={styles.dashBoard}>
        <PostForm
          initialState={initialData}
          apiEndpoint={`${apiBaseUrl}/Permissions`}
          successMessage="Yeni Yetki Başarıyla Oluşturuldu."
          reloadOnSuccess={true}
        />
        <ToastContainer />
      </div>
    );
  }
}