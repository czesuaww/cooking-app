import axiosAuth from '../axiosAuth';

export async function loginAction(prevState, formData) {
    const email = formData.get('email');
    const password = formData.get('password');

    const payload = {
        email,
        password,
        returnSecureToken: true
    }

    if (!email || !password) {
        return {
            success: false,
            error: { general: "Please fill in all fields" },
            values: { email, password }
        };
    }

    try {
        const res = await axiosAuth.post('/accounts:signInWithPassword', payload);
        return { success: true, error: {}, values: { email, password }, data: res.data };
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