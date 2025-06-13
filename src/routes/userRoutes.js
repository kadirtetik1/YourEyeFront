

import CreateUser from '../screens/Components/UserOperations/CreateUser';
import ListUser from '../screens/Components/UserOperations/ListUser';
import UpdateUser from '../screens/Components/UserOperations/UpdateUser';
import AssignBranch from '../screens/Components/UserOperations/AssignBranch';
import AssignRole from '../screens/Components/UserOperations/AssignRole';
import DeleteUser from '../screens/Components/UserOperations/DeleteUser';

import RoleAndPermissionsHome from '../screens/Components/RoleAndPermissions/RoleAndPermissionsHome';
import CreateRole from '../screens/Components/RoleAndPermissions/CreateRole';
import CreatePermission from '../screens/Components/RoleAndPermissions/CreatePermission';
import AssignPermission from '../screens/Components/RoleAndPermissions/AssignPermission';
import ListRolePermissions from '../screens/Components/RoleAndPermissions/ListRolePermissions';
import UpdateRole from '../screens/Components/RoleAndPermissions/UpdateRole';
import UpdatePermission from '../screens/Components/RoleAndPermissions/UpdatePermission';


import FirmOperationsHome from '../screens/Components/FirmOperations/FirmOperationsHome';
import CreateFirm from '../screens/Components/FirmOperations/CreateFirm';
import ListFirms from '../screens/Components/FirmOperations/ListFirms';
import UpdateFirm from '../screens/Components/FirmOperations/UpdateFirm';
import ListFirmUsers from '../screens/Components/FirmOperations/ListFirmUsers';
import CreateSector from '../screens/Components/FirmOperations/CreateSector';
import ListSectors from '../screens/Components/FirmOperations/ListSectors';
import UpdateSector from '../screens/Components/FirmOperations/UpdateSector';
import ToggleFirmStatus from '../screens/Components/FirmOperations/ToggleFirmStatus';
import DeleteFirm from '../screens/Components/FirmOperations/DeleteFirm';


import BranchOperationsHome from '../screens/Components/BranchOperations/BranchOperationsHome';
import ListAllBranches from '../screens/Components/BranchOperations/ListAllBranches';
import ListFirmBranches from '../screens/Components/BranchOperations/ListFirmBranches';
import CreateBranch from '../screens/Components/BranchOperations/CreateBranch';
import UpdateBranch from '../screens/Components/BranchOperations/UpdateBranch';
import ToggleBranchStatus from '../screens/Components/BranchOperations/ToggleBranchStatus';
import DeleteBranch from '../screens/Components/BranchOperations/DeleteBranch';


import UserOperationsHome from '../screens/Components/UserOperations/UserOperationsHome';

import ModulesHome from '../screens/Components/Modules/ModulesHome';
import AnalysisHome from '../screens/Components/Analysis/AnalysisHome';
import ServersHome from '../screens/Components/Servers/ServersHome';
import CameraManagementHome from '../screens/Components/CameraManagement/CameraManagementHome';
import LogReportsHome from '../screens/Components/LogReports/LogReportsHome';
import SystemSettingsHome from '../screens/Components/SystemSettings/SystemSettingsHome';
import AlarmsHome from '../screens/Components/Alarms/AlarmsHome';
import UserHome from '../screens/UserPanel/UserHome';





