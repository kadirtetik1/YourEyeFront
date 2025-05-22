import React, { Component } from 'react';
import RowDataView from '../../../components/Base/RowDataView/RowDataView';
import SlideUpModal from '../../../components/Base/SlideUpModal/SlideUpModal';
import CardDataView from '../../../components/Base/CardDataView/CardDataView';
import BranchCard from '../../../components/Base/BranchCard/BranchCard';
import styles from '../ComponentDash.module.css';

export default class ListFirmBranches extends Component {
  state = {
    selectedFirm: null,
    showModal: false
  };

  apiBaseUrl = 'http://localhost:5059/api'; // ✅ sadece API’ye kadar olan sabit adres

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
          apiBaseUrl={`${this.apiBaseUrl}/Companies`} // dışarıdan endpoint veriyoruz
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
              apiEndpoint={`${this.apiBaseUrl}/Branches/by-company/${selectedFirm.id}`} // ✅ endpoint birleşimi burada
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
