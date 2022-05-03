import { ShowPassword } from './SignPage/ShowPassword';
import { SignInInstead, ErrorLogo, Next } from '../pages/SignUp';
import { useForm } from 'react-hook-form';

export default function Register() {
  const { register, watch, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: ''
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    delayError: 2000,
  });

  const onSubmit = data => console.log(data);
  console.log(watch());

  const validPasswordRegex =  /^(?=.*?[A-Z,a-z]).{8,}$/;
  const validEmailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/; // user@domain.com //
  const noUsernameRegex = /^@\w+([.-]?\w+)*$/; // @hello //
  const noUsernameDotRegex = /^@\w+([.-]?\w+)*(\.)$/; // @domain. //
  const onlyCharactersRegex = /^\w+([.-]?\w+)*$/; // adsfasdfasdf //
  const noDomainRegex = /^\w+([.-]?\w+)*@$/; // user@ //
  const noAtRegex = /^\w+([.-]?\w+)*(\.)+$/; // user. //
  const noAtWithTopDomainRegex = /^\w+([.-]?\w+)*(\.\w{2,3})+$/; // user.com //
  const emptyStringRegex = /^(?![\s\S])/; // '' //

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="signup-form" noValidate>
      <div className="name-row">
        <div className="input-container">
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
            autoComplete="off"
            name="firstName"
            type="text"
            className={(
              errors.firstName?.type === "pattern" ||
              errors.firstName?.type === "minLength" ||
              errors.firstName?.type === "maxLength" ||
              errors.firstName?.type === "validate" ||
              errors.firstName?.type === "required")
              ? "signup-input-error" : "signup-input"
            }
            aria-invalid={errors.firstName ? "true" : "false"}
          />
        </div>
        <div className="input-container">
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
            autoComplete="off"
            name="lastName"
            type="text"
            className={(
              errors.lastName?.type === "pattern" ||
              errors.lastName?.type === "minLength" ||
              errors.lastName?.type === "maxLength" ||
              errors.lastName?.type === "validate" ||
              errors.lastName?.type === "required")
              ? "signup-input-error" : "signup-input"
            }
            aria-invalid={errors.lastName ? "true" : "false"}
          />
        </div>
      </div>
      <NameErrors errors={errors}/>
      <div className="input-container">
        <input 
          {...register("email", {
            required: true,
            validate: {
              noUsername: (value) => noUsernameRegex.test(value) ? false : true, // @domain //
              noUsernameDot: (value) => noUsernameDotRegex.test(value) ? false : true, // @domain. //
              onlyCharacters: (value) => onlyCharactersRegex.test(value) ? false : true, // abcdefg //
              validEmail: (value) => validEmailRegex.test(value) ? false : true, // user@domain.com //
              noDomain: (value) => noDomainRegex.test(value) ? false : true, // user@ //
              noAt: (value) => noAtRegex.test(value) ? false : true, // user. //
              noAtWithTopDomain : (value) => noAtWithTopDomainRegex.test(value) ? false : true, // user.com // 
              emptyString: (value) => emptyStringRegex.test(value) ? false : true, // ' ' //
            }
          })}
          autoComplete="off"
          name="email"
          type="email"
          className={(
            errors.email?.type === "noUsername" ||
            errors.email?.type === "noUsernameDot" ||
            errors.email?.type === "onlyCharacters" ||
            errors.email?.type === "noDomain" ||
            errors.email?.type === "required" ||
            errors.email?.type === "noAt" ||
            errors.email?.type === "emptyString" ||
            errors.email?.type === "noAtWithTopDomain" ||
            errors.email?.type !== "validEmail")
            ? "signup-input-error" : "signup-input"
          }
          aria-invalid={errors.firstName ? "true" : "false"}
        />
      </div>
      <EmailErrors errors={errors}/>
      <div className="name-row">
        <div className="input-container">
          <input 
            {...register("password", {
              required: true,
              minLength: 8,
              validate: {
                emptyString: (value) => emptyStringRegex.test(value) ? false : true, // ' ' //
                validPassword: (value) => validPasswordRegex.test(value) ? false : true
              }
            })}
            autoComplete="off"
            name="password"
            id="password"
            type="password"
            aria-invalid={errors.password ? "true" : "false"}
          />
        </div>

        <div className="input-container">
          <input 
            {...register("passwordConfirm", {
              required: true,
              minLength: 8,
              validate: {
                emptyString: (value) => emptyStringRegex.test(value) ? false : true, // ' ' //
                passwordConfirm: (value) => value === watch('password') ? false : true,
                validPassword: (value) => validPasswordRegex.test(value) ? false : true
              }
            })}
            autoComplete="off"
            name="passwordConfirm"
            id="passwordConfirm"
            type="password"
            className={errors.passwordConfirm ? "signup-input-error" : "signup-input"}
            aria-invalid={errors.passwordConfirm ? "true" : "false"}
          />
        </div>
      </div>
      <PasswordErrors errors={errors}/>
      <ShowPassword />
      <div className="button-row">
        <SignInInstead />
        <Next />
      </div>
    </form>
  )
}

