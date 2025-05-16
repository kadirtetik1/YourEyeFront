import React, { Component } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
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
    this.setState({ [name]: value });
  };

  handlePhoneChange = (phone, country, e, name) => {
    const numericPhone = phone.replace(/\D/g, '');
    this.setState({ [name]: numericPhone });
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
              {config.type === 'tel' ? (


                  <div className={styles.phoneWrapper}>
                  <PhoneInput
                    country={'tr'}
                    value={this.state[key]}
                    onFocus={() => this.setState({ [`${key}Focused`]: true })}
                    onBlur={() => this.setState({ [`${key}Focused`]: false })}
                    onChange={(phone) => this.handlePhoneChange(phone, null, null, key)}
                    inputClass={styles.phoneInput}
                    buttonClass={styles.flagButton}
                    containerClass={styles.phoneContainer}
                    dropdownClass={styles.phoneDropdown}
                    countryCodeEditable={false}
                    placeholder=""
                  />
                  <label className={`${styles.labelPhone} ${(this.state[`${key}Focused`] || this.state[key]) ? styles.labelActive : ''}`}>
                    {config.label}
                  </label>
                  </div>



              ) : (
                <div className={styles.inputWrapper}>
                  <input
                    type={config.type || 'text'}
                    name={key}
                    value={this.state[key]}
                    onChange={this.handleChange}
                    className={styles.input}
                    placeholder=" "
                  />
                  <label className={styles.label}>{config.label}</label>
                </div>
              )}
            </div>
          ))}
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.button}>Kaydet</button>
          </div>
        </form>
      </div>
    );
  }
}
