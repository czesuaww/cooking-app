import Input from '../../../UI/Input';
import style from '../Register/Register.module.css';
import axiosAuth from '../../../../axiosAuth';
import { useNavigate } from 'react-router';
import useAuth from '../../../../hooks/useAuth';
import { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [user, setUser] = useAuth();

    const sendData = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const res = await axiosAuth.post('/accounts:signUp', { email: email, password: password, returnSecureToken: true });
            setUser(true, res.data);
            navigate('/my-profile');
            setLoading(false);
        } catch (err) {
            const errorMessage = err.response?.data?.error?.message;
            console.log(errorMessage, "ERROR MESSAGE")
            if (errorMessage === 'EMAIL_EXISTS') {
                setError({ email: 'Email exists' });
            } else if (errorMessage.includes('WEAK_PASSWORD')) {
                setError({ password: 'Password is too weak' });
            } else if (errorMessage === 'TOO_MANY_ATTEMPTS_TRY_LATER') {
                setError({ general: 'Too many attempts! Try again later' });
            } else if (errorMessage === 'INVALID_EMAIL') {
                setError({ invalidEmail: 'Invalid email' });
            }
            setLoading(false);
        }
    }


    return (
        <div className={style.container} >
            <form
                className={style.registerForm}
                onSubmit={sendData}
            >
                <h2 className={style.title}>Register</h2>
                <div className={style.inputGroup}>
                    <Input
                        desc='email'
                        label='Email'
                        name='email'
                        error={error.email || error.invalidEmail}
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={style.inputGroup}>
                    <Input
                        desc='password'
                        label='Password'
                        type='password'
                        name='password'
                        error={error.password}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error.general && <h2 className={style.error}>{error.general}</h2>}
                <button type="submit" className={style.loginBtn}>
                    {loading ? 'Loading...' : 'Register'}
                </button>
            </form>
        </div>
    )
}

export default Register;