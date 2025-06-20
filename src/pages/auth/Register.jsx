import FormInput from '../../components/form/FormInput';
import createAlert from '../../utils/createAlert';
// react-hook-form is use for handle form submit function
import {useForm} from "react-hook-form";
import Button from '../../components/form/Button';
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from '../../utils/validator';
import { actionRegister } from '../../api/auth';

function Register() {
  // handleSubmit is function that will send value register and send to call back function
  const {handleSubmit, register, formState, reset} = useForm({
    resolver: yupResolver(registerSchema)
  });
  const {isSubmitting, errors} = formState;
  // console.log(errors)

  const hdlSubmit = async(value) =>{
    await new Promise((resolve)=>setTimeout(resolve,2000))
    console.log(value)
    try {
      const res = await actionRegister(value);
      console.log(res)
      createAlert("success", res.data.message)
      reset()
    } catch (error) {
      console.log(error);
      createAlert("info", error.response?.data?.message)
    }
  }
  return (
    <div className='flex w-full h-full justify-end'>
      <div className="border w-64 p-4 m-4 rounded-md">
        <h1 className='font-bold text-center'>Register</h1>

        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="flex flex-col gap-4">
            <FormInput register = {register} errors={errors} name="email" type="email"/>
            <FormInput register = {register} errors={errors} name="name" type="text"/>
            <FormInput register = {register} errors={errors} name="password" type="password"/>
            <FormInput register = {register} errors={errors} name="confirmPassword" type="password"/>
          </div>

          <div className='flex justify-center mt-4'>
            <Button label="Register" isSubmitting={isSubmitting}/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register