import Input from '../../UI/Input';
import style from '../MyRecepies/RecepieForm.module.css';

const RecepieForm = () => {
    return (
        <div className={style.container}>
            <Input desc='title' label='Name' type='text' />
            <Input desc='description' label='Description' type='textarea' />
            <Input desc='ingredients' label='Ingredients' type='textarea' />
            <Input desc='status' label='Status' type='select'
                options={
                    [
                        { value: 1, label: 'Active' },
                        { value: 2, label: 'Hidden' }
                    ]
                }
            />
            <Input desc='picture' label='Picture' type='file' />
        </div>
    )
}

export default RecepieForm;