import styles from './LoginLayout.module.css';

function LoginLayout(props) {
    return (
      <div>
        <div className={styles['login-layout-header']}>
            <div className={styles['login-layout-logo']}>SSI</div>
        </div>
        <div className={styles['login-layout-content']}>
          <div>{props.children}</div>
        </div>
      </div>  
    );
}

export default LoginLayout;