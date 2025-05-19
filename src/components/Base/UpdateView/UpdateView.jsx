import React, { Component } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from './UpdateView.module.css';



export default class UpdateView extends Component {
  state = {
    formData: {}
  };

  componentDidMount() {
    const { details } = this.props;
    this.setState({ formData: { ...details } });
  }

  handleChange = (key, value) => {
    this.setState(prevState => ({
      formData: { ...prevState.formData, [key]: value }
    }));
  };

  handlePhoneChange = (phone, name) => {
    const numericPhone = phone.replace(/\D/g, '');
    this.handleChange(name, numericPhone);
  };

  handleUpdate = () => {
    const { onUpdate } = this.props;
    if (onUpdate) onUpdate(this.state.formData);
  };

  render() {
    const { labelMap = {}, visibleKeys = [], disabledKeys = [], phoneFields = [] } = this.props;
    const { formData } = this.state;

    return (
      <div className={styles.updateContainer}>
        {Object.entries(formData)
          .filter(([key]) => visibleKeys.length === 0 || visibleKeys.includes(key))
          .map(([key, value], index) => {
            const isDisabled = disabledKeys.includes(key);
            const isPhone = phoneFields.includes(key);

            return (
              <div key={index} className={styles.updateRow}>
                <label className={styles.label}>{labelMap[key] || key}:</label>
                {isPhone ? (
                  <PhoneInput
                    country={'tr'}
                    value={value}
                    onChange={(phone) => this.handlePhoneChange(phone, key)}
                    inputClass={`${styles.phoneInput} ${isDisabled ? styles.disabled : ''}`}
                    buttonClass={styles.flagButton}
                    containerClass={styles.phoneContainer}
                    dropdownClass={styles.phoneDropdown}
                    countryCodeEditable={false}
                    placeholder=""
                    disabled={isDisabled}
                  />
                ) : (
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => this.handleChange(key, e.target.value)}
                    disabled={isDisabled}
                    className={`${styles.input} ${isDisabled ? styles.disabled : ''}`}
                  />
                )}
              </div>
            );
          })}

        <button className={styles.updateButton} onClick={this.handleUpdate}>
          Güncelle
        </button>
      </div>
    );
  }
}
