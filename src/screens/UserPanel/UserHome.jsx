import React, { Component } from 'react'
import CardSlider from '../../components/Base/CardSlider/CardSlider';
import styles from '../Components/ComponentDash.module.css'

import { FaBuilding, FaUsers} from 'react-icons/fa';
import { FaComputer } from "react-icons/fa6";
import { PiSecurityCameraFill } from "react-icons/pi";
import { AiOutlineApartment } from "react-icons/ai";
import MapComponent from '../../components/Base/MapComponent/MapComponent';
import CameraView from '../../components/Base/CameraView/CameraView';

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


const now = new Date();
const minutesAgo = (min) => new Date(now.getTime() - min * 60000).toISOString();

const dummyBranches = [
  { branchId: 'BR001', name: 'Ankamall AVM', lat: 39.946, lng: 32.820, lastPing: minutesAgo(5) },
  { branchId: 'BR002', name: 'Address Eryaman', lat: 39.905, lng: 32.644, lastPing: minutesAgo(7) },
  { branchId: 'BR003', name: 'Kentpark AVM', lat: 39.892, lng: 32.742, lastPing: minutesAgo(12) }, // offline
  { branchId: 'BR004', name: 'Afyon Erenler Mah.', lat: 38.737, lng: 30.543, lastPing: minutesAgo(15) }, // offline
  { branchId: 'BR005', name: 'Adana Terrapark', lat: 37.004, lng: 35.337, lastPing: minutesAgo(4) },
  { branchId: 'BR006', name: 'Adıyaman Aryon', lat: 37.764, lng: 38.278, lastPing: minutesAgo(3) },
  { branchId: 'BR007', name: 'Amasya Merkez', lat: 40.654, lng: 35.834, lastPing: minutesAgo(14) }, // offline
  { branchId: 'BR008', name: 'Antalya Kaleiçi', lat: 36.884, lng: 30.707, lastPing: minutesAgo(2) },
  { branchId: 'BR009', name: 'Aksaray Merkez', lat: 38.368, lng: 34.035, lastPing: minutesAgo(1) },
  { branchId: 'BR010', name: 'Afyon Merkez', lat: 38.763, lng: 30.540, lastPing: minutesAgo(9) },
];


export default class UserHome extends Component {
  render() {
    return (
      <div className={styles.container}>
        <MapComponent addresses={dummyBranches} />

        <CameraView
        cameraName="Giriş Kapısı - Kamera 1"
        streamUrl="http://localhost:5000/video_feed"
        isOffline={false} // örnek olarak dışarıdan hesapla
      />

       <CameraView
        cameraName="Müzayede Alanı - Kamera 1"
        streamUrl="http://localhost:5001/video_feed2"
        isOffline={false} // örnek olarak dışarıdan hesapla
      />



        <CardSlider title="Genel Durum" items={generalStats} /> 
        <CardSlider title="Yeni Kullanıcılar" items={recentUsersDetailed} /> 
        <CardSlider title="Genel Durum" items={generalStats} /> 
        <CardSlider title="Yeni Kullanıcılar" items={recentUsersDetailed} /> 
        <CardSlider title="Genel Durum" items={generalStats} /> 
        
        
      </div>
    )
  }
}
