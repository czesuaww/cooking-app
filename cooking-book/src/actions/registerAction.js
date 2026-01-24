import axiosAuth from '../axiosAuth';

export async function registerAction(prevState, formData) {
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
        }
    }

    try {
        const res = await axiosAuth.post('/accounts:signUp', payload);
        return { success: true, error: {}, values: { email, password }, data: res.data }
    } catch (err) {
        const errorMessage = err.response?.data?.error?.message;

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