import React, { Component } from 'react';
import RowDataView from '../../../components/Base/RowDataView/RowDataView';
import SlideUpModal from '../../../components/Base/SlideUpModal/SlideUpModal';
import SelectableRowList from '../../../components/Base/SelectableRowList/SelectableRowList';
import { toast, ToastContainer } from 'react-toastify';
import styles from '../ComponentDash.module.css';
import { apiBaseUrl } from '../../../utils/api';

export default class AssignPermission extends Component {
  state = {
    selectedRole: null,
    rolePermissionIds: [],
    allPermissions: [],
    showModal: false
  };

  roleLabelMap = {
    name: 'Rol Adı',
    description: 'Açıklama'
  };

  permissionLabelMap = {
    name: 'Yetki',
    title: 'Başlık',
    subTitle: 'Alt Başlık',
    type: 'Tip'
  };

  handleAssignClick = async (role) => {
    try {
      // 1. Rolün halihazırdaki permission ID'lerini role.permissions üzerinden al
      const rolePermissionIds = role.permissions.map(p => p.id);

      // 2. Sistemdeki tüm yetkileri çek
      const allRes = await fetch(`${apiBaseUrl}/Permissions`);
      const allPermissions = await allRes.json();

      this.setState({
        selectedRole: role,
        rolePermissionIds,
        allPermissions,
        showModal: true
      });
    } catch (error) {
      console.error('Yetki verileri alınamadı:', error);
      toast.error('Yetki bilgileri alınırken bir hata oluştu.');
    }
  };

  handleSelectionChange = (selectedIds) => {
    this.setState({ rolePermissionIds: selectedIds });
  };

  handleAssignPermissions = () => {
    const { selectedRole, rolePermissionIds } = this.state;

    if (rolePermissionIds.length === 0) {
      toast.warning('Lütfen en az bir yetki seçin.');
      return;
    }

    const body = {
      roleId: selectedRole.id,
      permissionIds: rolePermissionIds // ✅ DÜZELTİLDİ
    };

    fetch(`${apiBaseUrl}/Roles/Assign-Permissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(res => {
        if (!res.ok) throw new Error('Yetki atama başarısız');
        toast.success('Yetki ataması başarıyla yapıldı.');
        this.setState({ showModal: false, selectedRole: null });

        setTimeout(() => {
          window.location.reload();
        }, 2500);
      })
      .catch(err => {
        console.error(err);
        toast.error('Yetki atama sırasında bir hata oluştu.');
      });
  };

  render() {
    const { selectedRole, rolePermissionIds, allPermissions, showModal } = this.state;

    return (
      <div className={styles.dashBoard}>
        <RowDataView
          apiBaseUrl={`${apiBaseUrl}/Roles`}
          visibleKeys={['name']}
          labelMap={this.roleLabelMap}
          onActionButtonClick={this.handleAssignClick}
          actionButtonLabel="Yetki Seçimi"
          showActionButton={true}
        />

        {selectedRole && showModal && (
          <SlideUpModal isVisible={showModal} onClose={() => this.setState({ showModal: false })}>
            <h3>{selectedRole.name} - Yetki Atama</h3>

            <SelectableRowList
              data={allPermissions}
              visibleKeys={['name', 'title', 'subTitle', 'type']}
              labelMap={this.permissionLabelMap}
              selectedIds={rolePermissionIds}
              onSelectionChange={this.handleSelectionChange}
              onSubmit={this.handleAssignPermissions}
              actionButtonLabel="Yetkileri Kaydet"
            />
          </SlideUpModal>
        )}

        <ToastContainer position="bottom-right" />
      </div>
    );
  }
}
