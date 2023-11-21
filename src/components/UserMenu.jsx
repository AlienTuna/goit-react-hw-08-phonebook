import React from 'react'
import { ButtonStyledLogout, NavLinkStyled, SpanStyledUserName } from './App.styled'
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'dal/requestUserAuth';
import { selectAuthAuthenticated, selectAuthUserInfo } from 'redux/auth.selector';

const UserMenu = () => {
    const authenticated = useSelector(selectAuthAuthenticated);
    const userInfo = useSelector(selectAuthUserInfo);

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
                <>
                {/* <img src="https://www.iconsdb.com/icons/preview/orange/checked-user-xxl.png" alt="user icon" /> 👤*/}
                    Logged in as <SpanStyledUserName>{userInfo?.email}</SpanStyledUserName>
                    <ButtonStyledLogout onClick={handleLogout}>Logout</ButtonStyledLogout>
                </>
            }
        </div>
    )
}

export default UserMenu