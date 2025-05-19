import React, { Component } from 'react';
import RowDataView from '../../../components/Base/RowDataView/RowDataView';
import SlideUpModal from '../../../components/Base/SlideUpModal/SlideUpModal';
import CardDataView from '../../../components/Base/CardDataView/CardDataView';
import BranchCard from '../../../components/Base/BranchCard/BranchCard';
import styles from '../ComponentDash.module.css';

export default class ListFirmBranches extends Component {
  state = {
    selectedFirm: null,
    branches: [],
    showModal: false
  };

  apiBaseUrl = 'http://localhost:5059/api/Companies';

  labelMap = {
    id: "Firma Id",
    name: "Firma Adı",
    logoPath: "Logo Yolu"
  };

  fetchBranches = (firm) => {
    const branchIds = firm.branches;

    if (!branchIds || branchIds.length === 0) {
      this.setState({ selectedFirm: firm, branches: [], showModal: true });
      return;
    }

    Promise.all(branchIds.map(id =>
      fetch(`http://localhost:5059/api/Branches/${id}`)
        .then(res => res.ok ? res.json() : null)
        .catch(() => null)
    ))
      .then(branches => this.setState({ selectedFirm: firm, branches: branches.filter(Boolean), showModal: true }));
  };

  closeModal = () => {
    this.setState({ showModal: false, selectedFirm: null, branches: [] });
  };

  render() {
    const { selectedFirm, branches, showModal } = this.state;

    return (
      <div className={styles.dashBoard}>
        <RowDataView
          apiBaseUrl={this.apiBaseUrl}
          visibleKeys={['name']}
          labelMap={this.labelMap}
          onActionButtonClick={this.fetchBranches}
          actionButtonLabel="Şubeleri Göster"
          showActionButton={true}
        />

        {showModal && (
          <SlideUpModal isVisible={showModal} onClose={this.closeModal}>
        <CardDataView
          title={`${selectedFirm?.name} - Şubeler`}
          items={branches}
          renderItem={(branch) => (
            <BranchCard
              branch={branch}
              logoPath={selectedFirm.logoPath}
              visibleKeys={['name', 'city', 'town', 'address', 'cameraCount']}
              labelMap={{
                name: "Şube Adı",
                city: "İl",
                town: "İlçe",
                address: "Adres",
                cameraCount: "Kamera Sayısı"
              }}
         />
      )}
/>
          </SlideUpModal>
        )}
      </div>
    );
  }
}
