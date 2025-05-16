import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import styles from './PostForm.module.css';

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    const flatState = {};
    Object.entries(props.initialState).forEach(([key, config]) => {
      flatState[key] = config.value;
    });
    this.state = flatState;
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    const fieldConfig = this.props.initialState[name];

    let newValue = value;

    if (fieldConfig.type === 'tel') {
      // Maskeyi gösterirken normal formatlı gösterir
      newValue = value.replace(/\D/g, ''); // Sadece rakamları tutar
    }

    this.setState({ [name]: newValue });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <div className={styles.container}>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          {Object.entries(this.props.initialState).map(([key, config]) => (
            <div key={key} className={styles.formGroup}>
              <label className={styles.label}>{config.label}</label>
              
              {config.type === 'tel' ? (
                <InputMask
                  mask="0 (999) - 999 - 9999"
                  maskChar=""
                  value={this.formatPhoneDisplay(this.state[key])}
                  onChange={this.handleChange}
                  name={key}
                  className={styles.input}
                />
              ) : (
                <input
                  type={config.type || 'text'}
                  name={key}
                  value={this.state[key]}
                  onChange={this.handleChange}
                  className={styles.input}
                />
              )}
            </div>
          ))}
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.button}>
              Kaydet
            </button>
          </div>
        </form>
      </div>
    );
  }

  // Telefon numarasını gösterirken maskeye uygun hale getir
  formatPhoneDisplay = (value) => {
    if (!value) return '';
    let formatted = value;
    if (value.length > 1) {
      formatted = `0 (${value.slice(1, 4)}) - ${value.slice(4, 7)} - ${value.slice(7, 11)}`;
    }
    return formatted;
  };
}
