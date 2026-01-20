import useTheme from '../../../../hooks/useTheme';
import style from '../Login/Login.module.css';

const Login = () => {
    const { textColor, bgColor, formBorder } = useTheme();
    console.log(formBorder, 'login')
    return (
        <div className={style.container} >
            <form
                className={style.loginForm}
                style={{ color: textColor, background: bgColor, border: `2px solid ${formBorder}` }}
            >
                <h2 className={style.title}>Login</h2>

                <div className={style.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                    />
                </div>

                <div className={style.inputGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                    />
                </div>

                <button type="submit" className={style.loginBtn}>
                    Log In
                </button>
            </form>
        </div>
    );
}

export default Login;