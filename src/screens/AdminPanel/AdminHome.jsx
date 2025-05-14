import React, { Component } from 'react'
import CardSlider from '../../components/Base/CardSlider/CardSlider';
import WidgetCard from '../../components/Base/Widgets/WidgetCard';
import styles from '../Components/ComponentDash.module.css'

import { FaBars, FaChevronDown, FaChevronUp, FaHome, FaBuilding, FaUsers, FaTools, FaUserShield } from 'react-icons/fa';
import { FaComputer } from "react-icons/fa6";
import { PiPresentationChart, PiSecurityCameraFill } from "react-icons/pi";
import { AiOutlineApartment } from "react-icons/ai";
import { TbReportSearch } from "react-icons/tb";
import { FaChalkboardUser } from "react-icons/fa6";

const generalStats = [
  { title: "Toplam Firma", value: 245, subtitle1: "Aktif", subtitle1Value: 190, subtitle2: "Pasif", subtitle2Value: 55, icon: <FaBuilding /> },
  { title: "Toplam Şube", value: 847, subtitle1: "Aktif", subtitle1Value: 635, subtitle2: "Pasif", subtitle2Value: 212, icon: <AiOutlineApartment /> },
  { title: "Toplam Kullanıcı", value: 1220, subtitle1: "Aktif", subtitle1Value: 980, subtitle2: "Pasif", subtitle2Value: 240, icon: <FaUsers /> },
  { title: "Toplam Kamera", value: 45, subtitle1: "Aktif", subtitle1Value: 39, subtitle2: "Pasif", subtitle2Value: 6, icon: <PiSecurityCameraFill /> },
  { title: "Toplam Kamera", value: 45, subtitle1: "Aktif", subtitle1Value: 39, subtitle2: "Pasif", subtitle2Value: 6, icon: <PiSecurityCameraFill /> },
  { title: "Toplam Kamera", value: 45, subtitle1: "Aktif", subtitle1Value: 39, subtitle2: "Pasif", subtitle2Value: 6, icon: <PiSecurityCameraFill /> },
  
];



export default class AdminHome extends Component {
  render() {
    return (
      <div className={styles.container}>
        <CardSlider title="Genel Durum" items={generalStats} /> 
        <CardSlider title="Genel Durum" items={generalStats} /> 
        <CardSlider title="Genel Durum" items={generalStats} /> 
        <CardSlider title="Genel Durum" items={generalStats} /> 
        <CardSlider title="Genel Durum" items={generalStats} /> 
        <CardSlider title="Genel Durum" items={generalStats} /> 
        <CardSlider title="Genel Durum" items={generalStats} /> 
        <CardSlider title="Genel Durum" items={generalStats} /> 
        
      </div>
    )
  }
}
