// Route Eşleştirme Tablosu
export const routeMap = {

  "Anasayfa": "",

  // Admin İşlemleri
  "Admin İşlemleri": "admin-ops",
  "Yeni Admin Ekle": "admin-ops/create",
  "Adminleri Göster": "admin-ops/list",
  "Admin Bilgilerini Güncelle": "admin-ops/update",
  "Admin Sil": "admin-ops/delete",

  // Kullanıcı İşlemleri
  "Kullanıcı İşlemleri": "user-ops",
  "Yeni Kullanıcı Oluştur": "user-ops/create",
  "Kullanıcıları Listele": "user-ops/list",
  "Kullanıcı Bilgilerini Güncelle": "user-ops/update",
  "Kullanıcıya Şube Ata/Güncelle": "user-ops/assign-branch",
  "Kullanıcıya Rol Ata/Güncelle": "user-ops/assign-role",
  "Kullanıcı Aktif/Pasif Durumunu Güncelle": "user-ops/toggle-status",
  "Kullanıcı Sil": "user-ops/delete",

  // Rol Ve Yetki İşlemleri
  "Rol Ve Yetki İşlemleri": "role-permissions",
  "Yeni Rol Oluştur": "role-permissions/create-role",
  "Yeni Yetki Oluştur": "role-permissions/create-permission",
  "Role Yetki Ata": "role-permissions/assign-permission",
  "Role Ait Yetkileri Getir": "role-permissions/list-role-permissions",
  "Rol Bilgilerini Güncelle": "role-permissions/update-role",
  "Yetki Bilgilerini Güncelle": "role-permissions/update-permission",

  // Firma İşlemleri
  "Firma İşlemleri": "firm-ops",
  "Yeni Firma Oluştur": "firm-ops/create",
  "Bütün Firmaları Listele": "firm-ops/list",
  "Firma Bilgilerini Güncelle": "firm-ops/update",
  "Firmaya Bağlı Kullanıcıları Getir": "firm-ops/list-users",
  "Yeni Sektör Oluştur": "firm-ops/create-sector",
  "Sektörleri Göster": "firm-ops/list-sectors",
  "Sektör Bilgilerini Güncelle": "firm-ops/update-sector",
  "Firma Aktif/Pasif Durumunu Güncelle": "firm-ops/toggle-status",
  "Firma Sil": "firm-ops/delete",

  // Şube İşlemleri
  "Şube İşlemleri": "branch-ops",
  "Bütün Şubeleri Getir": "branch-ops/list-all",
  "Firmaya Bağlı Şubeleri Getir": "branch-ops/list-by-firm",
  "Yeni Şube Oluştur": "branch-ops/create",
  "Şube Bilgilerini Güncelle": "branch-ops/update",
  "Şube Aktif/Pasif Durumunu Güncelle": "branch-ops/toggle-status",
  "Şube Sil": "branch-ops/delete",

  // Modüller
  "Modüller": "modules",
  "Modülleri Listele": "modules/list",
  "Yeni Modül Ekle": "modules/create",
  "Modül İçeriğini Güncelle": "modules/update",
  "Modülü Sil": "modules/delete",
  

  // Analizler
  "Analizler": "analysis",
  "Genel Analizler": "analysis/general",
  "Anlık Analizler": "analysis/realtime",
  "Gün Sonu Raporları": "analysis/end-of-day",

  // Kamera Yönetimi
  "Kamera Yönetimi": "camera-management",
  "Kameraları Listele": "camera-management/list",
  "Yeni Kamera Ekle": "camera-management/create",
  "Kamera Bilgilerini Güncelle": "camera-management/update",

  // Log Raporları
  "Log Raporları": "log-reports",
  "Firmaya Ait Raporları Getir": "log-reports/firm",
  "Şubeye Ait Raporları Getir": "log-reports/branch",
  "Kullanıcıya Ait Raporları Getir": "log-reports/user",

  // Sistem Ayarları
  "Sistem Ayarları": "system-settings",
  "Genel Ayarlar": "system-settings/general",
  "Kullanıcı Ayarları": "system-settings/user",
    
  };