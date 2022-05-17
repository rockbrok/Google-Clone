import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";

export default function DeleteAccount() {
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


  return (
    <>
    <h1>Delete your Google Account</h1>
    <h3>Please read this carefully. It’s not the usual yada yada.</h3>
    <p>You’re trying to delete your Google Account, which provides access to various Google services. You’ll no longer be able to use any of those services, and your account and data will be lost.</p>

    <form onSubmit={handleSubmit} noValidate>
      <div className="input-container">
          <input 
            {...register("deleteAccount", {
              required: true,
            })}
            name="deleteAccount"
            type="checkbox"
          />
          Yes, I want to permanently delete this Google Account and all its data.
        </div>
    </form>
    <button>
      <Link to="/myaccount/data-and-personalization/">
        Cancel
      </Link>
    </button>
    <button type="submit">
      DELETE ACCOUNT
    </button>
    </>
  )
}