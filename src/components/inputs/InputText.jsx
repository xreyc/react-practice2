import styles from './InputText.module.css';

function InputText({type, value, placeholder, onChange, style}) {
    return <input
        className={styles['input-text']}
        type={type} placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        style={style}
    />
}

export default InputText;