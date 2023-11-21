/*
    главное меню навигации
*/

import { useSelector } from "react-redux";
import { selectAuthAuthenticated } from "redux/auth.selector";
import UserMenu from "./UserMenu";

const { NavStyled, NavLinkStyled } = require("./App.styled");

const Navigation = () => {
    const authenticated = useSelector(selectAuthAuthenticated);

    return (
        <NavStyled className="navigation">
            {authenticated &&
                <>
                    <NavLinkStyled to="/phonebook">Phonebook</NavLinkStyled>
                </>
            }
            {!authenticated &&
                <>
                    <h2>Welcome to phonebook!</h2>
                </>
            }
            
            <UserMenu />
        </NavStyled>
    )
}

export default Navigation;