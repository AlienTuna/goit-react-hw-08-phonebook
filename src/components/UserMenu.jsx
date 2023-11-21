import React from 'react'
import { NavLinkStyled } from './App.styled'
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'dal/requestUserAuth';
import { selectAuthAuthenticated } from 'redux/auth.selector';

const UserMenu = () => {
    const authenticated = useSelector(selectAuthAuthenticated);

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logoutThunk());
    }
    return (
        <div>
            {!authenticated &&
                <>
                    <NavLinkStyled to="/login">Login</NavLinkStyled>
                    <NavLinkStyled to="/register">Register</NavLinkStyled>
                </>
            }

            {authenticated &&
                <button onClick={handleLogout}>Log Out</button>
            }
        </div>
    )
}

export default UserMenu