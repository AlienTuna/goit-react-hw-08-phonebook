/*
    главное меню навигации
*/

import { useSelector } from "react-redux";
import { selectAuthAuthenticated } from "redux/auth.selector";

const { NavStyled, NavLinkStyled } = require("./App.styled");

const Navigation = () => {
    const authenticated = useSelector(selectAuthAuthenticated);

    return (
        <NavStyled className="navigation">
            {authenticated &&
                <>
                    <NavLinkStyled to="/phonebook">Phonebook</NavLinkStyled>
                    <button>Log Out</button>
                    {/* <NavLinkStyled to="/user-info">User-info</NavLinkStyled> */}
                </>
            }
            {!authenticated &&
                <>
                    <NavLinkStyled to="/login">Login</NavLinkStyled>
                    <NavLinkStyled to="/register">Register</NavLinkStyled>
                </>
            }
        </NavStyled>
    )
}

export default Navigation;