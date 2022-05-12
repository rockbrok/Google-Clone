import { Information, Back } from '..';
import { t } from 'i18next';
import axios from 'axios';

export default function Form({ value, setValue, register, handleSubmit, errors, watch }) {
  const onSubmit = async() => {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5000/users",
        data: {
          firstName: value.firstName,
          lastName: value.lastName,
          email: value.email,
          password: value.password,
          month: value.month,
          day: value.day,
          year: value.year,
          gender: value.gender,
        },
        headers: { "Content-Type": "application/json"},
      });
    } catch(error) {
      console.log(error.response.data)
    }
  }

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  }

  console.log(watch());

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="signup-form" noValidate>
      <div className="birthday-row">
        <div className="input-container">
          <select 
            {...register("month", {
              required: true
            })}
            className="signup-input" 
            name="month"
            size="1"
            value={value.month}
          >
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>
          <span className="signup-input-placeholder">
            ''
          </span>
        </div>
        <div className="input-container">
          <input 
            {...register("day", {
              required: true,
              minLength: 1,
              maxLength: 2,
              pattern: /[0-9]$/,
              validate: (value) => {
                return !!value.trim()
              }
            })}
            autoComplete="off"
            name="day"
            type="number"
            min="0"
            max="32"
            value={value.day}
            onChange={handleChange}
            className="signup-input"
          />
          <span className="signup-input-placeholder">
            Day
          </span>
        </div>
        <div className="input-container">
          <input 
            {...register("year", {
              required: true,
              minLength: 4,
              maxLength: 4,
              pattern: /[0-9]{4}$/,
              validate: (value) => {
                return !!value.trim()
              }
            })}
            autoComplete="off"
            name="year"
            type="number"
            min="1900"
            max="2022"
            value={value.year}
            onChange={handleChange}
            className="signup-input"
          />
          <span className="signup-input-placeholder">
            Year
          </span>
        </div>
      </div>
      <BirthdayNote errors={errors}/>
      <div className="input-container">
        <select 
          {...register("gender", {
            required: true
          })}
          className="signup-input"
          name="gender"
          size="1"
          value={value.gender}
        >
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <span className="signup-input-placeholder">
          ''
        </span>
      </div>
      <Information />
      <div className="button-row">
        <Back />
        <Next/>
      </div>
    </form>
  )
}

const BirthdayNote = () => (
  <div className="signup-note">
    Your birthday
  </div>
);

const Next = () => (
  <button type="submit" className="next">
    {t('next')}
  </button>
);