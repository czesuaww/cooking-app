import style from '../UI/Input.module.css';


const Input = (props) => {
    switch (props.desc) {
        case 'title': return <InputTextUnControlled {...props} />
        case 'status': return <InputSelect {...props} />
        case 'password': return <InputTextControlled {...props} type='password' />
        case 'email': return <InputTextControlled {...props} type='email' />
        case 'description': return <InputTextAreaDesc {...props} />
        case 'ingredients': return <InputTextAreaIngredients {...props} />
        case 'picture': return <InputFile {...props} />
        default: return <InputTextUnControlled {...props} />
    }

}


const InputTextUnControlled = (props) => {
    return (
        <div className={style.container}>
            <label>{props.label}</label>
            <input
                name={props.name}
                defaultValue={props.defaultValue}
                type={props.type ?? 'text'}
            />
            <h2 className={style.error}>{props.error}</h2>
        </div>
    )
}

const InputTextControlled = (props) => {
    console.log(props, 'controlled')
    return (
        <div className={style.container}>
            <label>{props.label}</label>
            <input
                name={props.name}
                type={props.type ?? 'text'}
                value={props.value}
                onChange={(e) => props.onChange(e)}
            />
            <h2 className={style.error}>{props.error}</h2>
        </div>
    )
}

const InputSelect = (props) => {
    return (
        <div className={style.container}>
            <label>{props.label}</label>
            <select
                name={props.name}
                defaultValue={props.defaultValue}
            >
                {props.options.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
            </select>
            <h2 className={style.error}>{props.error}</h2>
        </div>
    )
}

const InputTextAreaDesc = (props) => {
    return (
        <div className={style.container}>
            <label>{props.label}</label>
            <textarea defaultValue={props.defaultValue} name={props.name} />
            <h2 className={style.error}>{props.error}</h2>
        </div>
    )
}

const InputTextAreaIngredients = (props) => {
    return (
        <div className={style.container}>
            <label>{props.label}</label>
            <textarea defaultValue={props.defaultValue} name={props.name} />
            <h2 className={style.error}>{props.error}</h2>
        </div>
    )
}

const InputFile = (props) => {
    return (
        <div className={style.container}>
            <label>{props.label}</label>
            <input type="file" name={props.name} accept="image/*" />
            <h2 className={style.error}>{props.error}</h2>
        </div>
    )
}

export default Input;