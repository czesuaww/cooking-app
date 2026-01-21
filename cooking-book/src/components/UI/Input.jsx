const Input = (props) => {

    switch (props.type) {
        case 'text': return <InputText {...props} />
        case 'select': return <InputSelect {...props} />
        case 'textarea': return <InputTextArea {...props} />
        case 'file': return <InputFile {...props} />
        default: return <InputText {...props} />
    }
}

const InputText = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <input value={props.value} />
            <h2>{props.error}</h2>
        </div>
    )
}

const InputSelect = (props) => {
    return (
        <div>
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

const InputTextArea = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <textarea value={props.value} />
            <h2>{props.error}</h2>
        </div>
    )
}

const InputFile = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <input type="file" onChange={e => props.onChange(e.target.files[0])} accept="image/*" />
            <h2>{props.error}</h2>
        </div>
    )
}

export default Input;