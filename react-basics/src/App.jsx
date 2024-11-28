import { User } from "./pages/User";
import { Pokemon } from "./pages/Pokemon";
import { createContext, useContext, useState } from "react";
import { Counter } from "./Counter";

const UserContext = createContext(null);

export function UseUser(){
  return useContext(UserContext);
}
function App() {
  const [user, setUser] = useState({name:"user", role:["admin"]})
  return (
    <>
    <UserContext.Provider value={user}>
    {/* <User />
    <Pokemon /> */}
    <Counter />
    </UserContext.Provider>
    </>
  );
}

export default App;