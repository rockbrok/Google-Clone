import { currentUserURL } from "../SignUp/Details/Form";
import { useContext } from "react";
import { UserContext } from "../../usercontext";
import axios from "axios";

export default function DeleteAccount() {
  const user = useContext(UserContext);

  function deleteUser() { 
    axios.delete(currentUserURL)
    return;
  }
  return (
    <>
    { user ? (<pre>{JSON.stringify(user, null, 2)}</pre>) : ('') }
      <button onClick={() => deleteUser()}>
        Delete account
      </button>
    </>
  )
}