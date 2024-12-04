import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { createContext, useContext, useEffect, useState } from "react";

const queryClient = new QueryClient();
const authUserContext = createContext();

export const useAuthUser = () => {
  return useContext(authUserContext);
};

const getauthUserFromLocalStorage = () => {
  const authUser = localStorage.getItem("authUser");
  return JSON.parse(authUser) ?? [];
};

function App() {
  const [authUser, setAuthUser] = useState(getauthUserFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("authUser", JSON.stringify(authUser));
  }, [authUser]);

  return (
    <authUserContext.Provider value={{ authUser, setAuthUser }}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </authUserContext.Provider>
  );
}

export default App;
