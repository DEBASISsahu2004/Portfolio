import PropTypes from 'prop-types';
import styles from './input.module.css';

const Input = ({ type, value, placeholder, name, labelText, onChange }) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name}>{labelText}</label>
      {name === 'message' ? ( 
        <textarea name={name} value={value} placeholder={placeholder} onChange={onChange} />
      ) : (
        <input type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} />
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;