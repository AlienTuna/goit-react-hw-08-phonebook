
import { Container, SectionStyled } from "components/App.styled";
import { ContactForm } from "components/ContactForm";
import { ContactList } from "components/ContactList";
import { Filter } from "components/Filter";


export function Phonebook() {
  return (
    <SectionStyled>
      <h1>Phonebook</h1>
      <Container>

        <h2>Add new contact</h2>
        <ContactForm />

      </Container>

      <Container>

        <h2>Contacts</h2>
        <Filter />
        <ContactList />

      </Container>

    </SectionStyled>
  )
}
