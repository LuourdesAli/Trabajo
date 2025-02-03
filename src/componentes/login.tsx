import { loginApi } from "@/resources/resource";
import { useForm, SubmitHandler } from "react-hook-form";
import React, { useState } from "react";

type Inputs = {
  email: string;
  password: string;
};

interface userData {
  access_token: string;
  Level: string;
  LevelShort: string;
  MemberLevelId: string;
  MemberNo: string;
  Points: number;
}

function Login() {
  //loginApi({email:"",password:""})
  const [userdata, setUserdata] = useState<userData | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const login = async () => {
      const response = await loginApi({
        email: data.email,
        password: data.password,
      });
      console.log(response);
      if (response !== null) {
        setUserdata(response);
      }
    };
    login();
    console.log(data.email);
    console.log(data.password);
    console.log(data);
  };
  //const [count, setCount] = useState(0);
  //console.log(count);

  console.log(userdata);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
      {userdata?.access_token}
      {userdata?.Level}
      {userdata?.LevelShort}
      {userdata?.MemberNo}
      {userdata?.Points}
      {userdata?.MemberLevelId}

      {/* register your input into the hook by invoking the "register" function */}
      <input placeholder="email" defaultValue="test" {...register("email")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input
        placeholder="password"
        {...register("password", { required: true })}
      />
      {/* errors will return when field validation fails  */}
      {errors.password && <span>This field is required</span>}

      <input type="submit" />

      <div></div>
    </form>
  );
}

export default Login;
