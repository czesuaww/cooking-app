import { useActionState, useEffect } from 'react';
import useTheme from '../../../../hooks/useTheme';
import style from '../Login/Login.module.css';
import useAuth from '../../../../hooks/useAuth';
import { useNavigate } from 'react-router';
import Input from '../../../UI/Input';
import { initState } from '../../../../store';
import { loginAction } from '../../../../actions/loginAction';

const Login = () => {
    const { textColor, bgColor, formBorder } = useTheme();
    const [, setUser] = useAuth();
    const navigate = useNavigate();

    const [state, formAction, isPending] = useActionState(loginAction, initState);

    useEffect(() => {
        if (state.success && state.data) {
            setUser(true, state.data);
            navigate('/my-profile');
        }
    }, [state.success, state.data, setUser, navigate])

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