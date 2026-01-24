import { useActionState, useEffect } from 'react';
import Input from '../../UI/Input';
import style from '../MyRecepies/RecepieForm.module.css';
import { initState } from '../../../store';
import { recepieFormAction } from '../../../actions/recepieFormAction';

const RecepieForm = (props) => {

    const [state, formData, isPending] = useActionState(recepieFormAction, initState);

    useEffect(() => {
        if (state.success && state.values) {
            props.onSubmit(state.values);
        }
    }, [state.success, state.values, props]);

    return (
        <div className={style.container}>
            <form action={formData}>
                <Input
                    name='title'
                    desc='title'
                    label='Name'
                    type='text'
                    defaultValue={state.values?.title || props.initialValues?.title}
                    error={state.error?.title}
                />
                <Input
                    name='description'
                    desc='description'
                    label='Description'
                    type='textarea'
                    defaultValue={state.values?.description || props.initialValues?.description}
                    error={state.error?.description}
                />
                <Input
                    name='ingredients'
                    desc='ingredients'
                    label='Ingredients'
                    type='textarea'
                    defaultValue={state.values?.ingredients || props.initialValues?.ingredients}
                    error={state.error?.ingredients}
                />
                <Input
                    name='prepare'
                    desc='prepare'
                    label='How to prepare'
                    type='textarea'
                    defaultValue={state.values?.prepare || props.initialValues?.prepare}
                    error={state.error?.prepare}
                />
                <Input
                    name='picture'
                    desc='picture'
                    label='Picture'
                    type='file'
                    error={state.error?.picture || props.initialValues?.picture}
                    defaultValue={state.values?.picture}
                />

                <div className={style.btnContainer}>
                    <button className={style.btn}>{isPending ? 'Loading' : 'Save'}</button>
                </div>
            </form>
        </div>
    )
}

export default RecepieForm;