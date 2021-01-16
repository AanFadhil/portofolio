const Sub = ({ children, level = 2, className = "" }) => {
    const Elm = `h${level}`
    let classes = "font-bold text-gray-800 text-xl mb-2"

    switch (level) {
        case 1:
            classes = "font-bold text-black text-3xl mb-2"
            break;
        case 2:
            classes = "font-bold text-gray-800 text-2xl mb-2"
            break;
        case 3:
            classes = "font-bold text-gray-700 text-xl mb-2"
            break;
        case 4:
            classes = "font-bold text-gray-700 text-lg mb-2"
            break;
        case 5:
            classes = "font-bold text-gray-600 mb-2"
            break;
    }


    return (
        <Elm className={[classes, className].join(' ')}>{children}</Elm>
    )
}
export default Sub
