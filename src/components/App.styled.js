import styled from "@emotion/styled";
import { NavLink} from "react-router-dom";

export const Container = styled.div`
    border: solid 1px var(--txt-clr);
    margin: 20px auto;
    padding: 20px;
`
export const SectionStyled = styled.div`
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
`
export const NavStyled = styled.nav`
    margin: 20px 0 50px 20px;
    font-weight: 700;
    font-weight: 700;
    padding: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    background-color: var(--input-bg-clr);
    box-shadow: 0 5px 10px black;
`
export const NavLinkStyled = styled(NavLink)`
        padding: 20px;
        transition: all .5s;
        font-size: 18px;
        color: var(--txt-main-color);
        font-style: bold;
        border-bottom: solid 2px transparent;

    &:hover, &:focus {
        color: var(--txt-bright-color);
        border-bottom: solid 2px var(--txt-bright-color);
        outline: none
    }
    &:focus {
        outline: 1px ridge var(--dark-yellow-color);
        border-radius: 2px;
        background-color: var(--dark-yellow-color);
    }
    &.active {
        color: var(--txt-main-color);
        border-bottom: ridge 2px var(--txt-main-color);
    }
`

export const ButtonStyledLogout = styled.button`
        border: none;
        background-color: none;

        padding: 20px;
        transition: all .5s;
        font-size: 18px;
        color: var(--txt-main-color);
        font-style: bold;
        border-bottom: solid 2px transparent;
`