
import { Route, Routes } from "react-router-dom";

// import { ContactForm } from "./ContactForm";
// import { ContactList } from './ContactList';
// import { Filter } from "./Filter";

// import { Container, SectionStyled } from "./App.styled";
import { Suspense } from "react";
import Loader from "./Loader/Loader";
import Layout from "./Layout";
import { Phonebook } from "pages/Phonebook";
import Login from "pages/Login";


export function App() {
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/phonebook" element={<Phonebook />} />
            <Route path="/login" element={<Login />} />
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
