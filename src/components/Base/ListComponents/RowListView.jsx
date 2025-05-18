import React, { useState, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";  // Arama ikonu
import styles from './RowListView.module.css';

export default function RowListView({
  data,
  visibleKeys = [],
  onDetail,
  labelMap,
  showDetailButton = false,  // Burada boolean değeri alıyoruz
}) {
  const [searchQuery, setSearchQuery] = useState(''); // Arama sorgusu durumu
  const [filteredData, setFilteredData] = useState(data); // Filtrelenmiş veriler

  // useEffect ile başlangıçta tüm veriler görünsün
  useEffect(() => {
    setFilteredData(data); // Başlangıçta filteredData'yı data ile eşitle
  }, [data]); // data değiştiğinde filtreyi güncelle

  // Arama işlemi
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = data.filter(item => {
      return Object.entries(item).some(([key, value]) => {
        if (visibleKeys.length === 0 || visibleKeys.includes(key)) {
          const stringValue = value ? value.toString().toLowerCase() : '';
          return stringValue.includes(query); // Arama sorgusunu karşılaştır
        }
        return false;
      });
    });
    setFilteredData(filtered); // Filtrelenmiş verileri güncelle
  };

  return (
    <div className={styles.listContainer}>
      {/* Arama alanı */}
      <div className={styles.searchContainer}>
        <FaSearch className={styles.searchIcon} /> {/* Arama ikonu sol tarafta */}
        <input
          type="text"
          className={styles.searchInput}
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Ara..."
        />
      </div>

      {/* Liste öğeleri */}
      {filteredData.length > 0 ? (
        filteredData.map((item, index) => (
          <div key={index} className={styles.row}>
            {Object.entries(item)
              .filter(([key]) => visibleKeys.length === 0 || visibleKeys.includes(key))
              .map(([key, value]) => (
                <span key={key} className={styles.cell}>
                  <div className={styles.cellTitle}>{labelMap?.[key] || key}:</div>
                  <div className={styles.cellValue}>{value}</div>
                </span>
              ))}

            {/* showDetailButton kontrolü ile Detay butonunun render edilmesi */}
            {showDetailButton && (
              <span className={styles.cell}>
                <button
                  className={styles.detailButton}
                  onClick={() => onDetail(item)}
                >
                  Detay
                </button>
              </span>
            )}
          </div>
        ))
      ) : (
        <div className={styles.empty}></div> // Hiç veri bulunamadı mesajını gösterme
      )}
    </div>
  );
}
