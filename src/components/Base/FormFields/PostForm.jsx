import React, { Component } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from './PostForm.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default class PostForm extends Component {
  constructor(props) {
    super(props);
    const flatState = {};
    Object.entries(props.initialState).forEach(([key, config]) => {
      flatState[key] = config.value;
    });
    this.state = {
      ...flatState,
      dropdownOpen: {}
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handlePhoneChange = (phone, country, e, name) => {
    const numericPhone = phone.replace(/\D/g, '');
    this.setState({ [name]: numericPhone });
  };

  toggleDropdown = (key) => {
    this.setState((prevState) => ({
      dropdownOpen: {
        ...prevState.dropdownOpen,
        [key]: !prevState.dropdownOpen[key]
      }
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      onSubmit,
      apiEndpoint,
      successMessage = "İşlem başarılı.",
      reloadOnSuccess = true
    } = this.props;

    const formData = { ...this.state };

    const emptyFields = Object.entries(formData).filter(([_, value]) =>
      typeof value === 'string' ? !value.trim() : !value
    );
    if (emptyFields.length > 0) {
      toast.error("Lütfen tüm alanları doldurunuz.", { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }

    if (onSubmit) {
      return onSubmit(formData);
    }

    if (!apiEndpoint) {
      toast.error("API adresi tanımlı değil.", { position: toast.POSITION.BOTTOM_RIGHT });
      return;
    }

    fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(async res => {
        const contentType = res.headers.get('content-type');
        let message = '';
    
        if (contentType && contentType.includes('application/json')) {
          const json = await res.json();
    
          // ✅ Eğer json içinde message varsa onu kullan, yoksa successMessage
          message = typeof json.message === 'string'
            ? json.message
            : this.props.successMessage; // dışarıdan verilen mesaj
        } else {
          const text = await res.text();
          message = text || this.props.successMessage;
        }
    
        if (!res.ok) throw new Error(message);
    
        toast.success(message, { position: toast.POSITION.BOTTOM_RIGHT });
    
        if (this.props.reloadOnSuccess) {
          setTimeout(() => window.location.reload(), 2000);
        }
      })
      .catch(err => {
        toast.error(err.message || "Beklenmedik bir hata oluştu", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      });
  };

  render() {
    const { initialState, buttonLabel = "Gönder" } = this.props;

    return (
      <div className={styles.container}>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          {Object.entries(initialState).map(([key, config]) => (
            <div key={key} className={styles.formGroup}>
              {config.type === 'tel' ? (
                <div className={styles.phoneWrapper}>
                  <PhoneInput
                    country={'tr'}
                    value={this.state[key]}
                    onChange={(phone) => this.handlePhoneChange(phone, null, null, key)}
                    inputClass={styles.phoneInput}
                    buttonClass={styles.flagButton}
                    containerClass={styles.phoneContainer}
                    dropdownClass={styles.phoneDropdown}
                    countryCodeEditable={false}
                    placeholder=""
                  />
                  <label className={`${styles.labelPhone} ${this.state[key] ? styles.labelActive : ''}`}>
                    {config.label}
                  </label>
                </div>
              ) : config.type === 'dropdown' ? (
                <div className={styles.inputWrapper}>
                  <div className={styles.dropdownWrapper}>
                    <select
                      name={key}
                      value={this.state[key]}
                      onChange={this.handleChange}
                      onClick={() => this.toggleDropdown(key)}
                      className={styles.dropdown}
                    >
                      <option value="" disabled hidden></option>
                      {config.options?.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <div className={styles.dropdownIcon}>
                      {this.state.dropdownOpen[key] ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                    <label className={`${styles.label} ${this.state[key] ? styles.labelActive : ''}`}>
                      {config.label}
                    </label>
                  </div>
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
            <button type="submit" className={styles.button}>{buttonLabel}</button>
          </div>
        </form>
        <ToastContainer />
      </div>
    );
  }
}
