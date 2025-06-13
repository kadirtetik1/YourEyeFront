import React, { Component } from 'react'
import CardSlider from '../../components/Base/CardSlider/CardSlider';
import styles from '../Components/ComponentDash.module.css'

import { FaBuilding, FaUsers} from 'react-icons/fa';
import { FaComputer } from "react-icons/fa6";
import { PiSecurityCameraFill } from "react-icons/pi";
import { AiOutlineApartment } from "react-icons/ai";
import MapComponent from '../../components/Base/MapComponent/MapComponent';

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


const dummyBranches = [
  { branchId: 'BR001', name: 'Ankamall AVM', lat: 39.946, lng: 32.820 },
  { branchId: 'BR002', name: 'Address Eryaman', lat: 39.905, lng: 32.644 },
  { branchId: 'BR003', name: 'Kentpark AVM', lat: 39.892, lng: 32.742 },
  { branchId: 'BR004', name: 'Afyon Erenler Mah.', lat: 38.737, lng: 30.543 },
  { branchId: 'BR005', name: 'Adana Terrapark', lat: 37.004, lng: 35.337 },
  { branchId: 'BR006', name: 'Adıyaman Aryon', lat: 37.764, lng: 38.278 },
  { branchId: 'BR007', name: 'Amasya Merkez', lat: 40.654, lng: 35.834 },
  { branchId: 'BR008', name: 'Antalya Kaleiçi', lat: 36.884, lng: 30.707 },
  { branchId: 'BR009', name: 'Aksaray Merkez', lat: 38.368, lng: 34.035 },
  { branchId: 'BR010', name: 'Afyon Merkez', lat: 38.763, lng: 30.540 },
  { branchId: 'BR011', name: 'Ataşehir Bulvar 216', lat: 40.985, lng: 29.126 },
  { branchId: 'BR012', name: 'Bakırköy Carousel AVM', lat: 40.975, lng: 28.857 },
  { branchId: 'BR013', name: 'Beşiktaş Çarşı', lat: 41.042, lng: 29.008 },
  { branchId: 'BR014', name: 'Kadıköy Bahariye', lat: 40.987, lng: 29.027 },
  { branchId: 'BR015', name: 'Karşıyaka Mavişehir', lat: 38.483, lng: 27.017 },
  { branchId: 'BR016', name: 'Konya Kule Site AVM', lat: 37.872, lng: 32.484 },
  { branchId: 'BR017', name: 'Malatya Park AVM', lat: 38.354, lng: 38.312 },
  { branchId: 'BR018', name: 'Mersin Forum AVM', lat: 36.782, lng: 34.580 },
  { branchId: 'BR019', name: 'Samsun Piazza AVM', lat: 41.286, lng: 36.339 },
  { branchId: 'BR020', name: 'Trabzon Meydan', lat: 41.001, lng: 39.719 },
];


export default class UserHome extends Component {
  render() {
    return (
      <div className={styles.container}>
        <MapComponent addresses={dummyBranches} />



        <CardSlider title="Genel Durum" items={generalStats} /> 
        <CardSlider title="Yeni Kullanıcılar" items={recentUsersDetailed} /> 
        <CardSlider title="Genel Durum" items={generalStats} /> 
        <CardSlider title="Yeni Kullanıcılar" items={recentUsersDetailed} /> 
        <CardSlider title="Genel Durum" items={generalStats} /> 
        
        
      </div>
    )
  }
}
