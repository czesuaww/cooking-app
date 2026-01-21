import { useActionState, useEffect } from 'react';
import useTheme from '../../../../hooks/useTheme';
import style from '../Login/Login.module.css';
import useAuth from '../../../../hooks/useAuth';
import { useNavigate } from 'react-router';
import { loginAction } from '../../../../actions/loginAction';
import { initState } from '../../../../reducer';

const Login = () => {
    const { textColor, bgColor, formBorder } = useTheme();
    const [state, formActom, isPending] = useActionState(loginAction, initState)
    const [, setUser] = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (state.success) {
            setUser(true);
            navigate('/my-profile');
        }
    }, [state.success, setUser, navigate]);

    return (
        <div className={style.container} >
            <form
                className={style.loginForm}
                style={{
                    color: textColor,
                    background: bgColor,
                    border: `2px solid ${formBorder}`
                }}
                action={formActom}
            >
                <h2 className={style.title}>Login</h2>

                <div className={style.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        name='email'
                        defaultValue={state.values.email}
                    />

                    <p className={style.error}>
                        {state.error.email}
                    </p>
                </div>

                <div className={style.inputGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        name='password'
                        defaultValue={state.values.password}
                    />
                    <p className={style.error}>
                        {state.error.password}
                    </p>
                </div>
                <button type="submit" className={style.loginBtn}>
                    {isPending ? 'Loading...' : 'Login'}
                </button>

            </form>
        </div>
    );
}

export default Login;