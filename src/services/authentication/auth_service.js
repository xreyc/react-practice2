import axios from "axios";

class AuthService {
    async loginUser (email, password) {
        try {
            const response = await axios.post(
                'https://fakestoreapi.com/auth/login',
                {
                    username: email,
                    password: password,
                }
            );
            if(response.status == 200) {
                localStorage.setItem('access_token', response.data['token']);
                return {statue: 200, message: 'Successful'}
            } else {
                return {status: 500, message: 'Something went wrong'}
            }
        } catch (err) {
            return {status: 500, message: 'Something went wrong'}
        }
    }
}

export default AuthService;