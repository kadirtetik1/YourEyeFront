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

  showFunctionButton = true;


 fetchBranches = (firm) => {
  if (!firm.id) return;

  fetch(`http://localhost:5059/api/Branches/by-company/${firm.id}`)
    .then(res => res.ok ? res.json() : [])
    .then(branches =>
      this.setState({ selectedFirm: firm, branches, showModal: true })
    )
    .catch(() => {
      this.setState({ selectedFirm: firm, branches: [], showModal: true });
    });
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
          onActionButtonClick={this.fetchBranches} // onActionda şubeleri çek
          actionButtonLabel="Şubeleri Göster"
          showActionButton={this.showFunctionButton} 
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
