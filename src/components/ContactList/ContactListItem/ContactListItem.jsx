import { useDispatch } from "react-redux";
import { BtnStyled, ItemStyled, NameStyled } from "./ContactListItem.styled";
import { requestDeleteContact} from "dal/requestPhonebookData";

export function ContactListItem({ id, name, number }) {
    const dispatch = useDispatch();
    return (
        <ItemStyled id={id}>
            <span><NameStyled>{name}: </NameStyled>{number}</span> 
            <BtnStyled 
            title="Delete"
            onClick={() => dispatch(requestDeleteContact(id))}
            >❌</BtnStyled>
        </ItemStyled>
    )
}