import React, { Component } from 'react'
import Topbar from '../../components/Base/Topbar/Topbar';
import Sidebar from '../../components/Base/Sidebar/Sidebar';
import WidgetCard from '../../components/Base/Widgets/WidgetCard';
import UserInfoBar from '../../components/Base/UserInfoBar/UserInfoBar';
import styles from './UserDashBoard.module.css';

import { FaHome, FaBuilding, FaUser, FaTools, FaChartLine } from 'react-icons/fa';
import { FaComputer } from "react-icons/fa6";
import { PiPresentationChart, PiSecurityCameraFill  } from "react-icons/pi";


const sideBarMenu = [
  { title: "Anasayfa", subItems: [] },
  { title: "Firma İşlemleri", subItems: ["Şubeleri Listele", "Yeni Şube Ekle"] },
  { title: "Kullanıcı İşlemleri", subItems: ["Kullanıcıları Listele", "Yeni Kullanıcı Ekle"] },
  { title: "Modüller", subItems: ["Modülleri Listele", "Yeni Modül Ekle"] },
  { title: "Analizler", subItems: ["Genel Analizler", "Anlık Analizler", "Gün Sonu Raporları"] },
  { title: "Kamera Yönetimi", subItems: ["Kameraları Listele", "Yeni Kamera Ekle", "Kamera Bilgilerini Güncelle"] },
  { title: "Sistem Ayarları", subItems: ["Genel Ayarlar","Kullanıcı Ayarları"] }
];

export default class UserDashBoard extends Component {
  render() {
    return (
      <div className={styles.container}>

        
     <Sidebar panelName="Kullanıcı Paneli" menuItems={sideBarMenu} />


      <div className={styles.main}>
      <Topbar isAdmin={false} notificationCount={3} />

        
        <UserInfoBar />

        <div className={styles.grid}>
          <WidgetCard title="Toplam Müşteri" value="254" subtitle="Son 12 Saatte" icon={<FaUser />} />
          <WidgetCard title="Anlık Müşteri" value="47" subtitle="05.05.2024 - 13:56" icon={<FaUser />} />
          <WidgetCard title="Geçen Haftaya Göre" value="57%" subtitle="Yükseliş" icon={<FaChartLine />} />
          <WidgetCard title="Geçen Haftaya Göre" value="57%" subtitle="Yükseliş" icon={<FaChartLine />} />
          <WidgetCard title="Geçen Haftaya Göre" value="57%" subtitle="Yükseliş" icon={<FaChartLine />} />
          <WidgetCard title="Geçen Haftaya Göre" value="57%" subtitle="Yükseliş" icon={<FaChartLine />} />
          <WidgetCard title="Geçen Haftaya Göre" value="57%" subtitle="Yükseliş" icon={<FaChartLine />} />
          <WidgetCard title="Geçen Haftaya Göre" value="57%" subtitle="Yükseliş" icon={<FaChartLine />} />
          <WidgetCard title="Geçen Haftaya Göre" value="57%" subtitle="Yükseliş" icon={<FaChartLine />} />
          <WidgetCard title="Geçen Haftaya Göre" value="57%" subtitle="Yükseliş" icon={<FaChartLine />} />
          <WidgetCard title="Geçen Haftaya Göre" value="57%" subtitle="Yükseliş" icon={<FaChartLine />} />
          
        </div>
      </div>
    </div>
    )
  }
}
