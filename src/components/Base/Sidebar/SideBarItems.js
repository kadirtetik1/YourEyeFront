// src/config/sidebarItems.js

// Keyleri swaggerla aynı isimlendir

const sidebarItems = [
    {
      key: 'dashboard',
      label: 'Anasayfa',
      icon: 'FaHome',
      path: '/dashboard',
      roles: ['admin', 'subeMuduru', 'user'],
    },
    {
      key: 'firma',
      label: 'Firma İşlemleri',
      icon: 'FaBuilding',
      roles: ['admin', 'firmaYetkilisi'], 
      children: [
        { key: 'subeListele', label: 'Bağlı Şubeleri Listele', path: '/subeler', roles: ['admin'] },
        { key: 'subeEkle', label: 'Yeni Şube Ekle', path: '/sube-ekle', roles: ['admin'] },
        { key: 'subeGuncelle', label: 'Şube Bilgileri Güncelle', path: '/sube-guncelle', roles: ['admin', 'firmaYetkilisi'] },
      ]
    },
    {
      key: 'kullanici',
      label: 'Kullanıcı İşlemleri',
      icon: 'FaUser',
      roles: ['admin', 'firmaYetkilisi'],
      children: [
        { key: 'kullaniciEkle', label: 'Yeni Kullanıcı Ekle', path: '/kullanici-ekle', roles: ['admin'] },
        { key: 'rolOlustur', label: 'Yeni Rol ve Yetkilendirme Oluştur', path: '/rol-ekle', roles: ['admin'] },
        { key: 'rolAta', label: 'Kullanıcıya Rol Ata', path: '/rol-ata', roles: ['admin', 'firmaYetkilisi'] },
      ]
    },
    {
      key: 'moduller',
      label: 'Modüller',
      icon: 'FaCogs',
      path: '/moduller',
      roles: ['admin', 'user']
    },
    {
      key: 'analizler',
      label: 'Analizler',
      icon: 'FaChartPie',
      path: '/analizler',
      roles: ['admin', 'user']
    },
    {
      key: 'kameralar',
      label: 'Kameralar',
      icon: 'FaCamera',
      path: '/kameralar',
      roles: ['admin', 'user']
    },
    {
      key: 'ayarlar',
      label: 'Ayarlar',
      icon: 'FaTools',
      path: '/ayarlar',
      roles: ['admin']
    },
  ];
  
  export default sidebarItems;
  