export async function recepieFormAction(prevState, formData) {

    const data = {
        title: formData.get('title'),
        description: formData.get('description'),
        ingredients: formData.get('ingredients'),
        status: formData.get('status'),
        picture: formData.get('picture')
    }

    const errors = {}

    Object.entries(data).forEach(([key, value]) => {
        if (typeof value === 'string' && value.trim() === '') {
            errors[key] = 'Required'
        }

        if (data.status === '') {
            errors[key] = 'Required'
        }
    });

    if (Object.values(errors).length > 0) {
        return {
            success: false,
            error: errors,
            values: data
        }
    }

    return {
        success: true,
        error: {},
        values: data
    }

}