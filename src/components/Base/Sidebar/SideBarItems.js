// src/config/sidebarItems.js

// Keyleri swaggerla aynı isimlendir.
// Roller, Firma yetkilisinin ekstra eklediği rollerden nasıl arttırılabilir düşün. 

// ** Rol-yetki oluşturma yetkisi olan kullanıcı kendi rollerinden inherit edebilir. Yani kendisine tanımlı olmayan yetkilerden atama yapamaz.

const sidebarItems = [
    {
      key: 'dashboard',
      label: 'Anasayfa',
      icon: 'FaHome',
      path: '/dashboard',
      roles: ['firmaAdmin', 'youreyeAdmin', 'subeMuduru', 'personel'],
    },
    {
      key: 'firma',
      label: 'Firma İşlemleri',
      icon: 'FaBuilding',
      roles: ['firmaAdmin', 'youreyeAdmin'],
      children: [
        { key: 'getBranches', label: 'Bağlı Şubeleri Listele', path: '/subeler', roles: ['firmaAdmin', 'youreyeAdmin'] },
        { key: 'postBranches', label: 'Yeni Şube Ekle', path: '/sube-ekle', roles: ['youreyeAdmin'] },
        { key: 'putBranches', label: 'Şube Bilgileri Güncelle', path: '/sube-guncelle', roles: ['firmaAdmin', 'youreyeAdmin'] },
      ]
    },
    {
      key: 'kullanici',
      label: 'Kullanıcı İşlemleri',
      icon: 'FaUser',
      roles: ['firmaAdmin', 'youreyeAdmin'],
      children: [
        { key: 'getCompanyUsers', label: 'Firmaya Bağlı Kullanıcıları Getir', path: '/firma-kullanicilari', roles: ['firmaAdmin', 'youreyeAdmin'] },
        { key: 'getBranchUsers', label: 'Şubeye Bağlı Kullanıcıları Getir', path: '/sube-kullanicilari', roles: ['firmaAdmin', 'youreyeAdmin'] },
        { key: 'getPermissions', label: 'Roller Bağlı Yetkileri Getir', path: '/rol-yetkileri', roles: ['firmaAdmin','youreyeAdmin'] },
        { key: 'postUser', label: 'Yeni Kullanıcı Ekle', path: '/kullanici-ekle', roles: ['firmaAdmin', 'youreyeAdmin'] },
        { key: 'postRole', label: 'Yeni Rol ve Yetkilendirme Oluştur', path: '/rol-ekle', roles: ['firmaAdmin','youreyeAdmin'] },
        { key: 'assignRoleToUser', label: 'Kullanıcıya Rol Ata', path: '/rol-ata', roles: ['youreyeAdmin', 'firmaAdmin'] },
        { key: 'assignBranchToUser', label: 'Kullanıcıya Şube Ata', path: '/sube-ata', roles: ['youreyeAdmin', 'firmaAdmin'] },
        { key: 'updateUser', label: 'Kullanıcı Bilgilerini Düzenle', path: '/kullanici-duzenle', roles: ['firmaAdmin', 'youreyeAdmin'] },
        
      ]
    },
    {
      key: 'moduller',
      label: 'Modüller',
      icon: 'FaCogs',
      path: '/moduller',
      roles: ['firmaAdmin', 'youreyeAdmin']
    },
    {
      key: 'analizler',
      label: 'Analizler',
      icon: 'FaChartPie',
      path: '/analizler',
      roles: ['firmaAdmin', 'youreyeAdmin']
    },
    {
      key: 'kameralar',
      label: 'Kameralar',
      icon: 'FaCamera',
      path: '/kameralar',
      roles: ['firmaAdmin', 'youreyeAdmin']
    },
    {
      key: 'ayarlar',
      label: 'Ayarlar',
      icon: 'FaTools',
      path: '/ayarlar',
      roles: ['firmaAdmin', 'youreyeAdmin']
    }
  ];
  
  export default sidebarItems;
  