import { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

const UserContextProvider = (props) => {
  const [user, setUser] = useState(() => {
    const localData = localStorage.getItem('user');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
   
export default UserContextProvider;