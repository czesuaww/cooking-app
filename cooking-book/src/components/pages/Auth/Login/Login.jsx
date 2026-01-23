import { useState } from 'react';
import useTheme from '../../../../hooks/useTheme';
import style from '../Login/Login.module.css';
import useAuth from '../../../../hooks/useAuth';
import { useNavigate } from 'react-router';
import Input from '../../../UI/Input';
import axiosAuth from '../../../../axiosAuth';

const Login = () => {
    const { textColor, bgColor, formBorder } = useTheme();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [, setUser] = useAuth();

    const navigate = useNavigate();

    const sendData = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const res = await axiosAuth.post('/accounts:signInWithPassword', { email: email, password: password, returnSecureToken: true });
            setUser(true, res.data);
            navigate('/my-profile');
            setLoading(false);
        } catch (err) {
            const errorMessage = err.response?.data?.error?.message;
            console.log(errorMessage, "ERROR MESSAGE")
            if (errorMessage === 'INVALID_LOGIN_CREDENTIALS') {
                setError("Accout doesn't exists or password is incorrect");
            }
            setLoading(false);
        }
    }


    return (
        <div className={style.container} >
            <form
                className={style.loginForm}
                style={{
                    color: textColor,
                    background: bgColor,
                    border: `2px solid ${formBorder}`
                }}
                onSubmit={sendData}
            >
                <h2 className={style.title}>Login</h2>

                <div className={style.inputGroup}>
                    <Input
                        desc='email'
                        label='Email'
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        name='email'
                        // error={error.email || error.invalidEmail}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className={style.inputGroup}>
                    <Input
                        desc='password'
                        label='Password'
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        name='password'
                        // error={error.password}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className={style.error}>
                        {error}
                    </p>
                </div>
                <button type="submit" className={style.loginBtn}>
                    {loading ? 'Loading...' : 'Login'}
                </button>

            </form>
        </div>
    );
}

export default Login;