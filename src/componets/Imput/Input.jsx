import React from 'react'

const Input = () => {

    const inputHandler = (event)=>{

        const vocales = ['a','e','i','o','u' ]
        if(vocales.includes(event.key)) {
            event.preventDefault()
            //event.stopPropagation();
            console.log(event.key)
        }

    }
    return (
    <div className='box'>
        <div className='border border-1 border-warning'>
            <input
                className='m-5'
                onKeyDown={ inputHandler }
                //onClick={ inputHandler }
                type='text'
                name='nombre'
                id='i'
                />
        </div>
    </div>
    )
}

export default Input