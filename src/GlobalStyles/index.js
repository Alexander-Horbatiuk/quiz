import { styled, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  .fade-enter {
      opacity: 0;
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .fade-enter-active {
      opacity: 1;
      transition: opacity 300ms ;
    }

    .fade-exit {
      opacity: 1;
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .fade-exit-active {
      opacity: 0;
      transition: opacity 700ms ;
    }
`;

export const AppDiv = styled.div`
    position: relative;
    text-align: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 550px;
`;

export const AppContent = styled.div`
    max-width: 335px;
    width: 100%;
    position: relative;
    /* padding: 10px; */
    box-sizing: border-box;
    height: 100%;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    color: #fff;
`;

export const PrivacyPoliticStyle = styled.span`
    font-size: 15px;
`;

export const LinkStyle = styled.span`
    list-style: none;
    color: #eb2f9a;
`;

export const Title = styled.h2`
    font-size: 28px;
    line-height: 34px;
    margin: 0;
    color: #fff;
`;

export const SubTitle = styled.span`
    font-size: 17px;
    line-height: 24px;
    color: #c4c8cc;
`;

export const Form = styled.form`
    max-width: 335px;
    width: 100%;
`;

export const InputEmail = styled.input.attrs({ type: 'text' })`
    padding: 20px;
    box-sizing: border-box;
    border-radius: 16px;
    max-width: 335px;
    width: 100%;
    border: none;
    outline: none;
    border: 1px solid ${(props) => props.borderColorValidate};
    font-size: 17px;
    background: #36173d;
    color: #fff;
`;
