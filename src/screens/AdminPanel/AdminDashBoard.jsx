import React, { Component } from 'react'
import Topbar from '../../components/Base/Topbar/Topbar';
import Sidebar from '../../components/Base/Sidebar/Sidebar';
import UserInfoBar from '../../components/Base/UserInfoBar/UserInfoBar';
import styles from './AdminDash.module.css';


import { Routes, Route } from 'react-router-dom';


import AdminHome from './AdminHome';
import CreateAdmin from '../Components/AdminOperations/CreateAdmin'
import ListAdmins from '../Components/AdminOperations/ListAdmins'
import UpdateAdmin from '../Components/AdminOperations/UpdateAdmin'
import DeleteAdmin from '../Components/AdminOperations/DeleteAdmin'


import CreateUser from '../Components/UserOperations/CreateUser';
import ListUser from '../Components/UserOperations/ListUser';
import UpdateUser from '../Components/UserOperations/UpdateUser';
import AssignBranch from '../Components/UserOperations/AssignBranch';
import AssignRole from '../Components/UserOperations/AssignRole';
import UpdateUserRole from '../Components/UserOperations/UpdateUserRole';
import UpdateUserBranch from '../Components/UserOperations/UpdateUserBranch';


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


import AdminOpsHome from '../Components/AdminOperations/AdminOpsHome';
import BranchOperationsHome from '../Components/BranchOperations/BranchOperationsHome';
import UserOperationsHome from '../Components/UserOperations/UserOperationsHome';
import RoleAndPermissionsHome from '../Components/RoleAndPermissions/RoleAndPermissionsHome';
import FirmOperationsHome from '../Components/FirmOperations/FirmOperationsHome';
import AnalysisHome from '../Components/Analysis/AnalysisHome';

import ModulesHome from '../Components/Modules/ModulesHome';
import CameraManagementHome from '../Components/CameraManagement/CameraManagementHome';
import LogReportsHome from '../Components/LogReports/LogReportsHome';
import SystemSettingsHome from '../Components/SystemSettings/SystemSettingsHome';

// Modüller

// import ListModules from '../Components/ModuleOperations/ListModules';
// import CreateModule from '../Components/ModuleOperations/CreateModule';

// // Analizler

// import GeneralAnalysis from '../Components/AnalysisOperations/GeneralAnalysis';
// import RealtimeAnalysis from '../Components/AnalysisOperations/RealtimeAnalysis';
// import EndOfDayReports from '../Components/AnalysisOperations/EndOfDayReports';

// Kamera Yönetimi

// import ListCameras from '../Components/CameraManagement/ListCameras';
// import CreateCamera from '../Components/CameraManagement/CreateCamera';
// import UpdateCamera from '../Components/CameraManagement/UpdateCamera';

// Log Raporları

// import FirmLogs from '../Components/LogReports/FirmLogs';
// import BranchLogs from '../Components/LogReports/BranchLogs';
// import UserLogs from '../Components/LogReports/UserLogs';

// Sistem Ayarları

// import GeneralSettings from '../Components/SystemSettings/GeneralSettings';
// import UserSettings from '../Components/SystemSettings/UserSettings';



const sideBarMenu = [
  { title: "Anasayfa", subItems: [] },

  { title: "Admin İşlemleri", subItems: ["Yeni Admin Ekle","Adminleri Göster", "Admin Bilgileri Güncelle", "Admin Sil"] },

  { title: "Kullanıcı İşlemleri", subItems: ["Yeni Kullanıcı Oluştur","Kullanıcıları Listele", "Kullanıcı Bilgilerini Güncelle", 
  "Kullanıcıya Şube Ata", "Kullanıcı Şube Bilgilerini Güncelle", "Kullanıcıya Yeni Rol Ata", "Kullanıcı Rol Bilgilerini Güncelle",] },

  { title: "Rol Ve Yetki İşlemleri", subItems: ["Yeni Rol Oluştur","Yeni Yetki Oluştur", "Role Yetki Ata", "Role Ait Yetkileri Getir", "Rol Bilgilerini Güncelle", "Yetki Bilgilerini Güncelle"]},

  { title: "Firma İşlemleri", subItems: ["Yeni Firma Oluştur", "Bütün Firmaları Listele", "Firma Bilgilerini Güncelle", "Firmaya Bağlı Kullanıcıları Getir",
  "Yeni Sektör Oluştur","Sektörleri Göster","Sektör Bilgilerini Güncelle", "Firma Aktif/Pasif Durumunu Güncelle", "Firma Sil"] },
  
  { title: "Şube İşlemleri", subItems: ["Bütün Şubeleri Getir", "Firmaya Bağlı Şubeleri Getir", "Yeni Şube Oluştur", "Şube Bilgilerini Güncelle", "Şube Aktif/Pasif Durumunu Güncelle", "Şube Sil"] },

  { title: "Modüller", subItems: ["Modülleri Listele", "Yeni Modül Ekle", "Modül İçeriğini Güncelle", "Modülü Sil"] }, // EKSİK

  { title: "Analizler", subItems: ["Genel Analizler", "Anlık Analizler", "Gün Sonu Raporları"] }, //EKSİK

  { title: "Kamera Yönetimi", subItems: ["Kameraları Listele", "Yeni Kamera Ekle", "Kamera Bilgilerini Güncelle"] }, //EKSİK

  { title: "Log Raporları", subItems: ["Firmaya Ait Raporları Getir","Şubeye Ait Raporları Getir", "Kullanıcıya Ait Raporları Getir"]},

  { title: "Sistem Ayarları", subItems: ["Genel Ayarlar","Kullanıcı Ayarları"] }
];




export default class AdminDashBoard extends Component {

  
  render() {
    return (
      <div className={styles.container}>
        <Sidebar panelName="Admin Paneli" menuItems={sideBarMenu} />
        <div className={styles.main}>

          <div className={styles.TopContainer}>

          <Topbar isAdmin={true} notificationCount={5} />

          </div>

          <div className={styles.scrollableArea}>

          <UserInfoBar/>

          <Routes>
            <Route path="" element={<AdminHome />} />
            
             {/* Admin İşlemleri */}
             <Route path="admin-ops/" element={<AdminOpsHome />} />
             <Route path="admin-ops/create" element={<CreateAdmin />} />
             <Route path="admin-ops/list" element={<ListAdmins />} />
             <Route path="admin-ops/update" element={<UpdateAdmin />} />
             <Route path="admin-ops/delete" element={<DeleteAdmin />} />
           
             {/* Kullanıcı İşlemleri */}
             <Route path="user-ops/" element={<UserOperationsHome/>} />
             <Route path="user-ops/create" element={<CreateUser />} />
             <Route path="user-ops/list" element={<ListUser />} />
             <Route path="user-ops/update" element={<UpdateUser />} />
             <Route path="user-ops/assign-role" element={<AssignRole />} />
             <Route path="user-ops/assign-branch" element={<AssignBranch />} />
             <Route path="user-ops/update-role" element={<UpdateUserRole />} />
             <Route path="user-ops/update-branch" element={<UpdateUserBranch />} />
           
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
