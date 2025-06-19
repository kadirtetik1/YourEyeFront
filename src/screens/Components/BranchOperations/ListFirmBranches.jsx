import React, { Component } from 'react';
import RowDataView from '../../../components/Base/RowDataView/RowDataView';
import SlideUpModal from '../../../components/Base/SlideUpModal/SlideUpModal';
import CardDataView from '../../../components/Base/CardDataView/CardDataView';
import BranchCard from '../../../components/Base/BranchCard/BranchCard';
import styles from '../ComponentDash.module.css';
import { apiBaseUrl } from '../../../utils/api';

export default class ListFirmBranches extends Component {
  state = {
    selectedFirm: null,
    showModal: false
  };

  labelMap = {
    id: "Firma Id",
    name: "Firma Adı",
    logoPath: "Logo Yolu"
  };

  showFunctionButton = true;

  openBranchModal = (firm) => {
    this.setState({ selectedFirm: firm, showModal: true });
  };

  closeModal = () => {
    this.setState({ selectedFirm: null, showModal: false });
  };

  render() {
    const { selectedFirm, showModal } = this.state;

    return (
      <div className={styles.dashBoard}>
        <RowDataView
          apiBaseUrl={`${apiBaseUrl}/Companies`}
          visibleKeys={['name']}
          labelMap={this.labelMap}
          onActionButtonClick={this.openBranchModal}
          actionButtonLabel="Şubeleri Göster"
          showActionButton={this.showFunctionButton}
        />

        {showModal && selectedFirm && (
          <SlideUpModal isVisible={showModal} onClose={this.closeModal}>
            <CardDataView
              title={`${selectedFirm.name} - Şubeler`}
              apiEndpoint={`${apiBaseUrl}/Branches/by-company/${selectedFirm.id}`}
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
