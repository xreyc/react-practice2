import LoginLayout from "../../layout/LoginLayout";
import LoginForm from "./component/LoginForm";
/** Styles */
import styles from './LoginScreen.module.css';

function LoginPage() {
    return (<LoginLayout>
        <div className={styles['login-container']}>
            <LoginForm/>
        </div>
    </LoginLayout>);
}

export default LoginPage;