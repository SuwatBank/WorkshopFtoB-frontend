import FormInput from '../../components/form/FormInput';
import createAlert from '../../utils/createAlert';
// react-hook-form is use for handle form submit function
import {useForm} from "react-hook-form";
import Button from '../../components/form/Button';
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from '../../utils/validator';
import { actionLogin } from '../../api/auth';
import useAuthStore from '../../store/auth-store';
import { useNavigate } from 'react-router';

function Login() {
  const navigate = useNavigate()
  // handleSubmit is function that will send value register and send to call back function
  const actionLoginWithZustand = useAuthStore((state)=>state.actionLoginWithZustand)
  // console.log(user)
  const {handleSubmit, register, formState, reset} = useForm({
    resolver: yupResolver(loginSchema)
  });
  const {isSubmitting, errors} = formState;
  // console.log(errors)

  const hdlSubmit = async(value) =>{
    const res = await actionLoginWithZustand(value);
    console.log(res)
    if(res.success){
      console.log(res.role)
      createAlert("success", "Welcome back")
      roleRedirect(res.role)
    }else{
      createAlert("info", res.message)
    }
    // await new Promise((resolve)=>setTimeout(resolve,2000))
    // console.log(value)
    // try {
    //   const res = await actionLoginWithZustand(value);
    //   console.log(res)
    //   createAlert("success", res.data.message)
    //   reset()
    // } catch (error) {
    //   console.log(error);
    //   createAlert("info", error.response?.data?.message)
    // }
  }

  const roleRedirect = (role)=>{
    if(role === "ADMIN"){
      navigate("/admin")
    }else{
      navigate("/user")
    }
  }

  return (
    <div className='flex w-full h-full justify-end'>
      <div className="border w-64 p-4 m-4 rounded-md">
        <h1 className='font-bold text-center mb-4'>Login</h1>

        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="flex flex-col gap-4">
            <FormInput register = {register} errors={errors} name="email" type="email"/>
            <FormInput register = {register} errors={errors} name="password" type="password"/>
          </div>

          <div className='flex justify-center mt-4'>
            <Button label="login" isSubmitting={isSubmitting}/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login