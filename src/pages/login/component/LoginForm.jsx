import { useState } from "react";
/** Styles */
import styles from './LoginForm.module.css'
/** Service */
import AuthService from '../../../services/authentication/auth_service';
/** Components */
import InputText from "../../../components/inputs/InputText";
import ButtonPrimary from "../../../components/buttons/ButtonPrimary";
import { useNavigate } from "react-router-dom";

const AuthServiceInstance = new AuthService();

function LoginForm() {
    const navigate = useNavigate();

    /** Form States */
    const [email, setEmail] = useState('mor_2314');
    const [password, setPassword] = useState('83r5^_');
    /** Loading States*/
    const [isLoading, setIsLoading] = useState(false);
    /** Error States */
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isError, setIsError] = useState(false);

    const onClickLogin = async () => {
        /** Reset validation */
        setIsEmailValid(true);
        setIsPasswordValid(true);
        setIsError(false);
        /** Validation */
        if(email == '') {
            setIsEmailValid(false);
            setIsError(true);
        }
        if(password == '') {
            setIsPasswordValid(false);
            setIsError(true);
        }

        /** API Request */
        setIsLoading(true);
        const loginResponse = await AuthServiceInstance.loginUser(email, password);
        if(loginResponse.statue == 200) {
            /** Navigation, close form */
            navigate("/dashboard");
        } else {
            setIsError(true);
        }
        setIsLoading(false);
    }

    return (<div className={styles['login-form']}>
        <div className={styles['login-form-header']}>LOGIN</div>
        <div className={styles['login-form-logo']}>SSI</div>
        <div>
            {isLoading && <div style={{marginBottom: '10px', textAlign: 'center'}}>Logging In...</div>}
            {isError && <div style={{marginBottom: '10px', textAlign: 'center', color: 'red'}}>Something went wrong</div>}

            <div>
                <InputText
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(value) => setEmail(value)}
                    style={{width: '100%', marginBottom: "10px"}}
                />
                {!isEmailValid && <div style={{color: 'red', fontSize: '11px'}}>Email is required</div>}
            </div>
            <div>
                <InputText
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(value) => setPassword(value)}
                    style={{width: '100%', marginBottom: "10px"}}
                />
                {!isPasswordValid && <div style={{color: 'red', fontSize: '11px'}}>Password is required</div>}
            </div>
            <div style={{textAlign: 'center'}}><ButtonPrimary label="Login" onClick={() => onClickLogin()}/></div>
        </div>
    </div>);
}

export default LoginForm;