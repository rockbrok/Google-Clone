import { Information, Back } from '..';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { t } from 'i18next';
import axios from 'axios';

export default function Form() {
  const [value, setValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    month: '',
    gender: '',
  })

  const {register, watch, handleSubmit, formState: { errors }} = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: '',
      month: {},
      day: '',
      year: '',
      gender: {}
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    delayError: 1000,
  });

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
            {...register("month")}
            className="signup-input" 
            name="month"
            size="1"
          >
            <option value={value.month}>January</option>
            <option value={value.january}>February</option>
            <option value={value.january}>March</option>
            <option value={value.january}>April</option>
            <option value={value.january}>May</option>
            <option value={value.january}>June</option>
            <option value={value.january}>July</option>
            <option value={value.january}>August</option>
            <option value={value.january}>September</option>
            <option value={value.january}>October</option>
            <option value={value.january}>November</option>
            <option value={value.january}>December</option>
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
          {...register("gender")}
          className="signup-input"
          name="gender"
          size="1"
        >
          <option value={value.gender}>Male</option>
          <option value={value.gender}>Female</option>
          <option value={value.gender}>Other</option>
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

const BirthdayNote = ({ errors }) => (
  (!errors.password) ?
    <div className="signup-note">
      Your birthday
    </div> : ''
);

const Next = ({ show, setShow }) => (
  <button type="submit" className="next">
    {t('next')}
  </button>
);