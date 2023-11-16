import { NavLink, Outlet } from "react-router-dom";

const { NavStyled } = require("./App.styled");

const Layout = () => {
    return (
        <>
            <NavStyled>
                <NavLink to="/phonebook">Phonebook</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/user-info">User-info</NavLink>
            </NavStyled>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout;