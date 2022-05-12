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
      passwordConfirm: '',
      month: '',
      gender: '',
      day: '',
      year: '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    delayError: 1000,
  });

  const [value, setValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    month: '',
    gender: '',
    day: '',
    year: '',
  })

  const onSubmit = async () => {
    setSuccess(true);
  }

  return (
    <>
      { success ? 
        <SignUpDetails 
          handleSubmit={handleSubmit} 
          value={value}
          setValue={setValue}
          register={register}
          errors={errors}
          watch={watch}
          onSubmit={onSubmit}
        /> 
        : 
        <SignUp 
          handleSubmit={handleSubmit} 
          value={value}
          setValue={setValue}
          register={register}
          errors={errors}
          watch={watch}
          onSubmit={onSubmit}
        />
      }
    </>
  )
}