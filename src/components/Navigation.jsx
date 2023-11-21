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
            <div>
                <NavLinkStyled to="/">Home</NavLinkStyled>
                {authenticated &&
                    <NavLinkStyled to="/phonebook">Phonebook</NavLinkStyled>
                }
            </div>

            <UserMenu />
        </NavStyled>
    )
}

export default Navigation;