const { default: styled } = require("@emotion/styled");

export const LoaderOverlay = styled.div`
    align-items: center;
    background-color: rgba(34, 34, 34, 0.5);
    display: flex;
    height: 100vh;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 1200;
    text-align: center;
    font-size: 3em;
`