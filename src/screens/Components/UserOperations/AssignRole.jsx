import React, { Component } from 'react';
import RowDataView from '../../../components/Base/RowDataView/RowDataView';
import SlideUpModal from '../../../components/Base/SlideUpModal/SlideUpModal';
import SelectableRowList from '../../../components/Base/SelectableRowList/SelectableRowList';
import { toast, ToastContainer } from 'react-toastify';
import styles from '../ComponentDash.module.css';
import { apiBaseUrl } from '../../../utils/api'; 


export default class AssignRole extends Component {
  apiBaseUrl = 'http://localhost:5059/api';

  state = {
    selectedUser: null,
    selectedRoleId: null,
    roleList: [],
    showModal: false,
  };

  userLabelMap = {
    name: 'Ad',
    lastName: 'Soyad',
    companyName: 'Firma',
  };

  roleLabelMap = {
    name: 'Rol Adı',
    description: 'Açıklama',
  };

  handleAssignClick = async (user) => {
    try {
      const [assignedRes, rolesRes] = await Promise.all([
        fetch(`${apiBaseUrl}/Users/${user.id}/role`),
        fetch(`${apiBaseUrl}/Roles`),
      ]);

      const assignedRole = await assignedRes.json(); // Tek bir rol olacak
      const roles = await rolesRes.json();

      this.setState({
        selectedUser: user,
        selectedRoleId: assignedRole.roleId || null,
        roleList: roles,
        showModal: true,
      });
    } catch (err) {
      console.error('Rol verileri alınamadı:', err);
      toast.error('Rol bilgileri alınırken hata oluştu.');
    }
  };

  handleSelectionChange = (selectedIds) => {
    const selectedRoleId = selectedIds.length > 0 ? selectedIds[0] : null;
    this.setState({ selectedRoleId });
  };

  handleAssignRole = async () => {
    const { selectedUser, selectedRoleId } = this.state;

    if (!selectedRoleId) {
      toast.warning('Lütfen bir rol seçin.');
      return;
    }

    try {
      const res = await fetch(`${this.apiBaseUrl}/Users/assign-role`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: selectedUser.id, roleId: selectedRoleId }),
      });

      if (!res.ok) throw new Error('Rol atama başarısız');
      toast.success('Rol ataması başarıyla yapıldı.');
      this.setState({ showModal: false, selectedUser: null });

      setTimeout(() => {
        window.location.reload();
      }, 2500);
    } catch (err) {
      console.error(err);
      toast.error('Rol atama sırasında bir hata oluştu.');
    }
  };

  render() {
    const { selectedUser, selectedRoleId, roleList, showModal } = this.state;

    return (
      <div className={styles.dashBoard}>
        <RowDataView
          apiBaseUrl={`${this.apiBaseUrl}/Users`}
          visibleKeys={['name', 'lastName', 'companyName']}
          labelMap={this.userLabelMap}
          onActionButtonClick={this.handleAssignClick}
          actionButtonLabel="Rol Ata"
          showActionButton={true}
        />

        {selectedUser && showModal && (
          <SlideUpModal isVisible={showModal} onClose={() => this.setState({ showModal: false })}>
            <h3>{selectedUser.name} {selectedUser.lastName} - Rol Atama</h3>

            <SelectableRowList
              data={roleList}
              visibleKeys={['name', 'description']}
              labelMap={this.roleLabelMap}
              selectedIds={selectedRoleId ? [selectedRoleId] : []}
              onSelectionChange={this.handleSelectionChange}
              onSubmit={this.handleAssignRole}
              actionButtonLabel="Rolü Kaydet"
              singleSelect={true}  // yeni prop, true => sadece tek bir tane seçilebilir. 1-1 ilişkilerde uygun. 
            />
          </SlideUpModal>
        )}

        <ToastContainer position="bottom-right" />
      </div>
    );
  }
}
