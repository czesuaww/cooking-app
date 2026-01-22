import { useActionState, useEffect } from 'react';
import Input from '../../../UI/Input';
import style from '../Register/Register.module.css';
import { loginAction } from '../../../../actions/loginAction';
import { initState } from '../../../../store';

const Register = () => {
    const [state, formAction, isPedngin] = useActionState(loginAction, initState);

    useEffect(() => {
        setTimeout(() => {
            console.log(state.success, state.error)
        }, 1000);
    }, [state])

    return (
        <div className={style.container} >
            <form
                className={style.registerForm}
                action={formAction}
            >
                <h2 className={style.title}>Register</h2>
                <div className={style.inputGroup}>
                    <Input
                        desc='email'
                        label='Email'
                        name='email'
                        error={state.error.email}
                        type='email'
                    />
                </div>
                <div className={style.inputGroup}>
                    <Input
                        desc='password'
                        label='Password'
                        type='password'
                        name='password'
                        error={state.error.password}
                    />
                </div>

                <button className={style.loginBtn}>
                    {isPedngin ? 'Loading...' : 'Register'}
                </button>
            </form>
        </div>
    )
}

export default Register;