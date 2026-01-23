import { useActionState } from 'react';
import useTheme from '../../../../hooks/useTheme';
import style from '../Login/Login.module.css';
import useAuth from '../../../../hooks/useAuth';
import { useNavigate } from 'react-router';
import Input from '../../../UI/Input';
import axiosAuth from '../../../../axiosAuth';
import { initState } from '../../../../store';

const Login = () => {
    const { textColor, bgColor, formBorder } = useTheme();
    const [, setUser] = useAuth();
    const navigate = useNavigate();

    const sendData = async (prevState, formData) => {
        const email = formData.get('email');
        const password = formData.get('password');

        if (!email || !password) {
            return {
                success: false,
                error: { general: "Please fill in all fields" },
                values: { email, password }
            };
        }

        try {
            const res = await axiosAuth.post('/accounts:signInWithPassword', { email: email, password: password, returnSecureToken: true });
            setUser(true, res.data);
            navigate('/my-profile');
            return { success: true, error: {}, values: { email, password } };
        } catch (err) {
            const errorMessage = err.response?.data?.error?.message;
            let newError = { general: 'Something went wrong' };

            if (errorMessage === 'INVALID_LOGIN_CREDENTIALS') {
                newError = { general: "Accout doesn't exists or is incorrect" }
            } else if (errorMessage === 'USER_DISABLED') {
                newError = { general: 'User is disabled' }
            }

            return {
                success: false,
                error: newError,
                values: { email, password }
            }
        }
    }
    const [state, formAction, isPending] = useActionState(sendData, initState);

    return (
        <div className={style.container} >
            <form
                className={style.loginForm}
                style={{
                    color: textColor,
                    background: bgColor,
                    border: `2px solid ${formBorder}`
                }}
                action={formAction}
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
                        error={state.error?.email}
                        defaultValue={state.values?.email}
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
                        error={state.error?.password}
                        defaultValue={state.values?.password}
                    />
                    {<p className={style.error}>
                        {state.error.general}
                    </p>}
                </div>
                <button type="submit" className={style.loginBtn}>
                    {isPending ? 'Loading...' : 'Login'}
                </button>

            </form>
        </div>
    );
}

export default Login;