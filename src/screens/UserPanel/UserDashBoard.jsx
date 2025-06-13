import React, { Component } from 'react'
import Topbar from '../../components/Base/Topbar/Topbar';
import Sidebar from '../../components/Base/Sidebar/Sidebar';
import UserInfoBar from '../../components/Base/UserInfoBar/UserInfoBar';
import styles from './UserDashBoard.module.css';

import { UserSideBarMenu } from '../../routes/userRoutes';


import { Routes, Route } from 'react-router-dom';


import CreateUser from '../Components/UserOperations/CreateUser';
import ListUser from '../Components/UserOperations/ListUser';
import UpdateUser from '../Components/UserOperations/UpdateUser';
import AssignBranch from '../Components/UserOperations/AssignBranch';
import AssignRole from '../Components/UserOperations/AssignRole';



// Rol ve Yetki İşlemleri
import CreateRole from '../Components/RoleAndPermissions/CreateRole';
import CreatePermission from '../Components/RoleAndPermissions/CreatePermission';
import AssignPermission from '../Components/RoleAndPermissions/AssignPermission';
import ListRolePermissions from '../Components/RoleAndPermissions/ListRolePermissions';
import UpdateRole from '../Components/RoleAndPermissions/UpdateRole';
import UpdatePermission from '../Components/RoleAndPermissions/UpdatePermission';

// Firma İşlemleri

import CreateFirm from '../Components/FirmOperations/CreateFirm';
import ListFirms from '../Components/FirmOperations/ListFirms';
import UpdateFirm from '../Components/FirmOperations/UpdateFirm';
import ListFirmUsers from '../Components/FirmOperations/ListFirmUsers';
import CreateSector from '../Components/FirmOperations/CreateSector';
import ListSectors from '../Components/FirmOperations/ListSectors';
import UpdateSector from '../Components/FirmOperations/UpdateSector';
import ToggleFirmStatus from '../Components/FirmOperations/ToggleFirmStatus';
import DeleteFirm from '../Components/FirmOperations/DeleteFirm';

// Şube İşlemleri

import ListAllBranches from '../Components/BranchOperations/ListAllBranches';
import ListFirmBranches from '../Components/BranchOperations/ListFirmBranches';
import CreateBranch from '../Components/BranchOperations/CreateBranch';
import UpdateBranch from '../Components/BranchOperations/UpdateBranch';
import ToggleBranchStatus from '../Components/BranchOperations/ToggleBranchStatus';
import DeleteBranch from '../Components/BranchOperations/DeleteBranch';


import BranchOperationsHome from '../Components/BranchOperations/BranchOperationsHome';
import UserOperationsHome from '../Components/UserOperations/UserOperationsHome';
import RoleAndPermissionsHome from '../Components/RoleAndPermissions/RoleAndPermissionsHome';
import FirmOperationsHome from '../Components/FirmOperations/FirmOperationsHome';
import AnalysisHome from '../Components/Analysis/AnalysisHome';

import ModulesHome from '../Components/Modules/ModulesHome';
import CameraManagementHome from '../Components/CameraManagement/CameraManagementHome';
import LogReportsHome from '../Components/LogReports/LogReportsHome';
import SystemSettingsHome from '../Components/SystemSettings/SystemSettingsHome';
import DeleteUser from '../Components/UserOperations/DeleteUser';
import AlarmsHome from '../Components/Alarms/AlarmsHome';
import ServersHome from '../Components/Servers/ServersHome';
import UserHome from './UserHome';


