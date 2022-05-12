import SignUpDetails from "./Details";
import SignUpEmail from "./Email";
import { Helmet } from 'react-helmet';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { t } from 'i18next';

export default function SignUp() {
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
      <Helmet>
        <title>Create your Google Account</title>
      </Helmet>
      { success ? 
        <SignUpDetails 
          handleSubmit={handleSubmit} 
          value={value}
          setValue={setValue}
          register={register}
          errors={errors}
          watch={watch}
          Next={Next}
        /> 
        : 
        <SignUpEmail 
          handleSubmit={handleSubmit} 
          value={value}
          setValue={setValue}
          register={register}
          errors={errors}
          watch={watch}
          onSubmit={onSubmit}
          Next={Next}
        />
      }
    </>
  )
}

export const Next = () => (
  <button type="submit" className="next">
    {t('next')}
  </button>
);
