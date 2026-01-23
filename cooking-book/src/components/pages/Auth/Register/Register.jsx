import Input from '../../../UI/Input';
import style from '../Register/Register.module.css';
import axiosAuth from '../../../../axiosAuth';
import { useNavigate } from 'react-router';
import useAuth from '../../../../hooks/useAuth';
import { useActionState } from 'react';
import { initState } from '../../../../store';

const Register = () => {
    const navigate = useNavigate();
    const [, setUser] = useAuth();

    const sendData = async (prevState, formData) => {
        const email = formData.get('email');
        const password = formData.get('password');

        if (!email || !password) {
            return {
                success: false,
                error: { general: "Please fill in all fields" },
                values: { email, password }
            }
        }

        try {
            const res = await axiosAuth.post('/accounts:signUp', { email: email, password: password, returnSecureToken: true });
            setUser(true, res.data);
            navigate('/my-profile');
            return { success: false, error: {}, values: { email, password } }
        } catch (err) {
            const errorMessage = err.response?.data?.error?.message;
            console.log(errorMessage, "ERROR MESSAGE")

            let newError = { general: 'Something went wrong' };

            if (errorMessage === 'EMAIL_EXISTS') {
                newError = { email: 'Email exists' }
            } else if (errorMessage.includes('WEAK_PASSWORD')) {
                newError = { password: 'Password is too weak, minimum 6 characters' }
            } else if (errorMessage === 'TOO_MANY_ATTEMPTS_TRY_LATER') {
                newError = { general: 'Too many attempts! Try again later' }
            } else if (errorMessage === 'INVALID_EMAIL') {
                newError = { email: 'Invalid email' }
            }

            return {
                success: false,
                error: newError,
                values: { email, password }
            }
        }
    }

    const [state, formData, isPending] = useActionState(sendData, initState);


    return (
        <div className={style.container} >
            <form
                className={style.registerForm}
                action={formData}
            >
                <h2 className={style.title}>Register</h2>
                <div className={style.inputGroup}>
                    <Input
                        desc='email'
                        label='Email'
                        name='email'
                        error={state.error?.email}
                        defaultValue={state.values.email}
                        type='email'
                    />
                </div>
                <div className={style.inputGroup}>
                    <Input
                        desc='password'
                        label='Password'
                        type='password'
                        name='password'
                        error={state.error?.password}
                        defaultValue={state.values?.password}

                    />
                </div>
                {state.error.general && <h2 className={style.error}>{state.error.general}</h2>}
                <button type="submit" className={style.loginBtn}>
                    {isPending ? 'Loading...' : 'Register'}
                </button>
            </form>
        </div>
    )
}

export default Register;