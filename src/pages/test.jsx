import axios from 'axios';

export default function Test() {
  const onChange = async (e) => {
    const response = await axios.get("http://localhost:5000/users/");
    const userInput = (e.target.value).toLowerCase();

    for (let i = 0; i < response.data.length; i++) {
      if (response.data[i].email === userInput) {
        console.log("email matches");
      }
    }
  }

  return (
    <form onChange={onChange}>
      <input
        type="text"
        name="email"
        placeholder="enter email"
        autoComplete='off'
      />
    </form>
  )
}
