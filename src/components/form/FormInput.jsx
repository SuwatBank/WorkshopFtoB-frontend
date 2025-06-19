import React from 'react'

function FormInput({name, register, type}) {
  return (
    <div>
      {/* form */}
      <input type={type} 
        className='border w-full rounded-md border-gray-400 mb-3 p-1' 
        placeholder={name}
        {...register(name)}
      />
      
    </div>
  )
}

export default FormInput