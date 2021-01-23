const TextBox = ({
    label: labelProps,
    type: typeProps,
    name: nameProps,
    required: requiredProps = false,
    max: maxProps
}) => {
    return (
        <div className="mb-2">
            <label className="font-bold text-sm mb-2 ml-1" htmlFor={nameProps}>{labelProps}</label>
            <div>
                <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-purple-500 transition-colors"
                    rules={[
                        requiredProps ? 'required' : '',
                        maxProps ? 'max:' + maxProps : ''
                    ].join('|')}
                    name={nameProps}
                    type={typeProps} />
            </div>
        </div>
    )
}

export default TextBox