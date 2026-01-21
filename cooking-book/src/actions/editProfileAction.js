export async function editProfileAction(prevState, formData) {
    await new Promise(res => setTimeout(res, 1000));

    return {
        succes: !prevState.succes,
        error: ['Wrong email'],
        values: {
            email: formData.get('email'),
            password: formData.get('password')
        }
    }
}
