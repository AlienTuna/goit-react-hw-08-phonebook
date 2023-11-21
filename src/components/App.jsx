
import { Route, Routes } from "react-router-dom";

// import { ContactForm } from "./ContactForm";
// import { ContactList } from './ContactList';
// import { Filter } from "./Filter";

// import { Container, SectionStyled } from "./App.styled";
import { Suspense, lazy, useEffect } from "react";
import Loader from "./Loader/Loader";
import Layout from "./Layout";
import { Phonebook } from "pages/Phonebook";
import { useDispatch } from "react-redux";
import { refreshUserDataThunk } from "dal/requestUserAuth";
import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";
// import Login from "pages/Login";
// import SignUp from "pages/SignUp";
const SignUp = lazy(() => import('pages/SignUp'))
const Login = lazy(() => import('pages/Login'))
// const Phonebook = lazy(() => import('pages/Phonebook'))


export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUserDataThunk())
  }, [dispatch])
  return (
    <main className="mainContainer">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/phonebook" element={<PrivateRoute><Phonebook /></PrivateRoute>} />
            <Route path="/login" element={<RestrictedRoute><Login /></RestrictedRoute>} />
            <Route path="/register" element={<RestrictedRoute><SignUp /></RestrictedRoute>} />
          </Route>
        </Routes>
      </Suspense>
      {/* <h1>Welcome to phonebook App!</h1> */}
    </main>
  )
}
