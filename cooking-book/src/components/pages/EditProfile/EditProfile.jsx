import { editProfileAction } from '../../../actions/editProfileAction';
import useAuth from '../../../hooks/useAuth';
import useTheme from '../../../hooks/useTheme';
import { initState } from '../../../store';
import Input from '../../UI/Input';
import style from '../EditProfile/EditProfile.module.css';
import { useActionState } from 'react';


const EditProfile = () => {
    const [user] = useAuth();
    const { textColor, bgColor, formBorder } = useTheme();
    const actionFn = (prevState, formData) => editProfileAction(prevState, formData, user.idToken);
    const [state, formAction, isPending] = useActionState(actionFn, initState);

    return (
        <div className={style.container} >
            {/* {state.success === false && state.error?.general && (
                <div className={style.error}>
                    {typeof state.error.general === 'string' ? state.error.general : "Error occurred"}
                </div>
            )}
             */}
            {state.success === false && state.errors?.general &&
                <div className={style.error}>
                    {state.errors.general}
                </div>
            }
            {state.success === true && (
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
                    <Input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        required
                        defaultValue={state.values.email || user.email}
                        name='email'
                    />

                </div>

                <div className={style.inputGroup}>
                    <label htmlFor="password">Password</label>
                    <Input
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