import axiosAuth from '../axiosAuth';

export async function editProfileAction(prevState, formData, idToken) {
    const email = formData.get('email');
    const password = formData.get('password');

    const payload = {
        email: email,
        returnSecureToken: true,
        idToken
    }

    if (password) payload.password = password;

    try {
        const res = await axiosAuth.post('/accounts:update', payload);
        window.localStorage.setItem('user', JSON.stringify(res.data))

        return { success: true, errors: {}, values: { email, password } };
    } catch (err) {
        const errorMessage = err.response?.data?.error?.message;
        let message = {}

        if (errorMessage.includes('OPERATION_NOT_ALLOWED')) {
            message = { general: "Please verify the email before changing email" }
        } else if (errorMessage.includes('WEAK_PASSWORD')) {
            message = { general: 'Password should be at least 6 characters' }
        } else if (errorMessage === 'TOKEN_EXPIRED') {
            message = { general: 'Token expired ' }
        } else if (errorMessage === 'CREDENTIAL_TOO_OLD_LOGIN_AGAIN') {
            message = { general: 'Login again to change your password ' }
        }

        return {
            success: false,
            errors: message,
            values: { email, password }
        }
    }

}


