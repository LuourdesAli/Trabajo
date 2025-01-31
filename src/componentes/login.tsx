//import { loginApi } from '@/resources/resource'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    email: string,
    password: string,
  };

function Login() {
    //loginApi({email:"",password:""})
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        
        console.log(data.email);
        console.log(data.password);
        console.log(data);} 
       
     
  return (
    <form   onSubmit={handleSubmit(onSubmit)}>
    {/* register your input into the hook by invoking the "register" function */}
    <input  defaultValue="test" {...register("email")} />
    
    {/* include validation with required or other standard HTML validation rules */}
    <input {...register("password", { required: true })} />
    {/* errors will return when field validation fails  */}
    {errors.password && <span>This field is required</span>}
    
    <input type="submit" />
  </form>
  )
}

export default Login