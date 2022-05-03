import { useForm } from 'react-hook-form';

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: ''
    }
  });

  const onSubmit = data => console.log(data);

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="name-row">
      <input 
        {...register("firstName", {
        required: true,
        minLength: 2,
        maxLength: 16,
        pattern: /^[a-z,A-Z ,.'-]{2,16}$/,
        validate: (value) => {
          return !!value.trim()
        }
        })}
        name="firstName"
        type="text"
      />
      <input 
        {...register("lastName", {
        required: true,
        minLength: 2,
        maxLength: 16,
        pattern: /^[a-z,A-Z ,.'-]{2,16}$/,
        validate: (value) => {
          return !!value.trim()
        }
        })}
        name="lastName"
        type="text"
      />
      </div>
      <input 
        {...register("email", {
        required: true,
        minLength: 8,
        maxLength: 39,
        pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        validate: (value) => {
          return !!value.trim()
        }
        })}
        name="email"
        type="email"
      />
      <DisplayErrors errors={errors}/>
      <input type="submit"/>
    </form>
    </>
  )
}

const DisplayErrors = ({ errors }) => {
  if ((errors.firstName && errors.lastName) || 
      (errors.firstName?.type === "validate" && errors.lastName?.type === "validate") ||
      (errors.firstName?.type === "minLength" && errors.lastName?.type === "minLength")) {
    return (
      <div>Enter first and last name</div>
    )
  } else if ((errors.firstName?.type === "pattern" || errors.lastName?.type === "pattern") ||
      (errors.firstName?.type === "maxLength" || errors.lastName?.type === "maxLength") ) {
    return (
      <div>Are you sure you entered your name correctly?</div>
    )
  } else if (errors.firstName && !errors.lastName) {
    return (
      <div>Enter first name</div>
    )
  } else if (!errors.firstName && errors.lastName) {
    return (
      <div>Enter last name</div>
    )
  }
}