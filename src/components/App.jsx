
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
// import Login from "pages/Login";
// import SignUp from "pages/SignUp";
const SignUp = lazy(() => import('pages/SignUp'))
const Login = lazy(() => import('pages/Login'))
// const Phonebook = lazy(() => import('pages/Phonebook'))


export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUserDataThunk())
  },[dispatch])
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/phonebook" element={<Phonebook />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
          </Route>
        </Routes>
      </Suspense>
    </main>
  )
  // return (
  //   <SectionStyled>
  //     <h1>Phonebook</h1>
  //     <Container>

  //       <h2>Add new contact</h2>
  //       <ContactForm />

  //     </Container>

  //     <Container>

  //       <h2>Contacts</h2>
  //       <Filter />
  //       <ContactList />

  //     </Container>

  //   </SectionStyled>
  // )
}
