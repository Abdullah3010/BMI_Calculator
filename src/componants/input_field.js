
import React from 'react'

const InputField = ({inputClass,lableClass,placeholder,value,lable,onChange}) => {
    return (
        <div className='form-group'>
            <lable className={lableClass}>
                {lable}
            </lable>
            <input 
            className={inputClass}
            type="text" 
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            />
        </div>
    )
}
export default InputField