import React, { Component } from 'react'
import CardSlider from '../../components/Base/CardSlider/CardSlider';
import styles from '../Components/ComponentDash.module.css'

import { FaBuilding, FaUsers} from 'react-icons/fa';
import { FaComputer } from "react-icons/fa6";
import { PiSecurityCameraFill } from "react-icons/pi";
import { AiOutlineApartment } from "react-icons/ai";

const generalStats = [
  { title: "Toplam Firma", value: 245, subtitle1: "Aktif", subtitle1Value: 190, subtitle2: "Pasif", subtitle2Value: 55, lastUpdated:"2 dk önce", icon: <FaBuilding /> },
  { title: "Toplam Şube", value: 847, subtitle1: "Aktif", subtitle1Value: 635, subtitle2: "Pasif", subtitle2Value: 212, lastUpdated:"5 dk önce", icon: <AiOutlineApartment /> },
  { title: "Toplam Kullanıcı", value: 1220, subtitle1: "Aktif", subtitle1Value: 980, subtitle2: "Pasif", subtitle2Value: 240, lastUpdated:"3 dk önce", icon: <FaUsers /> },
  { title: "Toplam Kamera", value: 45, subtitle1: "Aktif", subtitle1Value: 39, subtitle2: "Pasif", subtitle2Value: 6, lastUpdated:"1 dk önce", icon: <PiSecurityCameraFill /> },
  { title: "Toplam Modül", value: 78, subtitle1: "Aktif", subtitle1Value: 70, subtitle2: "Pasif",subtitle2Value: 8, lastUpdated:"5 dakika önce", icon: <FaComputer /> },
  { title: "Toplam Sunucu", value: 237, subtitle1: "Aktif", subtitle1Value: 197, subtitle2: "Pasif", subtitle2Value: 40, lastUpdated:"7 dakika önce", icon: <FaComputer /> },
  
  
];

const recentUsersDetailed = [
  {
    title: "Yeni Kullanıcı",
    value: "Ali Veli",
    subtitle1: "Firma",
    subtitle1Value: "TechCorp",
    subtitle2: "Şube",
    subtitle2Value: "İstanbul - Merkez",
    lastUpdated: "1 dk önce",
    icon: <FaUsers />
  },
  {
    title: "Yeni Kullanıcı",
    value: "Ayşe Demir",
    subtitle1: "Firma",
    subtitle1Value: "SafeSecure",
    subtitle2: "Şube",
    subtitle2Value: "Ankara - Çankaya",
    lastUpdated: "3 dk önce",
    icon: <FaUsers />
  },
  {
    title: "Yeni Kullanıcı",
    value: "Mehmet Çelik",
    subtitle1: "Firma",
    subtitle1Value: "VisionPlus",
    subtitle2: "Şube",
    subtitle2Value: "Bursa - Osmangazi",
    lastUpdated: "5 dk önce",
    icon: <FaUsers />
  },
  {
    title: "Yeni Kullanıcı",
    value: "Zeynep Yılmaz",
    subtitle1: "Firma",
    subtitle1Value: "DataLine",
    subtitle2: "Şube",
    subtitle2Value: "İzmir - Konak",
    lastUpdated: "8 dk önce",
    icon: <FaUsers />
  },
  {
    title: "Yeni Kullanıcı",
    value: "Kerem Aksoy",
    subtitle1: "Firma",
    subtitle1Value: "NetWorks",
    subtitle2: "Şube",
    subtitle2Value: "Adana - Seyhan",
    lastUpdated: "10 dk önce",
    icon: <FaUsers />
  },
  {
    title: "Yeni Kullanıcı",
    value: "Elif Öztürk",
    subtitle1: "Firma",
    subtitle1Value: "SecureGate",
    subtitle2: "Şube",
    subtitle2Value: "Kayseri - Melikgazi",
    lastUpdated: "15 dk önce",
    icon: <FaUsers />
  },
  {
    title: "Yeni Kullanıcı",
    value: "Barış Korkmaz",
    subtitle1: "Firma",
    subtitle1Value: "CloudSys",
    subtitle2: "Şube",
    subtitle2Value: "Eskişehir - Tepebaşı",
    lastUpdated: "20 dk önce",
    icon: <FaUsers />
  },
  {
    title: "Yeni Kullanıcı",
    value: "Sena Karaca",
    subtitle1: "Firma",
    subtitle1Value: "OpenAI Partner",
    subtitle2: "Şube",
    subtitle2Value: "Trabzon - Ortahisar",
    lastUpdated: "30 dk önce",
    icon: <FaUsers />
  },
  {
    title: "Yeni Kullanıcı",
    value: "Burak Erdem",
    subtitle1: "Firma",
    subtitle1Value: "GlobalTech",
    subtitle2: "Şube",
    subtitle2Value: "Diyarbakır - Bağlar",
    lastUpdated: "45 dk önce",
    icon: <FaUsers />
  },
  {
    title: "Yeni Kullanıcı",
    value: "Melis Kılıç",
    subtitle1: "Firma",
    subtitle1Value: "FutureWorks",
    subtitle2: "Şube",
    subtitle2Value: "Antalya - Muratpaşa",
    lastUpdated: "1 saat önce",
    icon: <FaUsers />
  },
];




export default class AdminHome extends Component {
  render() {
    return (
      <div className={styles.container}>
        <CardSlider title="Genel Durum" items={generalStats} /> 
        <CardSlider title="Yeni Kullanıcılar" items={recentUsersDetailed} /> 
        <CardSlider title="Genel Durum" items={generalStats} /> 
        <CardSlider title="Yeni Kullanıcılar" items={recentUsersDetailed} /> 
        <CardSlider title="Genel Durum" items={generalStats} /> 
        
        
      </div>
    )
  }
}
