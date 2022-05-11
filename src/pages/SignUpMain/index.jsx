import SignUpDetails from "../SignUpDetails";
import SignUp from "../SignUp";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function SignUpMain() {
  const [success, setSuccess] = useState(false);

  const {register, handleSubmit, watch, formState: { errors }} = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: ''
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    delayError: 1000,
  });

  const [value, setValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  function check() {
    if (value.firstName && value.lastName && value.email && value.password) {
      console.log("error");
      return;
    }
    setSuccess(true);
  }

  return (
    <>
      { success ? <SignUpDetails /> : 
        <SignUp 
          handleSubmit={handleSubmit} 
          value={value}
          setValue={setValue}
          register={register}
          errors={errors}
          watch={watch}
          check={check}
        />
      }
    </>
  )
}