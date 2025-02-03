import { loginApi } from "@/resources/resource";
import { useForm, SubmitHandler } from "react-hook-form";
import React, { useState } from "react";

type Inputs = {
  email: string;
  password: string;
};

interface userData {
  //se indica los datos que se van a usar de lo que tiene almacenado esta parte es despues del uso del estado
  access_token: string;
  Level: string;
  LevelShort: string;
  MemberLevelId: string;
  MemberNo: string;
  Points: number;
}

function Login() {
  //loginApi({email:"",password:""})
  const [userdata, setUserdata] = useState<userData | null>(null); //aqui inicia mi estado
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>(); //aqui indicas su uso en vista

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    //indica logica al a pretar un boto manda a llamar
    const login = async () => {
      const response = await loginApi({
        //aqui esta haciendo el consumo
        email: data.email, //indica los datos de la secion
        password: data.password,
      });
      console.log(response); //aqui ya muestra los datos
      if (response !== null) {
        setUserdata(response); //aqui almacena los datos para poderlos usar
      }

      sessionStorage.setItem("usuario", JSON.stringify(response));
      alert("Usuario guardado en sessionStorage.");
    };

    login();
    // console.log(data.email);
    // console.log(data.password);
    // console.log(data);
  };
  //const [count, setCount] = useState(0);
  //console.log(count);
  //console.log(userdata);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {userdata?.access_token}{" "}
      {/* en esta parte ya se consume de forma visual lo que permite ver lo del codigo */}
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