export default class UserDashBoard extends Component {

  
  render() {
    return (
      <div className={styles.container}>
        <Sidebar panelName="Kullanıcı Paneli" menuItems={UserSideBarMenu} />
        <div className={styles.main}>

          <div className={styles.TopContainer}>

          <Topbar isAdmin={false} notificationCount={3} />

          </div>

          <div className={styles.scrollableArea}>

          <UserInfoBar/>

          <Routes>
            <Route path="" element={<UserHome/>} />
            
           
             {/* Kullanıcı İşlemleri */}
             <Route path="user-ops/" element={<UserOperationsHome/>} />
             <Route path="user-ops/create" element={<CreateUser />} />
             <Route path="user-ops/list" element={<ListUser />} />
             <Route path="user-ops/update" element={<UpdateUser />} />
             <Route path="user-ops/assign-role" element={<AssignRole />} />
             <Route path="user-ops/assign-branch" element={<AssignBranch />} />
             <Route path="user-ops/delete" element={<DeleteUser />} />
             
           
             {/* Rol ve Yetki İşlemleri */}
             <Route path="role-permissions/" element={<RoleAndPermissionsHome/>} />
             <Route path="role-permissions/create-role" element={<CreateRole />} />
             <Route path="role-permissions/create-permission" element={<CreatePermission />} />
             <Route path="role-permissions/assign-permission" element={<AssignPermission />} />
             <Route path="role-permissions/list-role-permissions" element={<ListRolePermissions />} />
             <Route path="role-permissions/update-role" element={<UpdateRole />} />
             <Route path="role-permissions/update-permission" element={<UpdatePermission />} />
           
             {/* Firma İşlemleri */}

             <Route path="firm-ops/create" element={<CreateFirm />} />
             <Route path="firm-ops/" element={<FirmOperationsHome />} />
             <Route path="firm-ops/list" element={<ListFirms />} />
             <Route path="firm-ops/update" element={<UpdateFirm />} />

             <Route path="firm-ops/list-users" element={<ListFirmUsers />} />
             
             <Route path="firm-ops/create-sector" element={<CreateSector />} />
             <Route path="firm-ops/list-sectors" element={<ListSectors />} />
             <Route path="firm-ops/update-sector" element={<UpdateSector />} />
             <Route path="firm-ops/toggle-status" element={<ToggleFirmStatus />} />
             <Route path="firm-ops/delete" element={<DeleteFirm />} /> 
           
             {/* Şube İşlemleri */}

             <Route path="branch-ops/" element={<BranchOperationsHome/>} />
             <Route path="branch-ops/list-all" element={<ListAllBranches />} />
             <Route path="branch-ops/list-by-firm" element={<ListFirmBranches />} />
             <Route path="branch-ops/create" element={<CreateBranch />} />
             <Route path="branch-ops/update" element={<UpdateBranch />} />
             <Route path="branch-ops/toggle-status" element={<ToggleBranchStatus />} />
             <Route path="branch-ops/delete" element={<DeleteBranch />} /> 
           
             {/* Modüller */}

             <Route path="modules/" element={<ModulesHome />} />
             {/* <Route path="modules/list" element={<ListModules />} />
             <Route path="modules/create" element={<CreateModule />} /> */}
           
             {/* Analizler */}

             <Route path="analysis/" element={<AnalysisHome/>} />
             {/* <Route path="analysis/general" element={<GeneralAnalysis />} />
             <Route path="analysis/realtime" element={<RealtimeAnalysis />} />
             <Route path="analysis/end-of-day" element={<EndOfDayReports />} /> */}


              {/* Alarmlar */}
              <Route path="alarms/" element={<AlarmsHome/>} />


              {/* Sunucular */}
              <Route path="server-ops/" element={<ServersHome/>} />
            

           
             {/* Kamera Yönetimi */}

             <Route path="camera-management/" element={<CameraManagementHome />} />
             {/* <Route path="camera-management/list" element={<ListCameras />} />
             <Route path="camera-management/create" element={<CreateCamera />} />
             <Route path="camera-management/update" element={<UpdateCamera />} /> */}
           
             {/* Log Raporları */}

             <Route path="log-reports/" element={<LogReportsHome />} />
             {/* <Route path="log-reports/firm" element={<FirmLogs />} />
             <Route path="log-reports/branch" element={<BranchLogs />} />
             <Route path="log-reports/user" element={<UserLogs />} /> */}
           
             {/* Sistem Ayarları */}

             <Route path="system-settings/" element={<SystemSettingsHome />} />
             {/* <Route path="system-settings/general" element={<GeneralSettings />} />
             <Route path="system-settings/user" element={<UserSettings />} /> */}


           </Routes>

           </div>
          
        </div>
      </div>
    );
  }
}
