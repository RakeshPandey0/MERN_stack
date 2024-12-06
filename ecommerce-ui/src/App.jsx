import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Products from "./pages/Products";
import { AdminRoutes } from "./layouts/AdminRoute";
import { GuestRoutes } from "./layouts/GuestRoute";
import { HomeLayout } from "./layouts/HomeLayout";
import { ProtectedRoutes } from "./layouts/ProtectedRoute";
import { AuthProvider } from "./providers/AuthProvider";
const queryClient = new QueryClient();

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<HomeLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/orders" element={<h2>orders page</h2>} />
                <Route path="/cart" element={<h2>cart page</h2>} />
              </Route>
              <Route element={<AdminRoutes />}>
                <Route
                  path="/dashboard"
                  element={<h2>This is Dashboard page</h2>}
                />
                <Route
                  path="/dashboard/users"
                  element={<h2>This is Dashboard users page</h2>}
                />
                <Route
                  path="/dashboard/products"
                  element={<h2>This is Dashboard products page</h2>}
                />
              </Route>
            </Route>
            <Route element={<GuestRoutes />}>
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;

// products pagination, filtering, search, api pagination
// sign in sign up if authenticate redirect /
