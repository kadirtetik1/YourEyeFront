import React, { Component } from 'react'
import Topbar from '../../components/Base/Topbar/Topbar';
import Sidebar from '../../components/Base/Sidebar/Sidebar';
import WidgetCard from '../../components/Base/Widgets/WidgetCard';
import UserInfoBar from '../../components/Base/UserInfoBar/UserInfoBar';
import styles from './AdminDash.module.css';

import { FaUser, FaChartLine } from 'react-icons/fa';



const sideBarMenu = [
  { title: "Anasayfa", subItems: [] },

  { title: "Admin İşlemleri", subItems: ["Yeni Admin Ekle","Adminleri Göster", "Admin Bilgileri Güncelle", "Admin Sil"] },

  { title: "Kullanıcı İşlemleri", subItems: ["Yeni Kullanıcı Oluştur","Kullanıcıları Listele", "Kullanıcı Bilgilerini Güncelle", 
  "Kullanıcıya Şube Ata", "Kullanıcı-Şube Bilgilerini Güncelle", "Kullanıcıya Yeni Rol Ata", "Kullanıcı-Rol Bilgilerini Güncelle",] },

  { title: "Rol/Yetki İşlemleri", subItems: ["Yeni Rol Oluştur","Yeni Yetki Oluştur", "Role Yetki Ata", "Role Ait Yetkileri Getir", "Rol Bilgilerini Güncelle", "Yetki Bilgilerini Güncelle"]},

  { title: "Firma İşlemleri", subItems: ["Yeni Firma Oluştur", "Bütün Firmaları Listele", "Firma Bilgilerini Güncelle", "Firmaya Bağlı Kullanıcıları Getir(Swaggerda Eksik)",
  "Yeni Sektör Oluştur","Sektörleri Göster","Sektör Bilgilerini Güncelle", "Firma Aktif/Pasif Durumunu Güncelle", "Firma Sil"] },
  
  { title: "Şube İşlemleri", subItems: ["Bütün Şubeleri Getir", "Firmaya Bağlı Şubeleri Getir", "Yeni Şube Oluştur", "Şube Bilgilerini Güncelle", "Şube Aktif/Pasif Durumunu Güncelle", "Şube Sil"] },

  { title: "Modüller", subItems: ["Modülleri Listele", "Yeni Modül Ekle"] }, // EKSİK

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

      <Topbar isAdmin={true} notificationCount={5} />

        <UserInfoBar />

        <div className={styles.dashBoard}>
          <WidgetCard title="Toplam Müşteri" value="254" subtitle="Son 12 Saatte" icon={<FaUser />} />
          <WidgetCard title="Anlık Müşteri" value="47" subtitle="05.05.2024 - 13:56" icon={<FaUser />} />
          <WidgetCard title="Geçen Haftaya Göre" value="57%" subtitle="Yükseliş" icon={<FaChartLine />} />
          <WidgetCard title="Geçen Haftaya Göre" value="57%" subtitle="Yükseliş" icon={<FaChartLine />} />
          
        </div>
      </div>
    </div>
    )
  }
}
