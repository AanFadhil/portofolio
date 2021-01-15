import React from 'react';

const Pills = ({data,className,pillsClass}) => {
    
    return(
        <ul className={["list-none flex flex-row gap-x-2 gap-y-2",className].join(' ')}>
            {
                data.map(t => (
                    <li key={t} className={["px-2 rounded-lg text-xs leading-5 font-medium text-gray-700 text-center",pillsClass].join(' ')}>
                        {t}
                    </li>
                ))
            }
        </ul>
    )
}

export default Pills