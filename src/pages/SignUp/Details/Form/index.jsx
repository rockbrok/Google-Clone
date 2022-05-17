import { Information, Back } from '..';
import { t } from 'i18next';
import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../../../../usercontext';

export default function Form({ value, setValue, register, handleSubmit, errors, watch, Next }) {
  const { user, setUser } = useContext(UserContext);

  const currentUser = async () => {
    let URL = "http://localhost:5000/users?email=" + value.email;
    let response = await axios.get(URL);
    return response.data;
  };

  const onSubmit = async(formData) => {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5000/users",
        data: {
          firstName: value.firstName,
          lastName: value.lastName,
          email: value.email,
          password: value.password,
          gender: value.gender,
          dateOfBirth: value.month + '/' + value.day + '/' + value.year,
        },
        headers: { "Content-Type": "application/json"},
      });
      setTimeout(function () {
        window.location.href = "http://localhost:3000/";
      }, 250);
    } catch(error) {
      console.log(error.response.data)
    }
    const user = await currentUser();
      setUser(user);
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
            type="month"
            size="1"
            onChange={handleChange}
            value={value.month}
          >
            <option value="" className="signup-input-placeholder" defaultValue disabled hidden />
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
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
          onChange={handleChange}
          value={value.gender}
        >
          <option value="" className="signup-input-placeholder" defaultValue disabled hidden />
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
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