const NameErrors = ({ errors }) => {
  if ((errors.firstName?.type === "required" && errors.lastName?.type === "required") || 
      (errors.firstName?.type === "validate" && errors.lastName?.type === "validate") ||
      (errors.firstName?.type === "minLength" && errors.lastName?.type === "minLength")) {
    return (
      <div className="invalid">
        <ErrorLogo/>
        <p className="invalidtext">Enter first and last names</p>
      </div>
    )
  } else if ((errors.firstName?.type === "pattern" || errors.lastName?.type === "pattern") ||
      (errors.firstName?.type === "maxLength" || errors.lastName?.type === "maxLength")) {
    return (
      <div className="invalid">
        <ErrorLogo/>
        <p className="invalidtext">Are you sure you entered your name correctly?</p>
      </div>
    )
  } else if (errors.firstName && !errors.lastName) {
    return (
      <div className="invalid">
        <ErrorLogo/>
        <p className="invalidtext">Enter first name</p>
      </div>
    )
  } else if (!errors.firstName && errors.lastName) {
    return (
      <div className="invalid">
        <ErrorLogo/>
        <p className="invalidtext">Enter last name</p>
      </div>
    )
  }
}

const EmailErrors = ({ errors }) => {
  if ((errors.email?.type === "required") ||
    (errors.email?.type === "emptyString")) {
    return (
      <div className="invalid">
        <ErrorLogo/>
        <p className="invalidtext">Enter your email address</p>
      </div>
    )
  } else if ((errors.email?.type === "noUsername") || 
    (errors.email?.type === "noUsernameDot")) {
    return (
      <div className="invalid">
        <ErrorLogo/>
        <p className="invalidtext">Enter a username before the '@'.</p>
      </div>
    )
  } else if ((errors.email?.type === "onlyCharacters") ||
    (errors.email?.type === "noAt") ||
    (errors.email?.type === "noAtWithTopDomain")) {
    return (
      <div className="invalid">
        <ErrorLogo/>
        <p className="invalidtext">Don't forget to include '@'.</p>
      </div>
    )
  } else if (errors.email?.type === "noDomain") {
    return (
      <div className="invalid">
        <ErrorLogo/>
        <p className="invalidtext">Enter a domain after '@'.</p>
      </div>
    )
  } else if ((errors.email?.type !== "validEmail") &&
    (errors.email?.type !== "noUsername") &&
    (errors.email?.type !== "noUsernameDot") &&
    (errors.email?.type !== "onlyCharacters") &&
    (errors.email?.type !== "noDomain") &&
    (errors.email?.type !== "noAt") &&
    (errors.email?.type !== "noAtWithTopDomain") &&
    (errors.email?.type !== "emptyString") &&
    (errors.email?.type !== "required")) {
    return (
      <div className="invalid">
        <ErrorLogo/>
        <p className="invalidtext">This email address is not valid.</p>
      </div>
    )
  }
}

const PasswordErrors = ({ errors }) => {
  if ((errors.password?.type === "required") || 
    (errors.password?.type === "required" && 
    errors.passwordConfirm?.type === "required")) {
    return (
      <div className="invalid">
        <ErrorLogo/>
        <p className="invalidtext">Enter a password</p>
      </div>
    )
  } else if (errors.password?.type === "minLength") {
    return (
      <div className="invalid">
        <ErrorLogo/>
        <p className="invalidtext">Use 8 characters or more for your password</p>
      </div>
    )
  } else if (errors.password?.type === "validPassword" &&
    errors.password?.type !== "minLength" &&
    errors.passwordConfirm?.type === "required") {
    return (
      <div className="invalid">
        <ErrorLogo/>
        <p className="invalidtext">Confirm your password</p>
      </div>
    )
  } else if (errors.password?.type === "validPassword" &&
    errors.passwordConfirm?.type !== "required" &&
    errors.passwordConfirm?.type !== "passwordConfirm") {
    return (
      <div className="invalid">
        <ErrorLogo/>
        <p className="invalidtext">Those passwords didn't match. Try again.</p>
      </div>
    )
  }
}
