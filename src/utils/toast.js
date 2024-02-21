import React from 'react'

export default function Toast({ message, type }) {
    return (
        <div className='my-4 flex justify-center items-center'>
            <p
                className={`px-12 py-3
        ${type == 'error' ? 'error' : ''}
        ${type == 'success' ? 'success' : ''}
        `}

            >{message}</p>
        </div>
    )
}
