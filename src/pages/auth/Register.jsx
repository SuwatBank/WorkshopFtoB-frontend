import FormInput from '../../components/form/FormInput';
import createAlert from '../../utils/createAlert';
// react-hook-form is use for handle form submit function
import {useForm} from "react-hook-form";

import axios from "axios"

function Register() {

  const {handleSubmit, register} = useForm();

  const hdlSubmit = async(value) =>{
    console.log(value)
    try {
      const res = await axios.post("http://localhost:8000/auth/register",value);
      console.log(res)
    } catch (error) {
      console.log(error);
      createAlert("info", error.response?.data?.message)
    }
  }
  return (
    <div className='flex w-full h-full justify-end'>
      <div className="border w-64 h-[350px] p-4 m-4 rounded-md">
        <h1 className='font-bold text-center'>Register</h1>

        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="flex flex-col gap-4">
            <FormInput register = {register} name="email" type="email"/>
            <FormInput register = {register} name="name" type="text"/>
            <FormInput register = {register} name="password" type="password"/>
            <FormInput register = {register} name="confirmPassword" type="password"/>
          </div>

          <div className='flex justify-center mt-4'>
            <button className='bg-black text-white p-2 rounded-md' > Register </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register