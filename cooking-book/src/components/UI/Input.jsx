import style from '../UI/Input.module.css';


const Input = (props) => {
    switch (props.desc) {
        case 'title': return <InputText {...props} />
        case 'status': return <InputSelect {...props} />
        case 'description': return <InputTextAreaDesc {...props} />
        case 'ingredients': return <InputTextAreaIngredients {...props} />
        case 'picture': return <InputFile {...props} />
        default: return <InputText {...props} />
    }
}

const InputText = (props) => {
    return (
        <div className={style.container}>
            <label>{props.label}</label>
            <input value={props.value} />
            <h2>{props.error}</h2>
        </div>
    )
}

const InputSelect = (props) => {
    return (
        <div className={style.container}>
            <label>{props.label}</label>
            <select value={props.value} >
                {props.options.map(opt => (
                    <option value={opt.value}>{opt.label}</option>
                ))}
            </select>
            <h2>{props.error}</h2>
        </div>
    )
}

const InputTextAreaDesc = (props) => {
    return (
        <div className={style.container}>
            <label>{props.label}</label>
            <textarea value={props.value} />
            <h2>{props.error}</h2>
        </div>
    )
}

const InputTextAreaIngredients = (props) => {
    return (
        <div className={style.container}>
            <label>{props.label}</label>
            <textarea value={props.value} />
            <h2>{props.error}</h2>
        </div>
    )
}

const InputFile = (props) => {
    return (
        <div className={style.container}>
            <label>{props.label}</label>
            <input type="file" onChange={e => props.onChange(e.target.files[0])} accept="image/*" />
            <h2>{props.error}</h2>
        </div>
    )
}

export default Input;