export const userRoutes = [ 
  { path: "", element: <UserHome/> },
  

  { path: "user-ops/", element: <UserOperationsHome /> },
  { path: "user-ops/create", element: <CreateUser /> },
  { path: "user-ops/list", element: <ListUser /> },
  { path: "user-ops/update", element: <UpdateUser /> },
  { path: "user-ops/assign-role", element: <AssignRole /> },
  { path: "user-ops/assign-branch", element: <AssignBranch /> },
  { path: "user-ops/delete", element: <DeleteUser /> },
  
 
  { path: "role-permissions/", element: <RoleAndPermissionsHome /> },
  { path: "role-permissions/create-role", element: <CreateRole /> },
  { path: "role-permissions/create-permission", element: <CreatePermission /> },
  { path: "role-permissions/assign-permission", element: <AssignPermission /> },
  { path: "role-permissions/list-role-permissions", element: <ListRolePermissions /> },
  { path: "role-permissions/update-role", element: <UpdateRole /> },
  { path: "role-permissions/update-permission", element: <UpdatePermission /> },

  { path: "firm-ops/", element: <FirmOperationsHome /> },
  { path: "firm-ops/create", element: <CreateFirm /> },
  { path: "firm-ops/list", element: <ListFirms /> },
  { path: "firm-ops/update", element: <UpdateFirm /> },
  { path: "firm-ops/list-users", element: <ListFirmUsers /> },
  { path: "firm-ops/create-sector", element: <CreateSector /> },
  { path: "firm-ops/list-sectors", element: <ListSectors /> },
  { path: "firm-ops/update-sector", element: <UpdateSector /> },
  { path: "firm-ops/toggle-status", element: <ToggleFirmStatus /> },
  { path: "firm-ops/delete", element: <DeleteFirm /> },

  { path: "branch-ops/", element: <BranchOperationsHome /> },
  { path: "branch-ops/list-all", element: <ListAllBranches /> },
  { path: "branch-ops/list-by-firm", element: <ListFirmBranches /> },
  { path: "branch-ops/create", element: <CreateBranch /> },
  { path: "branch-ops/update", element: <UpdateBranch /> },
  { path: "branch-ops/toggle-status", element: <ToggleBranchStatus /> },
  { path: "branch-ops/delete", element: <DeleteBranch /> },


  /*Alt Başlıklarının Componentleri Henüz Oluşturulmamış Başlıklar*/

  { path: "alarms/", element: <AlarmsHome/>},
  { path: "servers/", element: <ServersHome/>},
  { path: "modules/", element: <ModulesHome /> },
  { path: "analysis/", element: <AnalysisHome /> },
  { path: "camera-management/", element: <CameraManagementHome /> },
  { path: "log-reports/", element: <LogReportsHome /> },
  { path: "system-settings/", element: <SystemSettingsHome /> }
];


 export const UserSideBarMenu = [
   { title: "Anasayfa", subItems: [] },
   { title: "Kullanıcı İşlemleri", subItems: ["Yeni Kullanıcı Oluştur", "Kullanıcıları Listele", "Kullanıcı Bilgilerini Güncelle", "Kullanıcıya Şube Ata/Güncelle", "Kullanıcıya Rol Ata/Güncelle", "Kullanıcı Aktif/Pasif Durumunu Güncelle","Kullanıcı Sil"] },
   { title: "Rol Ve Yetki İşlemleri", subItems: ["Yeni Rol Oluştur", "Yeni Yetki Oluştur", "Role Yetki Ata", "Role Ait Yetkileri Getir", "Rol Bilgilerini Güncelle", "Yetki Bilgilerini Güncelle"] },
   { title: "Firma İşlemleri", subItems: ["Yeni Firma Oluştur", "Bütün Firmaları Listele", "Firma Bilgilerini Güncelle", "Firmaya Bağlı Kullanıcıları Getir", "Yeni Sektör Oluştur", "Sektörleri Göster", "Sektör Bilgilerini Güncelle", "Firma Aktif/Pasif Durumunu Güncelle", "Firma Sil"] },
   { title: "Şube İşlemleri", subItems: ["Yeni Şube Oluştur","Bütün Şubeleri Getir", "Firmaya Bağlı Şubeleri Getir", "Şube Bilgilerini Güncelle", "Şube Aktif/Pasif Durumunu Güncelle", "Şube Sil"] },
   { title: "Alarmlar", subItems: ["Firma Alarmları","Şube Alarmları"] },
   { title: "Analizler Ve Raporlar", subItems: ["Genel Analizler", "Anlık Analizler", "Gün Sonu Raporları"] },
   { title: "Sunucu İşlemleri", subItems: ["Yeni Sunucu Ekle","Yeni Sunucu Ekle","Sunucu Bilgilerini Getir","Sunucu Aktif/Pasif Durumunu Güncelle","Sunucu Sil"] },
   { title: "Modül İşlemleri", subItems: ["Modülleri Listele", "Yeni Modül Ekle", "Modül İçeriğini Güncelle", "Modülü Sil"] },
   { title: "Kamera Yönetimi", subItems: ["Kameraları Listele", "Yeni Kamera Ekle", "Kamera Bilgilerini Güncelle"] },
   { title: "Log Raporları", subItems: ["Firmaya Ait Raporları Getir", "Şubeye Ait Raporları Getir", "Kullanıcıya Ait Raporları Getir"] },
   { title: "Sistem Ayarları", subItems: ["Genel Ayarlar", "Kullanıcı Ayarları"] }
 ];
 