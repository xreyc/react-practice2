import styles from './ButtonPrimary.module.css';

function ButtonPrimary({label, onClick, style}) {
    return (
        <button className={styles['button-primary']} style={style}  onClick={() => onClick()}>
            {label}
        </button>
    );
}

export default ButtonPrimary;