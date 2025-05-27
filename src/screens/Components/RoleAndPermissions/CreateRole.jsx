import React, { Component } from 'react'
import styles from '../ComponentDash.module.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiBaseUrl } from '../../../utils/api'; 
import PostForm from '../../../components/Base/FormFields/PostForm';

export default class CreateRole extends Component {
  
  render() {
    
    const initialData = {
      name: { label: "Rol Adı", value: "", type: "text" },
      description: { label: "Açıklama", value: "", type: "text" },
     
    };

    return (
      <div className={styles.dashBoard}>
        <PostForm
        initialState={initialData}
        apiEndpoint={`${apiBaseUrl}/Roles`}
        successMessage="Yeni Rol Başarıyla Oluşturuldu."
        reloadOnSuccess={true}
      />
      <ToastContainer />
      </div>
    )
  }
}
