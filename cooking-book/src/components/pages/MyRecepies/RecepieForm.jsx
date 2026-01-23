import { useActionState } from 'react';
import Input from '../../UI/Input';
import style from '../MyRecepies/RecepieForm.module.css';
import { initState } from '../../../store';
import { recepieFormAction } from '../../../actions/recepieFormAction';

const RecepieForm = () => {
    const [state, formData, isPedngin] = useActionState(recepieFormAction, initState);

    return (
        <div className={style.container}>
            <form action={formData}>
                <Input
                    name='title'
                    desc='title'
                    label='Name'
                    type='text'
                    defaultValue={state.values?.title}
                    error={state.error?.title}
                />
                <Input
                    name='description'
                    desc='description'
                    label='Description'
                    type='textarea'
                    defaultValue={state.values?.description}
                    error={state.error?.description}
                />
                <Input
                    name='ingredients'
                    desc='ingredients'
                    label='Ingredients'
                    type='textarea'
                    defaultValue={state.values?.ingredients}
                    error={state.error?.ingredients}
                />
                <Input
                    name='status'
                    desc='status'
                    label='Status'
                    type='select'
                    options={
                        [
                            { value: 1, label: 'Active' },
                            { value: 2, label: 'Hidden' }
                        ]
                    }
                    error={state.error?.status}
                    defaultValue={state.values?.status}
                />
                <Input
                    name='picture'
                    desc='picture'
                    label='Picture'
                    type='file'
                    error={state.error?.picture}
                    defaultValue={state.values?.picture}
                />

                <div className={style.btnContainer}>
                    <button className={style.btn}>{isPedngin ? 'Loading' : 'Save'}</button>
                </div>
            </form>
        </div>
    )
}

export default RecepieForm;