export async function userAction(email, password) {
    await new Promise(res => setTimeout(res, 1000));
    // const email = formData.get('email');
    // const password = formData.get('password');
    const errors = {};

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    if (!emailRegex) {
        errors.email = 'Invalid email';
    }

    if (password.trim().length < 6) {
        errors.password = 'Password is to short';
    }
    if (Object.keys(errors).length > 0) {
        return {
            success: false,
            error: errors,
            values: { email, password }
        }
    }
    return {
        success: true,
        error: [],
        values: { email, password }
    }
}
