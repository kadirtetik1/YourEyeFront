import React, { Component } from 'react';
import RowDataView from '../../../components/Base/RowDataView/RowDataView';
import SlideUpModal from '../../../components/Base/SlideUpModal/SlideUpModal';
import SelectableRowList from '../../../components/Base/SelectableRowList/SelectableRowList';
import { toast, ToastContainer } from 'react-toastify';
import styles from '../ComponentDash.module.css';

export default class AssignBranch extends Component {
  apiBaseUrl = 'http://localhost:5059/api';

  state = {
    selectedUser: null,
    userBranchIds: [],
    companyBranchList: [],
    showModal: false
  };

  userLabelMap = {
    name: 'Ad',
    lastName: 'Soyad',
    companyName: 'Firma'
  };

  branchLabelMap = {
    name: 'Şube Adı',
    city: 'İl',
    town: 'İlçe'
  };

  handleAssignClick = async (user) => {
    const companyId = user.companyId;
  
    try {
      // 1. Kullanıcının atanmış şubeleri
      const assignedBranchesRes = await fetch(`${this.apiBaseUrl}/Users/${user.id}/branches`);
      const assignedBranches = await assignedBranchesRes.json();
      const userBranchIds = assignedBranches.branches.map(branch => branch.branchId);
  
      // 2. Firmaya ait tüm şubeler
      const companyBranchesRes = await fetch(`${this.apiBaseUrl}/Branches/by-company/${companyId}`);
      const companyBranchList = await companyBranchesRes.json();
  
      this.setState({
        selectedUser: user,
        userBranchIds,
        companyBranchList,
        showModal: true
      });
    } catch (error) {
      console.error('Şube verileri alınamadı:', error);
      toast.error('Şube bilgileri alınırken bir hata oluştu.');
    }
  };

  handleSelectionChange = (selectedIds) => {
    this.setState({ userBranchIds: selectedIds });
  };

  handleAssignBranch = () => {
    const { selectedUser, userBranchIds } = this.state;

    if (userBranchIds.length === 0) {
      toast.warning('Lütfen en az bir şube seçin.');
      return;
    }

    const body = {
      userId: selectedUser.id,
      branchIds: userBranchIds 
    };

    fetch(`${this.apiBaseUrl}/Users/assign-branches`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(res => {
        if (!res.ok) throw new Error('Atama başarısız');
        toast.success('Şube ataması başarıyla yapıldı.');
        this.setState({ showModal: false, selectedUser: null });

        setTimeout(() => {
          window.location.reload();
        }, 2500);

      })
      .catch(err => {
        console.error(err);
        toast.error('Şube atama sırasında bir hata oluştu.');
      });
  };

  render() {
    const { selectedUser, userBranchIds, companyBranchList, showModal } = this.state;

    return (
      <div className={styles.dashBoard}>
        <RowDataView
          apiBaseUrl={`${this.apiBaseUrl}/Users`}
          visibleKeys={['name', 'lastName', 'companyName']}
          labelMap={this.userLabelMap}
          onActionButtonClick={this.handleAssignClick}
          actionButtonLabel="Şube Ata"
          showActionButton={true}
        />

        {selectedUser && showModal && (
          <SlideUpModal isVisible={showModal} onClose={() => this.setState({ showModal: false })}>
            <h3>{selectedUser.name} {selectedUser.lastName} - Şube Atama</h3>

            <SelectableRowList
             data={companyBranchList}
             visibleKeys={['name', 'city', 'town']}
             labelMap={this.branchLabelMap}
             selectedIds={userBranchIds}
             onSelectionChange={this.handleSelectionChange}
             onSubmit={this.handleAssignBranch}
             actionButtonLabel="Şubeleri Kaydet"
           />

          </SlideUpModal>
        )}

        <ToastContainer position="bottom-right" />
      </div>
    );
  }
}
