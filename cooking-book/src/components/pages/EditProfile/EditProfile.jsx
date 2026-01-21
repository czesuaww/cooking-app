import { editProfileAction } from '../../../actions/editProfileAction';
import useTheme from '../../../hooks/useTheme';
import style from '../EditProfile/EditProfile.module.css';
import { useActionState } from 'react';
import { initState } from '../../../reducer';


const EditProfile = () => {
    const { textColor, bgColor, formBorder } = useTheme();
    const [state, formAction, isPending] = useActionState(editProfileAction, initState);


    return (
        <div className={style.container} >
            {state.succes === false && (
                <div className={style.error}>{state.error.join('. ')}</div>
            )}
            {state.succes === true && (
                <div className={style.succes}>Saved!</div>
            )}
            <form action={formAction}
                className={style.editForm}
                style={{
                    color: textColor,
                    background: bgColor,
                    border: `2px solid ${formBorder}`
                }}
            >
                <div className={style.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        required
                        defaultValue={state.values.email}
                        name='email'
                    />
                </div>

                <div className={style.inputGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        defaultValue={state.values.password}
                        name='password'
                    />
                </div>
                <button
                    type="submit"
                    className={style.loginBtn}
                    disabled={isPending}
                >
                    {isPending ? 'Saving...' : 'Save'}
                </button>
            </form>
        </div>
    )
}

export default EditProfile;