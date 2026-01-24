import Input from '../../../UI/Input';
import style from '../Register/Register.module.css';
import { useNavigate } from 'react-router';
import useAuth from '../../../../hooks/useAuth';
import { useActionState, useEffect } from 'react';
import { initState } from '../../../../store';
import { registerAction } from '../../../../actions/registerAction';

const Register = () => {
    const navigate = useNavigate();
    const [, setUser] = useAuth();
    const [state, formData, isPending] = useActionState(registerAction, initState);

    useEffect(() => {
        if (state.success && state.data) {
            setUser(true, state.data);
            navigate('/my-profile');
        }
    }, [state.success, state.data, setUser, navigate])

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