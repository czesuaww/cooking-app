import Input from "../../UI/Input";

const RecepieForm = () => {
    return (
        <div>
            <Input label="Name" type="text" />
            <Input label='Description' type='textarea' />
            <Input label="Status" type="select"
                options={
                    [
                        { value: 1, label: 'Aktywny' },
                        { value: 2, label: 'Ukryty' }
                    ]
                }
            />
            <Input label='Picture' type='file' />
        </div>
    )
}

export default RecepieForm;