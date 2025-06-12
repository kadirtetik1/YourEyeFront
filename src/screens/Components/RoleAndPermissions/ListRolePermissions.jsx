import React, { Component } from 'react';
import styles from '../ComponentDash.module.css';
import RowDataView from '../../../components/Base/RowDataView/RowDataView';
import { apiBaseUrl } from '../../../utils/api';
import { toast } from 'react-toastify';
import SlideUpModal from '../../../components/Base/SlideUpModal/SlideUpModal';

export default class ListRolePermissions extends Component {
  state = {
    roles: [],
    selectedRole: null,
    rolePermissions: [],
    showModal: false
  };

  componentDidMount() {
    this.fetchRoles();
  }

  fetchRoles = async () => {
    try {
      const res = await fetch(`${apiBaseUrl}/Roles`);
      const data = await res.json();
      this.setState({ roles: data });
    } catch (err) {
      console.error(err);
      toast.error("Roller alınamadı.");
    }
  };

  handleRoleClick = async (role) => {
    try {
      const res = await fetch(`${apiBaseUrl}/Permissions/${role.id}/permissions`);
      const data = await res.json(); // direkt liste [{id, name}]

      this.setState({
        selectedRole: role,
        rolePermissions: data,
        showModal: true
      });
    } catch (err) {
      console.error(err);
      toast.error("Yetkiler alınamadı.");
    }
  };

  closeModal = () => {
    this.setState({ showModal: false, selectedRole: null, rolePermissions: [] });
  };

  render() {
    const { roles, selectedRole, rolePermissions, showModal } = this.state;

    const roleLabelMap = {
      name: "Rol Adı"
    };

    const permissionLabelMap = {
      name: "Yetki Adı"
    };

    return (
      <div className={styles.dashBoard}>
        <RowDataView
          data={roles}
          visibleKeys={['name']}
          labelMap={roleLabelMap}
          onActionButtonClick={this.handleRoleClick}
          actionButtonLabel="Yetkileri Gör"
          showActionButton={true}
        />

        {selectedRole && showModal && (
          <SlideUpModal isVisible={showModal} onClose={this.closeModal}>
            <h3>{selectedRole.name}</h3>
            <RowDataView
              data={rolePermissions}
              visibleKeys={['name']}
              labelMap={permissionLabelMap}
              showActionButton={false}
            />
          </SlideUpModal>
        )}
      </div>
    );
  }
}
