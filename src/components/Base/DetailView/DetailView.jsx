import React, { Component } from 'react';
import styles from './DetailView.module.css';

import { TailSpin } from 'react-loader-spinner';


export default class DetailView extends Component {
  state = {
    details: null,
    loading: true,
    error: null
  };

  componentDidMount() {
    const { id, apiBaseUrl } = this.props;
    if (!id || !apiBaseUrl) {
      this.setState({ error: "ID veya API URL eksik.", loading: false });
      return;
    }

    fetch(`${apiBaseUrl}/${id}`, { headers: { 'Accept': '*/*' } })
      .then(res => res.json())
      .then(data => this.setState({ details: data, loading: false }))
      .catch(err => this.setState({ error: err.message, loading: false }));
  }

  render() {
    const { labelMap = {}, visibleKeys = [], multivalueKeys = [] } = this.props;
    const { details, loading, error } = this.state;

    if (loading) return <div>Yükleniyor...</div>;
    if (error) return <div>Hata: {error}</div>;
    if (!details) return <div>Veri bulunamadı</div>;

    return (
      <div className={styles.detailContainer}>
        {Object.entries(details)
          .filter(([key]) => visibleKeys.length === 0 || visibleKeys.includes(key))
          .map(([key, value], index) => (
            <div key={index} className={styles.detailRow}>
              <div className={styles.cellTitle}>{labelMap?.[key] || key}:</div>
              
              <div className={styles.cellValue}>
                {Array.isArray(value) && multivalueKeys.includes(key) ? (
                  <ul className={styles.multiList}>
                    {value.map((item, i) => (
                      <li key={i} className={styles.multiItem}>{item}</li>
                    ))}
                  </ul>
                ) : (
                   value
                )}
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}
