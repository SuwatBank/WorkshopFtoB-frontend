function FormInput({name, register, type="text", errors}) {
  return (
    <div>
      {/* form */}
      <>
        <input type={type} 
          className='border w-full rounded-md border-gray-400 mb-3 p-1' 
          placeholder={name}
          {...register(name)}
        />
        <div>
          {
            errors[name] && <p className='text-red-500 text-sm'>{errors[name].message}</p>
          }
        </div>
      </>
      
    </div>
  )
}

export default FormInput